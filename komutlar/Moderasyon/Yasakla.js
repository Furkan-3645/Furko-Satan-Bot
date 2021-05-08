const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.delete()
  if (!message.guild) return;
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Sen Çok Zeki Olabilirsin Ama Ben Senden Daha Zekiyim')
    const args1 = message.content.split(' ').slice(2)
    const neden = args1.join(" ")
    const { MessageEmbed } = require('discord.js')
    const kişi = message.mentions.users.first();
    if (kişi) {
      const member = message.guild.member(kişi);
      if (member) {
        member
          .ban()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === '📄᲼log᲼kanalı')
          const embed = new MessageEmbed()
          .setTitle('Log Olayı Var Gençler')
          .setDescription('Log Olayı = `Yasaklama`')
          .addField('Yasaklanan Kişi', member)
          .addField('Yasaklanma Nedeni', neden);
          log.send(embed);
          })
          .catch(err => {
            message.reply('Yasaklıyamıyom Yar**m');
            console.error(err);
          });
      } else {
        const log = message.guild.channels.cache.find(channel => channel.name === '📄᲼log᲼kanalı')
        log.send("Bizi mi Yiyon Burda Böyle Birisi Yok");
      }
    } else {
      const log = message.guild.channels.cache.find(channel => channel.name === '📄᲼log᲼kanalı')
      log.send("Bizi mi Yiyon Burda Böyle Birisi Yok");
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yasakla',
  description: 'nobles api',
  usage: 'örnek'
};