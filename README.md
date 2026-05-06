# Cloneblr
This is a toy clone of Tumblr, both for showcasing my skills, and developing my skills with new technologies. It is written using React, Node+Express, and Postgres, and utilizes Docker and nginx for deployment.  

## Roadmap
- [ ] Initial development setup
  - [x] Setup project structure, including Typescript, PNPM, ESLint and Prettier
  - [x] Create framework for running server+client in Docker
  - [ ] Setup and learn Prisma ORM for development
  - [ ] Setup testing framework
- [ ] Backend (Database, REST, Auth)
- [ ] Frontend (React, Tanstack Router)
- [ ] CI/CD and AWS Deployment

## Running

Before running, make sure to setup the .env file according to the .env.example file. You will need docker installed to run.

To run in ```dev``` mode (Vite and node watch for changes and the database can be accessed at port 5432)
```bash
docker compose up --build
```

To run in ```prod``` mode (Code is compiled by TSC, and nginx handles the client side pages)
```bash
docker compose -f docker-compose.prod.yml up --build
```

## License (MIT)

Copyright © 2026 AJ Bushman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.