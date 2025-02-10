require("dotenv").config();
const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_API_KEY);

// Обработчик команды /start
bot.command("start", async (ctx) => {
  await ctx.reply("Hello, I am Dzmitry!!!");
});

// Обработчик входящих обновлений
module.exports.default = (req, res) => {
  if (req.method === "POST") {
    return bot
      .handleUpdate(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error("Error handling update:", err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(405); // Метод не разрешен
  }
};
