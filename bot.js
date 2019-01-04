const Discord = require("discord.js");
const  client = new Discord.Client();

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
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("Viva España!")) {
    message.channel.send("Viva!!");
  }
});
bot.on('guildMemberAdd', member => {
    member.guild.channels.get('483436803647340545').send("Bienvenido"); 
});
client.login(process.env.BOT_TOKEN);