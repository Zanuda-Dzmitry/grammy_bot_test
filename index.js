require("dotenv").config(); // Загружаем переменные окружения
const { Bot } = require("grammy"); // Импортируем класс Bot
const express = require("express"); // Импортируем express
const bodyParser = require("body-parser"); // Импортируем body-parser

const bot = new Bot(process.env.BOT_API_KEY); // Создаем бота с токеном

const app = express(); // Создаем приложение Express
app.use(bodyParser.json()); // Включаем парсинг JSON

// Обрабатываем входящие обновления от Telegram
app.post("/webhook", (req, res) => {
  bot.handleUpdate(req.body); // Передаем обновление боту
  res.sendStatus(200); // Отправляем успешный ответ
});

// Устанавливаем вебхук
const setWebhook = async () => {
  const webhookUrl = "https://your-project.vercel.app/webhook"; // Укажите ваш URL
  await bot.api.setWebhook(webhookUrl);
};

// Запускаем вебхук и сервер
setWebhook().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running..."); // Лог сообщения, что сервер запущен
  });
});
