require("dotenv").config();
const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_API_KEY);

// Установка вебхука
const webhookUrl = `https://${process.env.VERCEL_URL}/api/webhook`;
bot.api
  .setWebhook(webhookUrl)
  .then(() => {
    console.log("Webhook set!");
  })
  .catch((err) => {
    console.error("Error setting webhook:", err);
  });
