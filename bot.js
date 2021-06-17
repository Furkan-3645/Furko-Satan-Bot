const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const Jimp = require("jimp");
const db = require("quick.db");
var prefix = process.env.prefix;

client.on("ready", () => {
  console.log(`Bir Bot Çalışmaya Başladı = ${client.user.username}`);
});

const log = console.log



require("./.data/util/eventLoader")(client);

client.login(process.env.token);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Komutlar/Genel/", (err, files) => {
  if (err) console.error(err);
  log(`Yüklenecek Genel Komut Sayısı = ${files.length}`);
  files.forEach(f => {
    let props = require(`./Komutlar/Genel/${f}`);
    log(`Yüklenen Genel komut = ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Komutlar/Müzik/", (err, files) => {
  if (err) console.error(err);
  log(`\nYüklenecek Müzik Komutu Sayısı = ${files.length}`);
  files.forEach(f => {
    let props = require(`./Komutlar/Müzik/${f}`);
    log(`Yüklenen Müzik komutu = ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Komutlar/Moderasyon/", (err, files) => {
  if (err) console.error(err);
  log(`\nYüklenecek Moderasyon Komutu Sayısı = ${files.length}`);
  files.forEach(f => {
    let props = require(`./Komutlar/Moderasyon/${f}`);
    log(`Yüklenen Moderason komutu = ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./Komutlar/${command}`)];
      let cmd = require(`./Komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./Komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.login(process.env.token);
