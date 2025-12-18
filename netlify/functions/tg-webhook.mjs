import { initBot } from '../../src/bot/index.js'


let bot;

export const handler = async (event) => {
  try {
    if (!bot) bot = initBot();

    const update = JSON.parse(event.body || "{}");
    await bot.handleUpdate(update);

    return { statusCode: 200, body: "ok" };
  } catch (e) {
    
    console.error(e);
    return { statusCode: 200, body: "ok" };
  }
};
