const {
    MessageActionRow,
    MessageEmbed,
    MessageSelectMenu,
    MessageButton,
    Interaction
} = require("discord.js");
const fs = require('fs')

module.exports = {
    name: 'help',
    description: 'Command Listung',
    usage: '#help || #help <command>',
    execute: async (client, message, args, prefix, Discord) => {
        if (args[0]) {
            const command = await client.commands.get(args[0]);

            if (!command) {
                try {
                    return message.channel.send("Unbekannter Command: " + '#' + args[0])
                } catch (err) { console.log(err) }
            }

            let embed = new MessageEmbed()
                .setTitle(`**Command:** #${command.name}`)
                .addField("> ❯ Beschreibung", command.description || "Nicht bereitgestellt")
                .addField("> ❯ Verwendungszweck", command.usage || "Nicht bereitgestellt")
                .setThumbnail(client.user.displayAvatarURL())
                .setColor("RANDOM")

            try {
                return message.reply({
                    embeds: [embed]
                })
            } catch (err) { console.log(err) }
        } else {

            let emx = new MessageEmbed()
                .setTitle(`**Hier sind meine Commands.**`)
                .setColor("BLUE")
                .setFooter("Balu [#] | '.js' gehört nicht zum Command!", client.user.displayAvatarURL())
                .setThumbnail(client.user.displayAvatarURL());

            const commandFolders = fs.readdirSync('./commands')
            for (const folder of commandFolders) {
                const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
                let desc = "`" + commandFiles.join("`, `") + "`";
                emx.addField(`${folder.toUpperCase()}`, desc);

            };

            try {
                return message.reply({
                    embeds: [emx]
                })
            } catch (err) { console.log(err) }
        }
    }
}