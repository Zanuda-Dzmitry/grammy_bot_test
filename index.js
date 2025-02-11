require("dotenv").config(); // Загружаем переменные окружения
const { Bot } = require("grammy"); // Импортируем класс Bot

const bot = new Bot(process.env.BOT_API_KEY); // Создаем бота с токеном

// Обрабатываем команду "/start"
bot.command("start", async (ctx) => {
  await ctx.reply("Hello, I am Dzmitry!!!"); // Отправляем сообщение в чат
});

bot.start();
