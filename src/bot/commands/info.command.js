export async function infoCommand(ctx) {
  const text = `Помощь рядом. Пиши мне в лс @sklyarix_alex`;
  await ctx.replyWithHTML(text);
}
