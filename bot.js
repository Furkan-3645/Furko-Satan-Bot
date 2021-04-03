const kimlik = 'ODI2ODIyODMxOTcwMTg5MzEy.YGSExA.eDi-v2QCnp8aq1poFXM8bSj9IVQ';
const Sahip_ID = '783333981483171840'
const prefix = ''
const Discord = require('discord.js');
const Bot = new Discord.Client();

Bot.on('ready', () => {
  console.log(`Bir Bot Çalışıyor = ${Bot.user.tag}`);
  Bot.user.setActivity('Buraya botun durumunda yazmasını istediğin yazıyı yaz', { type: 'Buraya botun ne yapıyor olarak görünecek yazıyı yaz Örneğin "PLAYING"' })
  .then(presence => console.log(`${Bot.user.tag} Botunun Durumu ${presence.activities[0].name}`))
  .catch(console.error);
});

Bot.on('message', mesaj => {
  if (mesaj.content === prefix + 'sa') {
    mesaj.channel.send('ooo hoşgeldi  nn');
  }
});

Bot.login(kimlik);