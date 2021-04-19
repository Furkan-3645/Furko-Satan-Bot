////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Discord = require('discord.js')                                                                                             //
const Bot = new Discord.Client()                                                                                                  //
const { readdirSync, readSync } = require('fs');                                                                                  //
const { type } = require('os');                                                                                                   //
const { join } = require('path');                                                                                                 //
const ytdl = require('ytdl-core')                                                                                                 //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const kimlik = "ODI5NDA3MTM3ODgwMzQyNTY5.YG3rlw.iuU7uzsR5u__vfaIAF5xVZfAYQQ";                                                     //
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
Bot.on('message', async Mesaj => {                                                                                                //
    if (Mesaj.content.startsWith('çal')) {                                                                                        //
      const args = Mesaj.content.split(' ').slice(1)                                                                              //
      const Bot_Mesajı = args.join(" ")                                                                                           //
      if (!Bot_Mesajı) return Mesaj.channel.send("URL'yi Koymayı Unutunuz (Sanki Olmayan Aklını Okuyabiliyoruz)")                 //
      if (Mesaj.member.voice.channel) {                                                                                           //
        const bağlantı = await Mesaj.member.voice.channel.join();                                                                 //
        const ytdl = require('ytdl-core');                                                                                        //
        bağlantı.play(ytdl(`${Bot_Mesajı}`, { filter: 'audioonly' }))                                                             //
      } else {                                                                                                                    //
        Mesaj.channel.send("Bu Komut Sadece Sesli Kanalarda Kulanılabilir (İstersen Şarkıyıda Evine Gelip Söyiyeyim)");           //
      }                                                                                                                           //
    }                                                                                                                             //
  })                                                                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Bot.login(kimlik)
