const Discord = require('discord.js');

module.exports = {
    name: 'news',
    description: 'Lese die Update News vom Bot aus.',
    usage: '#news',
    execute: async(client, message, args, prefix, Discord) =>{
        if (message) {
			
            message.reply(`➽ Aktuell gibt es keine Wichtigen Updates, ausser dass man am design des Bots arbeitet.`).catch(console.error)
            
        }
    }
}