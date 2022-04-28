const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Lese den aktuellen Ping vom Bot aus.',
    usage: '#ping',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        if (message) {

            //PING
            const msg = await message.channel.send(`🏓 Pinging...`).catch(console.error)
            const embed = new Discord.MessageEmbed()
                .setTitle('Pong!')
                .setDescription(`WebSocket ping ist ${Math.round(client.ws.ping)}MS\nMessage edit ping ist ${Math.floor(msg.createdAt - message.createdAt)}MS!`)
            try {
                await message.channel.send({ embeds: [embed] })
            } catch (err) { console.log(err) }
            try {
                msg.delete()
            } catch (err) { console.log(err) }

        };
    }
}