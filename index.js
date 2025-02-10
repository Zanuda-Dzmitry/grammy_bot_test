require("dotenv").config();
const {
  Bot,
  GrammyError,
  HttpError,
  Keyboard,
  InlineKeyboard,
} = require("grammy");
// const webInfo = 'https://zanuda-dzmitry.github.io/telegram-mini-app/'

const bot = new Bot(process.env.BOT_API_KEY);

bot.api.setMyCommands([
  { command: "start", description: "Запуск бота" },
  { command: "info", description: "info" },
]);

bot.command("start", async (ctx) => {
  await ctx.reply("Hello, i am Dzmitry!");
});

bot.command("info", async (ctx) => {
  console.log(ctx.message);
});

bot.hears("id", async (ctx) => {
  await ctx.reply(`Вот ваш id ${ctx.from.id}`);
});

bot.command("inline_keyboard", async (ctx) => {
  const keyboard = new InlineKeyboard()
    .text("one", "one")
    .text("twe", "twe")
    .text("three", "three");

  await ctx.reply("Выберите пункт меню", { reply_markup: keyboard });
});

bot.on("callback_query:data", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply(`Вы нажали кнопку: ${ctx.callbackQuery.data}`);
});

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error: ${ctx.update.update_id}:`);
  const e = err.error;

  if (e instanceof GrammyError) {
    console.error(`GrammyError: ${e.description}`);
  } else if (e instanceof HttpError) {
    console.error(`HttpError: ${e}`);
  } else {
    console.error(`Unknown: ${e}`);
  }
});

bot.start();
