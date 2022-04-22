const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: 'vorschlag',
    description: 'Stelle einen Vorschlag an den Server',
    usage: '#vorschlag <text>',
    execute: async(client, message, args, prefix, Discord) =>{
        const fail = new MessageEmbed()
        .setTitle(`**UTILS** ➽║ **vorschlag**`)
        .setColor("RED")
        .setDescription("Mit diesem Befehl kann man einen Vorschlag an den Server stellen.")
        .addFields(
            { name: `\`Anwendung\``, value: "➽ #vorschlag <Text>", inline: true},
            { name: `\`Beispiel\``, value: `➽ #vorschlag Neue Self Roles`, inline: true},
            { name: `\`Benötigte Channel\``, value: `➽ <#851072486678331402>`}
        )
        .setTimestamp()
        .setFooter(`${message.author.tag} | Zeichen wie "<" und ">" bitte weglassen.`)
        if (message) {
            if (message.channel.id != '851072486678331402') {
                return message.channel.send({ embeds: [fail] }).catch(console.error())
            }
            let text = message.content.split(" ").slice(1).join(" ")
            if (!text) {
                return message.channel.send({ embeds: [fail] }).catch(console.error())
                    .then(m => setTimeout(() => {
                        m.delete().catch(console.error()),
                            message.delete().catch(console.error())
                    }, 10000));
            }
            const Embed = new Discord.MessageEmbed()
                .setTitle("Vorschlag")
                .setDescription(`${text}`)
                .addFields({ name: "Von", value: `<@${message.author.id}>`})
                .setColor("RANDOM")
                .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true, size: 512 })}`)
                .setFooter("Du möchtest etwas Vorschlagen? Dann schreib #vorschlag und dein vorschlag.", 'https://cdn.discordapp.com/attachments/913146795532640326/925545664438480937/lexenia-pb.gif')
                message.channel.send({ embeds: [Embed] }).catch(console.error()).then(embedMessage => {
                embedMessage.react("<a:LX_haken:912459313518379028>").catch(console.error()), embedMessage.react("<a:LX_kreuz:917141623777939537>").catch(console.error())
            });
            message.delete().catch(console.error())
        };
    }
}