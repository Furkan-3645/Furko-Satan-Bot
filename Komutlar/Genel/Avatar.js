const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.delete()
  const kişi = message.mentions.users.first()
  if (kişi) {
    message.channel.send(kişi.displayAvatarURL({ dynamic: true, size: 4096 }))
  } else {
    message.channel.send(message.author.displayAvatarURL({ dynamic: true, size: 4096 }))
  }
}
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'nobles api',
  usage: 'örnek'
};