import { Client } from "discord.js";
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.login(variables.env.BOT_TOKEN);
