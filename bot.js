const kimlik = 'ODI2ODIyODMxOTcwMTg5MzEy.YGSExA.eDi-v2QCnp8aq1poFXM8bSj9IVQ';
const Sahip_ID = '783333981483171840'
const prefix = ''
const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () => {
  console.log(`Bir Bot Çalışıyor = ${Bot.user.tag}`);
  Client.user.setStatus('invisible')
});

Client.on('message', mesaj => {
  if (mesaj.content === prefix + 'sa') {
    mesaj.channel.send('as');
  }
});

Client.on('message', mesaj => {
  if (mesaj.content === prefix + 'as') {
    mesaj.channel.send('sa');
  }
});

Client.login();
