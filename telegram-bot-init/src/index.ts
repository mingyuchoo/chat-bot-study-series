import * as dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
dotenv.config();

const token = process.env.API_TOKEN || '';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match ? match[1] : "I don't know what you said.";
  void bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  void bot.sendMessage(chatId, msg.text || "I don't know what you said.");
});
