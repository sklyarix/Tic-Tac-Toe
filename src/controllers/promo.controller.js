import { isValid, parse } from "@telegram-apps/init-data-node";
import { env } from "../../config/env.js";
import { getBot } from '../bot/index.js'

// @desc Отправить строку
// @route post /api/promo
// @access Public
export const promo = async (req, res) => {
  try {
    let message;
    const { initData, promo } = req.body;
    if (!initData) {
      return res.status(400).json({ error: "MISSING_INITDATA" });
    }
     message = !promo ? 'Проигрыш' : `Победа! Промокод выдан: ${promo}`;
    
    if (!env.TELEGRAM_BOT_TOKEN) {
      return res.status(400).send({ error: "invalid token" });
    }

    // Валидируем initData с помощью токена бота
    const isInitDataValid = isValid(initData, env.TELEGRAM_BOT_TOKEN);
    // Ошибка, если initData некорректна
    if (!isInitDataValid) {
      return res.status(400).send({ error: "AUTH__INVALID_INITDATA" });
    }
    // Парсим initData и достаем Telegram ID пользователя
    const telegramId = parse(initData).user;
    // Ошибка, tgId
    if (!telegramId) {
      return res.status(400).send({ error: "AUTH__INVALID_INITDATA" });
    }
    const bot = getBot();
    
    await bot.telegram.sendMessage(telegramId, message);
    
  } catch (error) {
    console.log("Ошибка /api/login =", error);
    return res.status(500).json({ error: "internal_error" });
  }
};
