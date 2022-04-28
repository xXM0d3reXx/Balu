const {
    MessageEmbed
} = require("discord.js");
const Discord = require('discord.js');
const afkshema = require('../../models/afk-schema');

module.exports = {
    name: 'gn8',
    description: 'Sage jedem, dass du nun schlafen geht.',
    usage: '#gn8 || #gn8 <text>',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        if (message) {

            let text = message.content.split(" ").slice(1).join(" ")

            //GN8 WITH TEXT
            if (text) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`Von ${message.author.tag} an alle`, message.author.displayAvatarURL({ dynamic: true, size: 512 }))
                    .setColor('BLUE')
                    .setThumbnail(`https://cdn.discordapp.com/attachments/913146795532640326/925545664438480937/lexenia-pb.gif`)
                    .setDescription(`<@${message.author.id}> geht jetzt **schlafen** und Wünscht allen eine **Gute Nacht**!\n \`Extra Kommentar:\` ${text}`)


                try {
                    message.reply({
                        embeds: [embed]
                    })
                } catch (err) { console.log(err) }

                data = new afkshema({
                    name: message.author.username,
                    userId: message.author.id,
                    guildId: message.guild.id,
                    reason: text,
                    timestamp: Date.now()
                });

                data.save();
            };

            //GN8 WITHOUT TEXT
            if (!text) {
                const reason = "Schlafen."
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`Von ${message.author.tag} an alle`, message.author.displayAvatarURL({ dynamic: true, size: 512 }))
                    .setColor('BLUE')
                    .setThumbnail(`https://cdn.discordapp.com/attachments/913146795532640326/925545664438480937/lexenia-pb.gif`)
                    .setDescription(`<@${message.author.id}> geht jetzt **schlafen** und Wünscht allen eine **Gute Nacht**!\n \`Extra Kommentar:\` None`)


                try {
                    message.reply({
                        embeds: [embed]
                    })
                } catch (err) { console.log(err) }

                data = new afkshema({
                    name: message.author.username,
                    userId: message.author.id,
                    guildId: message.guild.id,
                    reason: reason,
                    timestamp: Date.now()
                });

                data.save();
            };
            return
        };
    }
}