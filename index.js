require("dotenv").config();
const { Bot } = require("grammy");
const express = require("express");
const bodyParser = require("body-parser");

const bot = new Bot(process.env.BOT_API_KEY);

const app = express();

// Подключаем middleware
app.use(bodyParser.json());

// Устанавливаем вебхук
app.post("/webhook", (req, res) => {
  bot.handleUpdate(req.body); // Передача обновления в бот
  res.sendStatus(200); // Подтверждение получения
});

bot.command("start", async (ctx) => {
  await ctx.reply("Hello, I am Dzmitry!!!");
});

// Задайте свой вебхук перед запуском сервера
const setWebhook = async () => {
  const webhookUrl = "https://your-project.vercel.app/webhook"; // ваш URL
  await bot.api.setWebhook(webhookUrl);
};

setWebhook().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
  });
});
