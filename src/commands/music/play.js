const { SlashCommandBuilder } = require("discord.js");
const { player } = require("../../player.js");
const dotenv = require("dotenv")
dotenv.config();

const cmdPlay = new SlashCommandBuilder()
.setName("play")
.setDescription("reproduce una musica por el nombre")
.addStringOption(option=>
    option.setName("song")
    .setDescription("Nombre de la cancion")
    .setRequired(true))
.toJSON();

const play = async(interaction)=>{
    const targetChannel = interaction.guild.channels.cache.get(process.env.ALLOWED_CHANNEL_ID);
    if(!targetChannel) return await interaction.reply(
        {content:"Canal no encontrado para respuesta!",ephemeral:true});
    const song = interaction.options.getString("song");
    if(!song) return await interaction.reply(
        {content:"Debes ingresar el nombre de una música!",ephemeral:true});
    const channel = interaction.member.voice.channel;
    if(!channel) return await interaction.reply(
        {content:"Debes estar en un canal para usar esta funcion!", ephemeral:true});
    try{
        await interaction.reply({content:"Buscando Musica...", ephemeral:true});
        const searchResult = await player.search(song,{
            requestedBy: interaction.user,
        });
        if (!searchResult.hasTracks()) return await interaction.editReply(
            {content:"No se encontro resultados..", ephemeral:true});
        await player.play(channel, searchResult.tracks[0],{
            requestedBy: interaction.user
        });
        await interaction.editReply({content:"Reproduciendo Musica!", ephemeral: true});
        return targetChannel.send(`MUSICA: ${searchResult.tracks[0].url}`);
    }catch(err){
        console.log(err);
        return interaction.editReply("ocurrio un error al reproducir la musica");
    }
};

module.exports = {cmdPlay, play};