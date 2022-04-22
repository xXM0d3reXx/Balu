const guildSchema = require('../../models/msg-guild');
const msgSchema = require('../../models/msg-shema');
const msgtop = require('../../models/msg-top');
const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: 'msg',
    description: 'Lese den aktuellen stand der Guild Nachrichten / vom User',
    usage: '#msg || #msg @user || #msg id',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        if (message) {

            let toPing = (message.mentions.members.first() || message.guild.members.cache.get(args[0]));

            //READING GUILD DATA FROM DATABASE
            if (!toPing) {
                guildSchema.find({
                    guildId: message.guild.id
                }, async (err, data) => {
                    if (err) throw err;
                    const leader = await msgtop.find({}).sort([
                        ['countId', 'descending']
                    ]).limit(1)

                    if (leader.length === 1) {
                        const sorta = leader.sort((a, b) => b.Counts - a.Counts);
                        const mappings = await sorta.map((vv) => `Rekord liegt bei ${vv?.countId} <a:LX_chat:926269479875387442>`)

                        if (data.length > 0) {
                            const sort = data.sort((a, b) => b.Counts - a.Counts);
                            const mapping = await sort.map((v) => `<a:LX_announcement:912787060522381343> ➽║ Heute wurden schon insgesamt ${v.countId + 1} Nachrichten versendet!`);
                            let embed = new MessageEmbed()
                                .setDescription(`${mapping} ` + ` ${mappings}`)
                                .setColor("RANDOM")

                            return message.channel.send({
                                embeds: [embed]
                            }).catch(console.error);
                        } else {
                            const mapping = (`<a:LX_announcement:912787060522381343> ➽║ Heute wurde schon insgesamt eine Nachricht versendet! Rekord liegt bei ${vv?.countId} <a:LX_chat:926269479875387442>`);
                            let embedss = new MessageEmbed()
                                .setDescription(`${mapping}`)
                                .setColor("RANDOM")

                            return message.channel.send({
                                embeds: [embedss]
                            }).catch(console.error);
                        };
                    }
                });
            }
            if (toPing) {
                msgSchema.find({
                    userId: toPing.id,
                    guildId: message.guild.id
                }, async (err, data) => {

                    if (err) throw err;
                    if (data.length > 0) {
                        const sort = data.sort((a, b) => b.Counts - a.Counts);
                        const mapping = await sort.map((v) => `<a:LX_announcement:912787060522381343> ➽║ ${toPing} hat heute schon ${v.countId + 1} Nachrichten versendet! <a:LX_muscle:926269471017037824>`).join('\n\n');
                        let embed = new MessageEmbed()
                            .setDescription(`${mapping}`)
                            .setColor("RANDOM")

                        return message.channel.send({
                            embeds: [embed]
                        }).catch(console.error);

                    } else {
                        const mapping = (`<a:LX_announcement:912787060522381343> ➽║ ${toPing} hat heute schon eine Nachricht versendet! <a:LX_muscle:926269471017037824>`);
                        let embedss = new MessageEmbed()
                            .setDescription(`${mapping}`)
                            .setColor("RANDOM")

                        return message.channel.send({
                            embeds: [embedss]
                        }).catch(console.error);
                    };
                });
            }
        }
    }
}