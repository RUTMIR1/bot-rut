const { SlashCommandBuilder } = require("discord.js");
const { player } = require("../../player");

const cmdStop = new SlashCommandBuilder()
.setName("stop")
.setDescription("Detiene una reproduccion");

const stop = async (interaction)=>{
    const queue = player.nodes.get(interaction.guild.id);
    console.log("se hace algo: ", queue)
    if(!queue || !queue.node.isPlaying()) return await interaction.reply('No hay musica reproduciendose!');
    queue.node.stop();
    interaction.reply('Reproduccion Detenida!');
}

module.exports = {cmdStop, stop};