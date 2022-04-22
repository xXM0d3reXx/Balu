// INPUT
const guildSchema = require('../../models/msg-guild');
const msgtop = require('../../models/msg-top');
const msgSchema = require('../../models/msg-shema');
const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: 'test',
    description: 'test command',
    usage: "test command",
    execute: async (client, message, args, prefix, Discord) => {
        try {
            guildSchema.find({}, async (err, data) => {
                if (err) return console.error(err);

                const leader = await msgtop.find({
                    lb: "all"
                }).sort([
                    ['countId', 'descending']
                ]).limit(1)


                if (leader.length === 1) {
                    const sorta = leader.sort((a, b) => b.Counts - a.Counts);
                    const mappings = await sorta.map((vv) => `Rekord liegt bei ${vv?.countId} <a:LX_chat:926269479875387442>`)

                    if (data.length > 0) {
                        const sort = data.sort((a, b) => b.Counts - a.Counts);
                        const mapping = await sort.map((v) => `<a:LX_announcement:912787060522381343> ➽║ Heute wurden insgesamt ${v.countId + 1} Nachrichten versendet!`);
                        msgSchema.find({
                            lb: "all"
                        }).sort([
                            ['countId', 'descending']
                        ]).exec((err, res) => {
                            if (err) console.error(err)
                            let end = 12;
                            let endf = 1;
                            let ends = 2;
                            let endt = 3;
                            let start = 3;
                            let first = 0;
                            let second = 1;
                            let third = 2;
                            let embed = new MessageEmbed()
                            try {
                                embed.setDescription(`${mapping} ` + ` ${mappings}`)
                                embed.setColor("RANDOM")

                                embed.setTitle("Heutige Nachrichten Stats");
                                embed.setThumbnail("https://cdn.discordapp.com/attachments/913146795532640326/925545664438480937/lexenia-pb.gif");
                            } catch (err) { console.error(err) }
                            try {
                                for (f = first; f < endf; f++) {
                                    embed.addFields({
                                        name: `\`🥇\` ${res[f].name}`,
                                        value: `${res[f].countId + 1} Nachrichten`,
                                        inline: true
                                    })
                                }
                            } catch (err) { console.error(err) };
                            try {
                                for (s = second; s < ends; s++) {
                                    embed.addFields({
                                        name: `\`🥈\` ${res[s].name}`,
                                        value: `${res[s].countId + 1} Nachrichten`,
                                        inline: true
                                    })
                                }
                            } catch (err) { console.error(err) };
                            try {
                                for (t = third; t < endt; t++) {
                                    embed.addFields({
                                        name: `\`🥉\` ${res[t].name}`,
                                        value: `${res[t].countId + 1} Nachrichten`,
                                        inline: true
                                    })
                                }
                            } catch (err) { console.error(err) };
                            try {
                                for (i = start; i < end; i++) {
                                    embed.addFields([{
                                        name: `\`${i + 1}.\` ${res[i].name}`,
                                        value: `${res[i].countId + 1} Nachrichten`,
                                        inline: true
                                    }])
                                }
                            } catch (err) { console.error(err) };
                            try {
                                return message.channel.send({
                                    embeds: [embed]
                                })
                            } catch (err) { console.error(err) }
                        })
                    } else {
                        const mapping = await sorta.map((vv) => `<a:LX_announcement:912787060522381343> ➽║ Heute wurde keine Nachricht versendet! Rekord liegt bei ${vv?.countId} <a:LX_chat:926269479875387442>`);
                        let embedss = new MessageEmbed()
                            .setDescription(`${mapping}`)
                            .setColor("RANDOM")
                        try {
                            return message.channel.send({
                                embeds: [embedss]
                            })
                        } catch (err) { console.error(err) }
                    };
                }
            });
        } catch (err) { console.log(err) }
    }
}
