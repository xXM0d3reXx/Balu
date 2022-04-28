const birthdaySchema = require("../../models/gb-schema");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "gbset",
    description: "Fügt dich zum Geburtstags System hinzu",
    usage: "#gbset Tag Monat",
    execute: async (client, message, args, prefix, Discord) => {
        const fail = new MessageEmbed()
            .setTitle(`**Birthday** ➽║ **gbset**`)
            .setColor("RED")
            .setDescription(
                "Mit diesem Befehl kann man seinen seinen eigenen Geburtstag ins System eintragen."
            )
            .addFields(
                {
                    name: `\`Verwendung\``,
                    value: "➽ #gbset <Tag> <Monat>",
                    inline: true,
                },
                {
                    name: `\`Beispiel\``,
                    value: `➽ #gbset 26 6\n➽ #gbset 26 juni\n➽ #gbset 26 Juni`,
                    inline: true,
                }
            )
            .setTimestamp()
            .setFooter(
                `${message.author.tag} | Sonderzeichen wie "<" und ">" bitte weglassen.`
            );
        if (message.channel.type !== "DM") {
            if (message && !message.author.bot) {
                if (args[0] >= 1 && args[0] <= 31) {
                    const query = args[1]?.toLowerCase();
                    let month;
                    switch (query) {
                        case "januar" || "1":
                            month = 1;
                            break;
                        case "februar" || "2":
                            month = 2;
                            break;
                        case "märz" || "3":
                            month = 3;
                            break;
                        case "april" || "4":
                            month = 4;
                            break;
                        case "mai" || "5":
                            month = 5;
                            break;
                        case "juni" || "6":
                            month = 6;
                            break;
                        case "juli" || "7":
                            month = 7;
                            break;
                        case "august" || "8":
                            month = 8;
                            break;
                        case "september" || "9":
                            month = 9;
                            break;
                        case "oktober" || "10":
                            month = 10;
                            break;
                        case "november" || "11":
                            month = 11;
                            break;
                        case "dezember" || "12":
                            month = 12;
                            break;
                        case "01":
                            month = 1;
                            break;
                        case "02":
                            month = 2;
                            break;
                        case "03":
                            month = 3;
                            break;
                        case "04":
                            month = 4;
                            break;
                        case "05":
                            month = 5;
                            break;
                        case "06":
                            month = 6;
                            break;
                        case "07":
                            month = 7;
                            break;
                        case "08":
                            month = 8;
                            break;
                        case "09":
                            month = 9;
                            break;
                    }
                    birthdaySchema.findOne(
                        {
                            userId: message.author.id,
                            guildId: message.guild.id,
                        },
                        async (err, data) => {
                            if (err) {
                                return console.log(err);
                            } else if (data) {
                                try {
                                    return message
                                        .reply(
                                            `<a:LX_kreuz:917141623777939537> ➽║ Du hast bereits ein Datum gesetzt. Falsches Datum? => Ticket öffnen. Danke`
                                        )
                                } catch (err) { console.log(err) }
                            } else if (!data) {
                                const newBirthday = new birthdaySchema({
                                    name: message.author.username,
                                    userId: message.author.id,
                                    guildId: message.guild.id,
                                    day: args[0],
                                    month: month,
                                });
                                newBirthday
                                    .save()
                                    .then(
                                        message.reply(
                                            `<a:LX_haken:912459313518379028> ➽║ Dein Geburtstag wurde nun gesetzt. Falsches Datum? => Ticket öffnen. Danke`
                                        )
                                    )
                                    .catch(console.log());
                            }
                        }
                    );
                } else {
                    try {
                        return message.reply({
                            embeds: [fail]
                        })
                    } catch (err) { console.log(err) }
                }
            } else {
                try {
                    return message.reply({
                        embeds: [fail]
                    })
                } catch (err) { console.log(err) }
            }
        }
    },
};
