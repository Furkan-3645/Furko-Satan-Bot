const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  client.user.setStatus('invisible'); //dnd, idle, online, offline
  
}