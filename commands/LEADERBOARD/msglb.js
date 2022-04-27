// INPUT
const guildSchema = require('../../models/msg-guild');
const msgtop = require('../../models/msg-top');
const msgSchema = require('../../models/msg-shema');
const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: 'msglb',
    description: 'Lese die Top 12 aus.',
    usage: '#msglb <Seite>',
    execute: async (client, message, args, prefix, Discord) => {
        try {
            guildSchema.find({}, async (err, data) => {
                if (err) return console.log(err);

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
                            if (err) console.log(err)
                            let embed = new MessageEmbed()
                            try {
                                embed.setDescription(`${mapping} ` + ` ${mappings}`)
                                embed.setColor("RANDOM")

                                embed.setTitle("Heutige Nachrichten Stats");
                                embed.setThumbnail("https://cdn.discordapp.com/attachments/913146795532640326/925545664438480937/lexenia-pb.gif");
                            } catch (err) { console.log(err) }
                            try {
                                embed.addFields(
                                    {
                                        name: `\`🥇\` ${res[0].name}`,
                                        value: `${res[0].countId + 1} Nachrichten`,
                                        inline: true,
                                    },
                                    {
                                        name: `\`🥈\` ${res[1].name}`,
                                        value: `${res[1].countId + 1} Nachrichten`,
                                        inline: true,
                                    },
                                    {
                                        name: `\`🥉\` ${res[2].name}`,
                                        value: `${res[2].countId + 1} Nachrichten`,
                                        inline: true,
                                    }
                                );
                                for (i = 3; i != 12; i++) {
                                    embed.addFields([
                                        {
                                            name: `\`${i + 1}.\` ${res[i].name}`,
                                            value: `${res[i].countId + 1} Nachrichten`,
                                            inline: true,
                                        },
                                    ]);
                                }
                            } catch (err) { console.log(err) };
                            try {
                                return message.channel.send({
                                    embeds: [embed]
                                })
                            } catch (err) { console.log(err) }
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
                        } catch (err) { console.log(err) }
                    };
                }
            });
        } catch (err) { console.log(err) }
    }
}
