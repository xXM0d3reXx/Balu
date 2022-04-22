const msgSchema = require('../../models/msg-shema');

module.exports = {
    name: 'msglb',
    description: 'Lese die Top 12 aus.',
    usage: '#msglb <Seite>',
    execute: async (client, message, args, prefix, Discord) => {

        if (message) {

            msgSchema.find({
                lb: "all"
            }).sort([
                ['countId', 'descending']
            ]).exec((err, res) => {
                if (err) console.log(err);

                var page = Math.ceil(res.length / 12);

                let embed = new Discord.MessageEmbed();
                embed.setTitle("Heutiges Nachrichten Leaderboard");
                embed.setThumbnail("https://cdn.discordapp.com/attachments/913146795532640326/925545664438480937/lexenia-pb.gif");

                let pg = parseInt(args[0]);
                if (pg != Math.floor(pg)) pg = 1;
                if (!pg) pg = 1;
                let ppp = 1
                let end = pg * 12;
                let endf = ppp * 1;
                let ends = ppp * 2;
                let endt = ppp * 3;
                let start = (pg * 12) - 12;
                let starts = (pg * 12) - 9;
                let first = (ppp * 12) - 12;
                let second = (ppp * 12) - 11;
                let third = (ppp * 12) - 10;

                if (res.length === 0) {
                    embed.addField("Error", "Keinen Eintrag mehr gefunden.");

                } else if (res.length <= start) {
                    embed.addField("Error", "Keinen Eintrag mehr gefunden.");

                } else if (pg === 1) {
                    if (res.length <= end) {
                        for (f = first; f < endf; f++) {
                            embed.addFields({
                                name: `\`🥇\` ${res[f].name}`,
                                value: `${res[f].countId + 1} Nachrichten`,
                                inline: true
                            })
                        };
                        for (s = second; s < ends; s++) {
                            embed.addFields({
                                name: `\`🥈\` ${res[s].name}`,
                                value: `${res[s].countId + 1} Nachrichten`,
                                inline: true
                            })
                        };
                        for (t = third; t < endt; t++) {
                            embed.addFields({
                                name: `\`🥉\` ${res[t].name}`,
                                value: `${res[t].countId + 1} Nachrichten`,
                                inline: true
                            })
                        };
                        embed.setFooter(`page ${pg} of ${page}`);
                        for (i = starts; i < res.length; i++) {
                            embed.addFields([{
                                name: `\`${i + 1}.\` ${res[i].name}`,
                                value: `${res[i].countId + 1} Nachrichten`,
                                inline: true
                            }])
                        }
                    } else {
                        for (f = first; f < endf; f++) {
                            embed.addFields({
                                name: `\`🥇\` ${res[f].name}`,
                                value: `${res[f].countId + 1} Nachrichten`,
                                inline: true
                            })
                        };
                        for (s = second; s < ends; s++) {
                            embed.addFields({
                                name: `\`🥈\` ${res[s].name}`,
                                value: `${res[s].countId + 1} Nachrichten`,
                                inline: true
                            })
                        };
                        for (t = third; t < endt; t++) {
                            embed.addFields({
                                name: `\`🥉\` ${res[t].name}`,
                                value: `${res[t].countId + 1} Nachrichten`,
                                inline: true
                            })
                        };
                        embed.setFooter(`page ${pg} of ${page}`);
                        for (i = starts; i < end; i++) {
                            embed.addFields([{
                                name: `\`${i + 1}.\` ${res[i].name}`,
                                value: `${res[i].countId + 1} Nachrichten`,
                                inline: true
                            }])
                        };
                    }
                } else {
                    if (res.length <= end) {
                        embed.setFooter(`page ${pg} of ${page}`);
                        for (i = start; i < res.length; i++) {
                            embed.addFields([{
                                name: `\`${i + 1}.\` ${res[i].name}`,
                                value: `${res[i].countId + 1} Nachrichten`,
                                inline: true
                            }])
                        };

                    } else {
                        embed.setFooter(`page ${pg} of ${page}`);
                        for (i = start; i < end; i++) {
                            embed.addFields([{
                                name: `\`${i + 1}.\` ${res[i].name}`,
                                value: `${res[i].countId + 1} Nachrichten`,
                                inline: true
                            }])
                        };
                    }
                }
                message.channel.send({
                    embeds: [embed]
                }).catch(console.error);
            });
        };
    }
}