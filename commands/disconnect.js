const { MessageEmbed } = require("discord.js");
const { Client, Collection } = require("discord.js");



module.exports = {
    name: "disconnect",
    aliases: ["leave"],
    description: "disconnects from channel",
    async execute(message, args) {
      const { channel } = message.member.voice;

      const serverQueue = message.client.queue.get(message.guild.id);
      if (!channel) return message.reply("You need to join the voice channel before you can disconnect me!").catch(console.error);
      await channel.leave();
      return message.reply(`Codsworth Has Left Your Channel.`);
    }
};