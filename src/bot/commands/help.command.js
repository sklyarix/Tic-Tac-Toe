import { Markup } from "telegraf";
import { env } from "../../../config/env.js";

export async function helpCommand(ctx) {
  const text = `Если тебе нужна помощь, то пиши мне в лс @sklyarix_alex`;
  await ctx.replyWithHTML(text);
}
