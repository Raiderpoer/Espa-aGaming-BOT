// Encuestas para el servidor de EspañaGaming
const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Este comando requiere el rango de Fundador');

    if (!args[0]) return message.channel.send('El uso de este comando es !encuesta <Pregunta>');

    const embed = new Discord.MessageEmbed()
        .setColor(0xFF0000)
        .setFooter('Reacciona para votar.')
        .setDescription(args.join(' '))
        .setTitle(`Encuesta creada por ${message.author.username}`);

    let msg = await message.channel.send(embed);
    await msg.react('✅');
    await msg.react('❌');

    message.delete({timeout: 1000});
}