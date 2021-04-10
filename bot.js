const kimlik = 'ODI2ODIyODMxOTcwMTg5MzEy.YGSExA.eDi-v2QCnp8aq1poFXM8bSj9IVQ';
const Sahip_ID = '783333981483171840'
const prefix = ''
const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () => {
  console.log(`Bir Bot Çalışıyor = ${Client.user.username}`);
  Client.user.setStatus('invisable');
});

Client.on('message', mesaj => {
    if (mesaj.content.toLowerCase() === prefix + '@!   !Demirel45.exe#1343 sa') {
      mesaj.channel.send('@!   !Demirel45.exe#1343 as');
    }
  });

Client.on('message', mesaj => {
    if (mesaj.content.toLowerCase() === prefix + '@!   !Demirel45.exe#1343 as') {
      mesaj.channel.send('@!   !Demirel45.exe#1343 sa');
    }
  });
  
Client.login(kimlik);
