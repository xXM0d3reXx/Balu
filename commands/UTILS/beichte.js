module.exports = {
    name: 'beichte',
    description: 'Beichte etwas aus deiner vergangenheit an alle.',
    usage: '#beichte <text>',
    execute: async (client, message, args, prefix, Discord) => {

        if (message.channel.type === "DM") {
            if (message && !message.author.bot) {
                let text = message.content.split(" ").slice(1).join(" ")
                if (!text) {
                    try {
                        return message.reply(`Bitte verfasse eine Beichte wenn du mich nutzen willst.`)
                    } catch (err) { console.log(err) }
                };

                const guild = client.guilds.cache.get("851071074736144415");
                var channelss = guild.channels.cache.get("927297988295004190");

                if (!channelss) return;

                let embed = new Discord.MessageEmbed()
                    .setAuthor("Teile uns hier dein peinlichstes Erlebnis mit!")
                    .setImage('https://cdn.discordapp.com/attachments/913146795532640326/927318042743013487/grafik1.jpg')
                    .setColor("RANDOM")
                    .setDescription(text)
                    .setFooter("Du möchtest etwas beichten? Dann schreib unserem Bot mit #beichte und deiner Beichte. Alle Beichten sind zu 100% anonym.", 'https://cdn.discordapp.com/attachments/913146795532640326/925545664438480937/lexenia-pb.gif')

                try {
                    return channelss.send({
                        embeds: [embed]
                    })
                } catch (err) { console.log(err) }
                console.log(`${message.author.id} hat gebeichtet`)
            };
        };
    }
}