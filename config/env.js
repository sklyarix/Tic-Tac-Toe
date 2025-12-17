import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(process.cwd(), ".env") });

export const env = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  TELEGRAM_BOT_TOKEN: process.env.BOT_TOKEN,
};

if (!env.TELEGRAM_BOT_TOKEN) {
  // Явное сообщение в логе, чтобы сразу видеть, что воркер/процесс не видит ключ
  console.warn("[env] OPENAI_API_KEY is empty (check .env and process.cwd())");
}
