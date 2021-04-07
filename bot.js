const kimlik = 'ODI2ODIyODMxOTcwMTg5MzEy.YGSExA.eDi-v2QCnp8aq1poFXM8bSj9IVQ';
const Sahip_ID = '783333981483171840'
const prefix = ''
const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () => {
  console.log(`Bir Bot Çalışıyor = ${Bot.user.tag}`);
  Bot.user.setActivity('Furko Gazoz Satma Oyunu', { type: 'PLAYING' })
  .then(presence => console.log(`${Bot.user.tag} Botunun Durumu ${presence.activities[0].name}`))
  .catch(console.error);
});

Client.on('message', mesaj => {
  if (mesaj.content === prefix + 'sa') {
    mesaj.channel.send('as');
  }
});

Client.on('message', mesaj => {
  if (mesaj.content === prefix + 'şoıhj') {
    mesaj.channel.send('sa');
  }
});

Client.login(kimlik);
