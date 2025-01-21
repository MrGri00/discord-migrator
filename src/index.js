import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", function (message) {
  console.log("New message received: ", message);
  if (message.author.bot) return;
  if (!message.content.startsWith(process.env.COMMAND_PREFIX)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
});

client.login(process.env.BOT_TOKEN);
console.log(
  `Discord Migrator started running at ${Date.now().toLocaleString()}!`
); // TODO: Fix date format
