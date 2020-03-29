const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', () => console.log('Iniciado!'));

const prefix = '!';

client.on('message', message => {

    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLocaleLowerCase();

})