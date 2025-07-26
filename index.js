const dotenv = require("dotenv");
const { Events } = require("discord.js");
const { setCommands } = require("./src/setCommands.js");
const { manageEventsCmd } = require("./src/manageEventsCmd.js");
const { client } = require("./src/client.js");
const { setExtractor } = require("./src/player.js");

dotenv.config();

client.once("ready", async ()=>{
    await setExtractor();
    await setCommands();
    console.log("Conectado al servidor!");
});

client.on(Events.InteractionCreate, manageEventsCmd);

client.login(process.env.BOT_TOKEN);