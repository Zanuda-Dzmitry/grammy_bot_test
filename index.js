require("dotenv").config(); // Загружаем переменные окружения
const { Bot } = require("grammy"); // Импортируем класс Bot
const express = require("express");

const bot = new Bot(process.env.BOT_API_KEY); // Создаем бота с токеном
const app = express();

// Обработка GET-запросов на корневой путь
app.get("/", (req, res) => {
  res.send("Бот работает!");
});

// Обрабатываем команду "/start"
bot.command("start", async (ctx) => {
  await ctx.reply("Привет я Бот!"); // Отправляем сообщение в чат
});

bot.command("info", async (ctx) => {
  await ctx.reply("Нужна информация?"); // Отправляем сообщение в чат
});

// Включение вебхуков
app.use(express.json());
app.post("/webhook", (req, res) => {
  bot.handleUpdate(req.body, res);
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
