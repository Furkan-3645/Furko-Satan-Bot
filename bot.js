////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Discord = require('discord.js')                                                                                             //
const Bot = new Discord.Client()                                                                                                  //
const { readdirSync, readSync } = require('fs');                                                                                  //
const { type } = require('os');                                                                                                   //
const { join } = require('path');                                                                                                 //
const ytdl = require('ytdl-core')                                                                                                 //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const kimlik = "ODI2ODIyODMxOTcwMTg5MzEy.YGSExA.eDi-v2QCnp8aq1poFXM8bSj9IVQ";                                                     //
const Sahip_ID = "783333981483171840";                                                                                            //
const ek = "";                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Bot.commands= new Discord.Collection();                                                                                           //
const Komutlar_klasörü = readdirSync(join(__dirname, "komutlar")).filter(dosya => dosya.endsWith(".js"));                         //
for (const dosya of Komutlar_klasörü) {                                                                                           //
    const komut = require(join(__dirname, "komutlar", `${dosya}`));                                                               //
    Bot.commands.set(komut.komut, komut);                                                                                         //
}                                                                                                                                 //
Bot.on("message", async Mesaj => {                                                                                                //
    if(Mesaj.content.startsWith(ek)) {                                                                                            //
        const args = Mesaj.content.slice(ek.length).trim().split(/ +/);                                                           //
        const komut = args.shift().toLowerCase();                                                                                 //
        try {                                                                                                                     //
            Bot.commands.get(komut).run(Bot, Mesaj, args, );                                                                      //
        } catch (error){                                                                                                          //
            console.error(error);                                                                                                 //
        }                                                                                                                         //
    }                                                                                                                             //
})                                                                                                                                //
Bot.on("error", console.error);                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Bot.on('ready', () => {                                                                                                           //
    console.log(`Bir Bot Çalışıyor = ${Bot.user.username}`);                                                                      //
    Bot.user.setActivity('Furko Gazoz Satma Oyunu', { type: 'PLAYING' })                                                          //
    .then(presence => console.log(`Botun Durumu = ${presence.activities[0].name} Oynuyor`))                                       //
});                                                                                                                               //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Bot.login(kimlik)
