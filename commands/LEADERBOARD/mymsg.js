const Discord = require('discord.js');
const msgSchema = require('../../models/msg-shema');
const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: 'mymsg',
    description: 'Lese deinen Aktuellen Nachrichten Stand aus.',
    usage: '#mymsg',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        if (message) {

            //READING USER DATA FROM DATABASE
            msgSchema.find({
                userId: message.author.id,
                guildId: message.guild.id
            }, async (err, data) => {

                if (err) return console.log(err);
                if (data.length > 0) {
                    const sort = data.sort((a, b) => b.Counts - a.Counts);
                    const mapping = await sort.map((v) => `<a:LX_announcement:912787060522381343> ➽║ ${message.author} hat heute schon ${v.countId + 1} Nachrichten versendet! <a:LX_muscle:926269471017037824>`).join('\n\n');
                    let embed = new MessageEmbed()
                        .setDescription(`${mapping}`)
                        .setColor("RANDOM")
                    try {
                        return message.channel.send({
                            embeds: [embed]
                        })
                    } catch (err) { console.log(err) }

                } else {
                    const mapping = (`<a:LX_announcement:912787060522381343> ➽║ ${message.author} hat heute schon eine Nachricht versendet! <a:LX_muscle:926269471017037824>`);
                    let embedss = new MessageEmbed()
                        .setDescription(`${mapping}`)
                        .setColor("RANDOM")
                    try {
                        return message.channel.send({
                            embeds: [embedss]
                        })
                    } catch (err) { console.log(err) }
                };
            });
        };
    }
}