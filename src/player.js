const { Player } = require("discord-player");
const {client} = require("./client.js");
const {YoutubeiExtractor} = require("discord-player-youtubei");

const player = new Player(client);

const setExtractor = async () => {
  await player.extractors.register(YoutubeiExtractor);
};

module.exports = {setExtractor, player};