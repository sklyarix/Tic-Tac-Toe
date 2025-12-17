export async function startCommand(ctx) {
  const helloText = `Привет, этот бот — создан в качестве тестового задания.\nОт @sklyarix_alex`;

  await ctx.replyWithHTML(helloText);
}
