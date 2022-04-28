const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: 'vorschlag',
    description: 'Stelle einen Vorschlag an den Server',
    usage: '#vorschlag <text>',
    execute: async (client, message, args, prefix, Discord) => {
        const fail = new MessageEmbed()
            .setTitle(`**UTILS** ➽║ **vorschlag**`)
            .setColor("RED")
            .setDescription("Mit diesem Befehl kann man einen Vorschlag an den Server stellen.")
            .addFields(
                { name: `\`Anwendung\``, value: "➽ #vorschlag <Text>", inline: true },
                { name: `\`Beispiel\``, value: `➽ #vorschlag Neue Self Roles`, inline: true },
                { name: `\`Benötigte Channel\``, value: `➽ <#851072486678331402>` }
            )
            .setTimestamp()
            .setFooter(`${message.author.tag} | Zeichen wie "<" und ">" bitte weglassen.`)
        if (message) {
            if (message.channel.id != '851072486678331402') {
                try {
                    return message.reply({
                        embeds: [fail]
                    })
                } catch (err) { console.log(err) }
            }
            let text = message.content.split(" ").slice(1).join(" ")
            if (!text) {
                return message.channel.send({ embeds: [fail] })
                    .then(m => setTimeout(() => {
                        m.delete(),
                            message.delete()
                    }, 10000));
            }
            const Embed = new Discord.MessageEmbed()
                .setTitle("Vorschlag")
                .setDescription(`${text}`)
                .addFields({ name: "Von", value: `<@${message.author.id}>` })
                .setColor("RANDOM")
                .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true, size: 512 })}`)
                .setFooter("Du möchtest etwas Vorschlagen? Dann schreib #vorschlag und dein vorschlag.", 'https://cdn.discordapp.com/attachments/913146795532640326/925545664438480937/lexenia-pb.gif')
            const reaction = await message.channel.send({ embeds: [Embed] })
            try {
                reaction.react("<a:LX_haken:912459313518379028>")
            } catch (err) { console.log(err) }
            try {
                reaction.react("<a:LX_kreuz:917141623777939537>")
            } catch (err) { console.log(err) }
            try {
                message.delete()
            } catch (err) { console.log(err) }
        };
    }
}