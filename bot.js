const Discord = require("discord.js");
const  client = new Discord.Client();
const prefix = '!';
client.on("ready", () => {
   console.log("Hola amigo!");

   client.user.setPresence( {
       status: "online",
       game: {
           name: "En Desarrollo!! Especial de ESPAÑAGAMING",
           type: "PLAYING"
       }
   });
});

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
});

client.on('guildMemberAdd', member => {
	let memberTag = member.user.tag;
    member.guild.channels.get('480936541968138250').send("Hey <@" + member.id + ">, bienvenid@ a **EspañaGaming** <:tada:530052691020218368><:hugging:530052691020218368> !"); 
});
client.login(process.env.BOT_TOKEN);