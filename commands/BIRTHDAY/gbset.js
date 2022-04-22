const gbschema = require('../../models/gb-schema');
const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: 'gbset',
    description: 'Fügt dich zum Geburtstags System hinzu',
    usage: '#gbset tag monat',
    execute: async (client, message, args, prefix, Discord) => {
        const fail = new MessageEmbed()
        .setTitle(`**Birthday** ➽║ **gbset**`)
        .setColor("RED")
        .setDescription("Mit diesem Befehl kann man seinen seinen eigenen Geburtstag ins System eintragen um deinen Geburtstag zu feiern.")
        .addFields(
            { name: `\`Anwendung\``, value: "➽ #gbset <Tag> <Monat>", inline: true},
            { name: `\`Beispiel\``, value: `➽ #gbset 26 6\n➽ #gbset 26 juni\n➽ #gbset 26 Juni`, inline: true}
        )
        .setTimestamp()
        .setFooter(`${message.author.tag} | Zeichen wie "<" und ">" bitte weglassen.`)
        if (message.channel.type !== "DM") {

            if (message && !message.author.bot) {

                if (args[0] < 1 || args[0] > 31) return message.reply({ embeds: [fail] }).catch(console.error());
                if (!args[0]) return message.reply({ embeds: [fail] }).catch(console.error());
                const query = args[1]?.toLowerCase();
                if (!query) return message.reply({ embeds: [fail] }).catch(console.error());

                if (query === "januar") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 1,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "februar") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 2,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "märz"){
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 3,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "april") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 4,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "mai") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 5,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "juni") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 6,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "juli") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 7,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "august") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 8,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "september") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 9,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "oktober") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 10,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "november") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 11,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "dezember") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 12,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "Januar") {
                        gbschema.findOne({
                            userId: message.author.id,
                            guildId: message.guild.id
                        }, async (err, data) => {
    
                            if (err) throw err;
    
                            if (data) {
                                message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                            }
    
                            if (!data) {
    
                                const newgb = new gbschema({
                                    name: message.author.username,
                                    userId: message.author.id,
                                    guildId: message.guild.id,
                                    day: args[0],
                                    month: 1,
                                });
    
                                newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                    .catch(console.error());
    
                            };
                        });
                    } else if (query === "Februar") {
                        gbschema.findOne({
                            userId: message.author.id,
                            guildId: message.guild.id
                        }, async (err, data) => {
    
                            if (err) throw err;
    
                            if (data) {
                                message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                            }
    
                            if (!data) {
    
                                const newgb = new gbschema({
                                    name: message.author.username,
                                    userId: message.author.id,
                                    guildId: message.guild.id,
                                    day: args[0],
                                    month: 2,
                                });
    
                                newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                    .catch(console.error());
    
                            };
                        });
                    } else if (query === "März"){
                        gbschema.findOne({
                            userId: message.author.id,
                            guildId: message.guild.id
                        }, async (err, data) => {
    
                            if (err) throw err;
    
                            if (data) {
                                message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                            }
    
                            if (!data) {
    
                                const newgb = new gbschema({
                                    name: message.author.username,
                                    userId: message.author.id,
                                    guildId: message.guild.id,
                                    day: args[0],
                                    month: 3,
                                });
    
                                newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                    .catch(console.error());
    
                            };
                        });
                    } else if (query === "April") {
                        gbschema.findOne({
                            userId: message.author.id,
                            guildId: message.guild.id
                        }, async (err, data) => {
    
                            if (err) throw err;
    
                            if (data) {
                                message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                            }
    
                            if (!data) {
    
                                const newgb = new gbschema({
                                    name: message.author.username,
                                    userId: message.author.id,
                                    guildId: message.guild.id,
                                    day: args[0],
                                    month: 4,
                                });
    
                                newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                    .catch(console.error());
    
                            };
                        });
                    } else if (query === "Mai") {
                        gbschema.findOne({
                            userId: message.author.id,
                            guildId: message.guild.id
                        }, async (err, data) => {
    
                            if (err) throw err;
    
                            if (data) {
                                message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                            }
    
                            if (!data) {
    
                                const newgb = new gbschema({
                                    name: message.author.username,
                                    userId: message.author.id,
                                    guildId: message.guild.id,
                                    day: args[0],
                                    month: 5,
                                });
    
                                newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                    .catch(console.error());
    
                            };
                        });
                    } else if (query === "Juni") {
                        gbschema.findOne({
                            userId: message.author.id,
                            guildId: message.guild.id
                        }, async (err, data) => {
    
                            if (err) throw err;
    
                            if (data) {
                                message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                            }
    
                            if (!data) {
    
                                const newgb = new gbschema({
                                    name: message.author.username,
                                    userId: message.author.id,
                                    guildId: message.guild.id,
                                    day: args[0],
                                    month: 6,
                                });
    
                                newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                    .catch(console.error());
    
                            };
                        });
                    } else if (query === "Juli") {
                        gbschema.findOne({
                            userId: message.author.id,
                            guildId: message.guild.id
                        }, async (err, data) => {
    
                            if (err) throw err;
    
                            if (data) {
                                message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                            }
    
                            if (!data) {
    
                                const newgb = new gbschema({
                                    name: message.author.username,
                                    userId: message.author.id,
                                    guildId: message.guild.id,
                                    day: args[0],
                                    month: 7,
                                });
    
                                newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                    .catch(console.error());
    
                            };
                        });
                    } else if (query === "August") {
                        gbschema.findOne({
                            userId: message.author.id,
                            guildId: message.guild.id
                        }, async (err, data) => {
    
                            if (err) throw err;
    
                            if (data) {
                                message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                            }
    
                            if (!data) {
    
                                const newgb = new gbschema({
                                    name: message.author.username,
                                    userId: message.author.id,
                                    guildId: message.guild.id,
                                    day: args[0],
                                    month: 8,
                                });
    
                                newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                    .catch(console.error());
    
                            };
                        });
                    } else if (query === "September") {
                        gbschema.findOne({
                            userId: message.author.id,
                            guildId: message.guild.id
                        }, async (err, data) => {
    
                            if (err) throw err;
    
                            if (data) {
                                message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                            }
    
                            if (!data) {
    
                                const newgb = new gbschema({
                                    name: message.author.username,
                                    userId: message.author.id,
                                    guildId: message.guild.id,
                                    day: args[0],
                                    month: 9,
                                });
    
                                newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                    .catch(console.error());
    
                            };
                        });
                    } else if (query === "Oktober") {
                        gbschema.findOne({
                            userId: message.author.id,
                            guildId: message.guild.id
                        }, async (err, data) => {
    
                            if (err) throw err;
    
                            if (data) {
                                message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                            }
    
                            if (!data) {
    
                                const newgb = new gbschema({
                                    name: message.author.username,
                                    userId: message.author.id,
                                    guildId: message.guild.id,
                                    day: args[0],
                                    month: 10,
                                });
    
                                newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                    .catch(console.error());
    
                            };
                        });
                    } else if (query === "November") {
                        gbschema.findOne({
                            userId: message.author.id,
                            guildId: message.guild.id
                        }, async (err, data) => {
    
                            if (err) throw err;
    
                            if (data) {
                                message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                            }
    
                            if (!data) {
    
                                const newgb = new gbschema({
                                    name: message.author.username,
                                    userId: message.author.id,
                                    guildId: message.guild.id,
                                    day: args[0],
                                    month: 11,
                                });
    
                                newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                    .catch(console.error());
    
                            };
                        });
                    } else if (query === "Dezember") {
                        gbschema.findOne({
                            userId: message.author.id,
                            guildId: message.guild.id
                        }, async (err, data) => {
    
                            if (err) throw err;
    
                            if (data) {
                                message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                            }
    
                            if (!data) {
    
                                const newgb = new gbschema({
                                    name: message.author.username,
                                    userId: message.author.id,
                                    guildId: message.guild.id,
                                    day: args[0],
                                    month: 12,
                                });
    
                                newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                    .catch(console.error());
    
                            };
                        });
                } else if (query === "1") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 1,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "2") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 2,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "3"){
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 3,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "4") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 4,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "5") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 5,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "6") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 6,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "7") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 7,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "8") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 8,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "9") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 9,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "10") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 10,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "11") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 11,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if (query === "12") {
                    gbschema.findOne({
                        userId: message.author.id,
                        guildId: message.guild.id
                    }, async (err, data) => {

                        if (err) throw err;

                        if (data) {
                            message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Du hast schon ein Datum gesetzt. Falls dein Datum falsch ist bitte ein Ticket auf machen. Danke`).catch(console.error());
                        }

                        if (!data) {

                            const newgb = new gbschema({
                                name: message.author.username,
                                userId: message.author.id,
                                guildId: message.guild.id,
                                day: args[0],
                                month: 12,
                            });

                            newgb.save().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falls dein Datum falsch gesetzt wurde bitte ein Ticket auf machen. Danke`))
                                .catch(console.error());

                        };
                    });
                } else if(query) {
                    return message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Es wurde kein Monat angegeben.`).catch(console.error());
                }
            };
        };
    }
}