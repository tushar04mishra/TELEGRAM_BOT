// how to get the secret token for creating a bot?
// 1. Open Telegram and search for BotFather
// 2. Type /start to read the instructions
// 3. To create a new bot, type /newbot and follow the steps
// 4. BotFather will ask for a bot name and username ending with 'bot'
// Example: js_cpp_coding_bot
// You will get a token like the one below

require("dotenv").config(); // Load .env variables

const { Telegraf } = require("telegraf");
const axios = require("axios");

let binarysearch = "hello";

// Use process.env.BOT_KEY instead of BOT_KEY
const bot = new Telegraf(process.env.BOT_KEY);

bot.start((ctx) => ctx.reply("welcome to the bot created by tushar"));

bot.command("binarysearchjs", (ctx) => ctx.reply(binarysearch));

bot.command("whomadethis", (ctx) => ctx.reply("tushar"));

bot.command("myntra", async function (ctx) {
  const response = await axios.get(
    "https://raw.githubusercontent.com/tushar04mishra/Myntra-Clone-Non-Functional/refs/heads/master/index.html"
  );
  const snippet = response.data.substring(0, 500);
  return ctx.reply("Here is a preview of the Myntra clone page:\n" + snippet);
});

bot.on("sticker", (ctx) => ctx.reply("❤️"));

bot.launch();
