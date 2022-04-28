// INPUT
const Discord = require('discord.js')
const client = require("../index").Client
const humanizeDuration = require('humanize-duration')
const cooldown = new Map()
const cooldown1 = new Map()
const statuse = ["Ping net du Katzen hasser.", "Du doofer Hunde Liebhaber.", "Mein Herrchen muss Mal langsam mein Katzenklo sauber machen.", "Ich bin nicht hier um mich mit dir zu unterhalten!", "Wenn mein Chef das sieht, werd ich wohlmöglich gefeuert.", "Bitte unterlassen sie dies!", "Wenn du nicht mein Katzenklo sauber machen willst, dann hast du auch keine Berechtigung mich zu pingen.", "Hast du Kekse? Wenn nicht, hoffe ich für dich du hast einen guten Grund dafür, mich zu pingen.", "Sind eigentlich alle Menschen so nervig wie du?", "Ich bin nicht Arrogant. Nur etwas zu sehr verwöhnt.", "Kann ich dir behilflich sein? Nein? Besser ist das.", "Meine geistig-moralischen Mechanismen sind mysteriös und komplex.", "Miau... Was guckst du so? Ich bin eine ganz normale Katze.", "Meine Meinung zu Menschen? Ich mag sie... solange sie mich mit Futter und Streicheleinheiten versorgen.", "Ich bin gerade sehr beschäftigt... WAS PUTZEN IST WICHTIG, OKAY?", "Mein Herrchen hat mir eine Sonnenbrille aufgesetzt, weil ich ein kleines Kind vom Fahrrad geschubst habe. Seitdem verachte ich Menschen.", "Stell dir vor ich würde dich für diesen sinnlosen Ping bannen... wieso hab ich stell dir vor gesagt...", "Ich wollte eigentlich Bruno heißen, doch dann kam mein Herrchen und er hat mich Balu genannt.", "Ich beobachte alle auf diesem Server 24/7 und frage mich immer wieder, wieso ich eigentlich existiere.", "Wenn ich könnte würde ich wegrennen... Leider bin ich zu faul dafür.", "Manche nennen mich unhöflich. Diese Geringverdiener haben absolut keine Ahnung mit wem die eigentlich reden.", "So lange du nicht mein Herrchen bist, bist du irrelevant für mich.", "Das einzige was ich mehr hasse als Hunde, sind kleine Kinder auf Fahrrädern.", "Nein.", "Ob ich auch nett sein kann? Weiß nicht. Kannst du deinen Ellenbogen mit der Zunge ablecken?", "Ich bin Bru... Balu... ja Balu ist mein Name.", "Marcel arbeitet bei 1&1.", "Ist Mayonnaise auch ein Intrument? Nein Partick, Mayonnaise ist kein Intrument", "Ich bin schon groß und vier komm doch und spiel mit mir. Ich lad dich ein ich bin Caillou", "Was willst du von mir? Ich kenne dich nicht.", "Denkst du im ernst ich bin die Auskunft?", "IQ test sein Vater gebumst", "Lieber check ich deine Mom anstatt dich.", "Ich hasse Menschen die versuchen mich zu pingen.", "Immer diese Handy nutzer die mich pingen. Ich ignoriere die.", "Geh mir nicht auf den Sack."]
const asuna = ["Tom, der gutaussehende und sportlicher Thüringer Würstel", "Tobi, der DJ und bester Rennfahrer Deutschlands", "Soll ich wirklich darauf antworten?", "Bin schon vergeben, hör auf zu Simpen", "Du Stinkst, du stinktier", "Heast du deppata, hoit die goschn"]
const moment = require('moment')
const { setTimeout } = require('timers')
const afkshema = require('../models/afk-schema');
const role1 = '946331031387140106'
const role2 = '946331251604852776'
const role3 = '946142511523569695'
const role4 = '946332260221722664'
const roleID = '940622787733774337'
const inviteLink = 'discord.gg/lexenia' || 'https://discord.gg/lexenia'
const { MessageEmbed } = require("discord.js")

