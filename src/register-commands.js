import { REST, Routes, ApplicationCommandOptionType } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const commands = [
  {
    name: "embed",
    description: "Send an embed message",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

(async () => {
  try {
    console.log("Registering commands...");
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      {
        body: commands,
      }
    );
    console.log("Successfully registered commands!");
  } catch (error) {
    console.error("Error when registering commands:", error);
  }
})();
