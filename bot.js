const kimlik = 'ODI2ODIyODMxOTcwMTg5MzEy.YGSExA.eDi-v2QCnp8aq1poFXM8bSj9IVQ';
const Sahip_ID = '783333981483171840'
const prefix = ''
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Hayırlı Olsun ${client.user.tag} Aktifleştirildi`);
});

client.on('message', mesaj => {
  if (mesaj.content === prefix + 'sa') {
    mesaj.channel.send('as');
  }
});

client.login(kimlik);