// HANDLING
client.on("messageCreate", async message => {

    if (message.author.bot) {
        return
    }
    let prefix = '#'
    let messageArray = message.content.split(" ")
    let args = messageArray.slice(1)
    let cmd = messageArray[0]?.toLowerCase()

    if (!message.content.startsWith(prefix)) {

        if (message.content.includes(`<@!925896859829035048>`) || message.content.includes(`<@925896859829035048>`)) {
            if (cooldown.has(message.author.id)) {
                const leftdown = cooldown.get(message.author.id);
                const restdown = humanizeDuration(leftdown - Date.now(), {
                    round: true
                })
                try {
                    message.reply(`Ich bin gerade im Cooldown, bitte warte ${restdown}.`)
                } catch (err) { console.log(err) }
            } else {
                let rstatus = statuse[Math.floor(Math.random() * statuse.length)];
                try {
                    message.channel.send(rstatus)
                } catch (err) { console.log(err) }

                cooldown.set(message.author.id, Date.now() + 5000);
                setTimeout(() => {
                    try {
                        cooldown.delete(message.author.id)
                    } catch (err) { console.log(err) }
                }, 5000);
            };
        };
        if (message.content.includes(`<@!756167734072705034>`) || message.content.includes(`<@756167734072705034>`)) {
            if (cooldown1.has(message.author.id)) {
                const leftdown = cooldown1.get(message.author.id);
                const restdown = humanizeDuration(leftdown - Date.now(), {
                    round: true
                })
                try {
                    message.reply(`Ich bin gerade im Cooldown, bitte warte ${restdown}.`)
                } catch (err) { console.log(err) }
            } else {
                let rasuna = asuna[Math.floor(Math.random() * asuna.length)];
                try {
                    message.channel.send(rasuna)
                } catch (err) { console.log(err) }

                cooldown1.set(message.author.id, Date.now() + 5000);
                setTimeout(() => {
                    try {
                    cooldown1.delete(message.author.id)
                    } catch (err) { console.log(err) }
                }, 5000);
            };
        };
        if (message.channel.type !== "DM") {
            const mentionedMember = message.mentions.members.first()
            if (mentionedMember) {
                afkshema.findOne({ userId: mentionedMember.id }, async (err, data) => {
                    if (err) throw err;
                    if (data) {
                        const timeAgo = moment(data.timestamp).fromNow();
                        let embed = new MessageEmbed()
                            .setDescription(`${mentionedMember} ist aktuell AFK. (${timeAgo})\n Grund: ${data.reason}`)
                            .setColor("RANDOM")
                        try {
                            return message.reply({
                                embeds: [embed]
                            })
                        } catch (err) { console.log(err) }
                    }
                })
            }
            afkshema.findOne({ userId: message.author.id }, async (err, data) => {
                if (err) throw err;
                if (data) {
                    let embed = new MessageEmbed()
                        .setDescription(`${message.member} ist nun nicht mehr AFK.`)
                        .setColor("RANDOM")
                    data.deleteOne({ userId: message.author.id })
                    try {
                        return message.reply({
                            embeds: [embed]
                        })
                    } catch (err) { console.log(err) }
                }
            })

            try {
                const online = (message.member?.presence?.status !== 'offline' && message.member?.presence?.status)
                if (online) {
                    let customStatus = (message.member?.presence?.activities[0]?.state)
                    if (customStatus) {
                        if (!customStatus.includes(inviteLink)) {
                            if (!message.member.roles.cache.some(role => role.id === '940622787733774337')) {
                                return
                            } else try {
                                message.member.roles.remove(role1)
                                message.member.roles.remove(role2)
                                message.member.roles.remove(role3)
                                message.member.roles.remove(role4)
                                message.member.roles.remove(roleID)
                            } catch (err) {
                                console.log(err)
                            }
                        }
                        if (customStatus.includes(inviteLink)) {
                            try {
                                message.member.roles.add(roleID)
                            } catch (err) {
                                console.log(err)
                            }
                        }
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
    if (message.content.startsWith(prefix)) {
        let command = client.commands.get(cmd.slice(prefix.length));
        if (!command) {
            return
        }
        if (message.author.id === '848670572610715698') {
            try {
                return command.execute(client, message, args, prefix, Discord);
            } catch (err) { console.log(err) }
        }
        if (message.channelId === "851073946895384627") {
            try {
                return command.execute(client, message, args, prefix, Discord);
            } catch (err) { console.log(err) }
        } else {
            if (command.name === "msglb") {
                if (message.channel.type === "DM") { return command.execute(client, message, args, prefix, Discord); }
                if (cooldown1.has(message.guild.id)) {
                    const leftdown = cooldown1.get(message.guild.id);
                    const restdown = humanizeDuration(leftdown - Date.now(), {
                        round: true
                    })
                    try {
                        return message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Ich bin gerade im Cooldown, bitte warte ${restdown}.`)
                    } catch (err) { console.log(err) }
                }
                command.execute(client, message, args, prefix, Discord);
                cooldown1.set(message.guild.id, Date.now() + 1800000);
                setTimeout(() => {
                    try {
                    cooldown1.delete(message.guild.id)
                    } catch (err) { console.log(err) }
                }, 1800000);
            } else {
                if (cooldown.has(message.author.id)) {
                    const leftdown = cooldown.get(message.author.id);
                    const restdown = humanizeDuration(leftdown - Date.now(), {
                        round: true
                    })
                    try {
                        return message.reply(`<a:LX_kreuz:917141623777939537> ➽║ Ich bin gerade im Cooldown, bitte warte ${restdown}.`)
                    } catch (err) { console.log(err) }
                }
                command.execute(client, message, args, prefix, Discord);
                cooldown.set(message.author.id, Date.now() + 5000);
                setTimeout(() => {
                    try {
                        cooldown.delete(message.author.id)
                    } catch (err) { console.log(err) }
                }, 5000);
            }
        }
    }
})
