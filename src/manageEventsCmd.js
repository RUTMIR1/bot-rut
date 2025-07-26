const { greet } = require("./commands/greet");
const { play } = require("./commands/music/play");
const { stop } = require("./commands/music/stop");

const manageEventsCmd = async (interaction)=>{
    if(!interaction.isChatInputCommand()) return;
    console.log(interaction.commandName);
    if(interaction.commandName === "saludar"){
        await greet(interaction);
    }
    if(interaction.commandName === "play"){
        await play(interaction);
    }
    if(interaction.commandName === "stop"){
        await stop(interaction);
    }
} 

module.exports = {manageEventsCmd};