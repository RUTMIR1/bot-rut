const { REST, Routes } = require("discord.js");
const { cmdGreet } = require("./commands/greet");
const dotenv = require("dotenv");
const { cmdPlay } = require("./commands/music/play");
const { cmdStop } = require("./commands/music/stop");

dotenv.config();

const commands = [
    cmdGreet,
    cmdPlay,
    cmdStop
];

const rest = new REST({version: '10'}).setToken(process.env.BOT_TOKEN);

const setCommands = async ()=>{
    try{
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),{body:commands});
        console.log("comandos registrados!");
    }catch(err){
        console.log(err);
    }
}

module.exports = {setCommands};