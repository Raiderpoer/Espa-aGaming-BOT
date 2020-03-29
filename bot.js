const Discord = require("discord.js");
const client = new Discord.Client();
client.user.setActivity('Test', { type: 'PLAYING'});
client.login(process.env.BOT_TOKEN);


client.on('ready', () => console.log('Iniciado!'));

const prefix = '!';

client.on('message', message => {

    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLocaleLowerCase();

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    try {

        let commandFile = require(`./comandos/${cmd}.js`);
        commandFile.run(client, message, args);

    } catch (e) {
        console.log(e.stack);
    }

})