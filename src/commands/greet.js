const { SlashCommandBuilder } = require("discord.js");

const cmdGreet = new SlashCommandBuilder().setName("saludar").
setDescription("El bot te saludara!").toJSON();

const greet = async(interaction)=>{
    await interaction.reply(`Saludos ${interaction.user.username}`);
}

module.exports = {greet, cmdGreet};