const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.delete()
  const oyun = args[0]
  const Oyuncu_Notu = message.content.split(' ').slice(2)
  const Not = Oyuncu_Notu.join(" ")
  if (message.member.voice.channel) {
    const kanal = message.guild.channels.cache.find(channel => channel.name === '🎮᲼oyuncu᲼arama')
    const Gömülü_Mesaj = new Discord.MessageEmbed()
    .setTitle(`**${message.author.tag}** Adlı Oyuncu Oyun Arkadaşı Arıyor`)
    .setColor("RANDOM")
    .addField('Oyun Arkadaşı Aradığı Oyun', `${oyun}`)
    .addField('Bulunduğu Kanal',`${message.member.voice.channel}`)
    .addField('Oyuncunun Aradığı Oyuncuya Arkadaşına Notu', `${Not}`);
    kanal.send(Gömülü_Mesaj)
  } else {
 message.channel.send('Bu Komutu Kullanabilmek İçin Lütfen Sesli Kanala Geçin')
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ara',
  description: 'nobles api',
  usage: 'örnek'
};