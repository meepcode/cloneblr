import add from "@cloneblr/shared";
import express from "express";
const app = express();

app.get('/api/', (req, res) => {
    console.log('received request')
  res.json({ message: 'Hello, World!'})
})

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Listening on port ${PORT}`)
});