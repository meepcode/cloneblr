FROM node:25-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm@10

# Runs development environment
FROM base AS dev

WORKDIR /app

COPY ./package.json ./pnpm*.yaml /app/ 

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

EXPOSE 5137

CMD ["pnpm", "run", "-r", "dev"]

# Build the files
FROM base AS build

COPY . /app
WORKDIR /app

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

RUN pnpm fetch
RUN pnpm run -r build

RUN pnpm deploy --filter=server --prod /prod/server
RUN pnpm deploy --filter=client --prod /prod/client

# Runs the express server
FROM base AS express-server
COPY --from=build /prod/server /prod/server
WORKDIR /prod/server
EXPOSE 3000
CMD [ "pnpm", "start" ]

# Runs the nginx to server the client
FROM nginx:latest AS nginx-server
COPY --from=build /prod/client /prod/client
COPY ./nginx.conf /etc/nginx/nginx.conf
WORKDIR /prod/client
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]