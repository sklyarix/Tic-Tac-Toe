import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { initBot } from './src/bot/index.js';
import index from "./src/routes/index.js";


const app = express();
let bot;
let httpServer;

const init = async () => {
  app.use(cors());
  app.use(express.json());
  app.use("/api", index);

  bot = initBot();
  
  httpServer = app.listen(env.PORT, () => {
    console.log(`Сервер запущен на :${env.PORT}`);
  });
};


init()
  .then(async () => {})
  .catch(async (e) => {
    console.error(e);
  });
