const { SlashCommandBuilder } = require("discord.js");
const { player } = require("../../player");

const cmdStop = new SlashCommandBuilder()
.setName("stop")
.setDescription("Detiene una reproduccion");

const stop = async (interaction) => {
  const queue = player.nodes.get(interaction.guild.id);
  
  if (!queue || !queue.node.isPlaying()) {
    return await interaction.reply({
      content: "No hay música reproduciéndose!",
      ephemeral: true,
    });
  }

  await interaction.deferReply({ ephemeral: true });

  queue.node.stop();

  await interaction.editReply({ content: "Reproducción detenida!" });
};

module.exports = {cmdStop, stop};