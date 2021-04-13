const { MessageEmbed } = require("discord.js");
const { Client, Collection } = require("discord.js");


module.exports = {
    name: "join",
    description: "Joins channel",
    async execute(message, args) {
      const { channel } = message.member.voice;

      const serverQueue = message.client.queue.get(message.guild.id);
      if (!channel) return message.reply("You need to join a voice channel first!").catch(console.error);
      await channel.join();
      return message.reply(`Codsworth Has Joined Your Channel`)
    }
};