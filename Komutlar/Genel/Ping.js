const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.delete()
  const { MessageEmbed } = require('discord.js')
  const Gömülü_Mesaj = new MessageEmbed()
  .setTitle('Furko Satan Botun Ping Değerleri')
  .addField('Bot Pingi', client.ws.ping + 'ms')
  .addField('Mesajın Pingi', `${Date.now() - message.createdTimestamp}ms`);
  message.channel.send(Gömülü_Mesaj)
}
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'nobles api',
  usage: 'örnek'
};