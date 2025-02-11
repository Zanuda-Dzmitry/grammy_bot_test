require("dotenv").config();
const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_API_KEY);

// Обработчик команды /start
bot.command("start", async (ctx) => {
  await ctx.reply("Hello, I am Dzmitry!!!");
});

bot.start();
