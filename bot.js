const kimlik = 'ODI2ODIyODMxOTcwMTg5MzEy.YGSExA.eDi-v2QCnp8aq1poFXM8bSj9IVQ';
const Sahip_ID = '783333981483171840'
const prefix = ''
const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () => {
  console.log(`Bir Bot Çalışıyor = ${Client.user.tag}`);
  Client.user.setStatus('invisible');
});

Client.on('message', mesaj => {
    if (mesaj.content.ToLowerCase === prefix + 'sa') {
      mesaj.channel.send('as');
    }
  });
  
Client.login(kimlik);
