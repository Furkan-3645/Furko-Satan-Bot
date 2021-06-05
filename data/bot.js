const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = process.env.prefix
const { readdirSync } = require('fs');
const { join } = require('path');

client.commands= new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "Komutlar")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command);
}

client.on("error", console.error);

client.on('ready', () => {
    client.user.setStatus('INVISIBLE')
    console.log('Botumuz Aktif')
});

client.on("message", async message => {

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.login('process.env.token')
