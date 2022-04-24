import 'dotenv';
import express from 'express';
import './src/configs/db.config.js'

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const server = app.listen(PORT, () => {
  console.log(`🚀 🚀 server is runing at http://localhost:${PORT} 🔥`);
});

server.on('error', (err) => {
  console.log(err);
});
