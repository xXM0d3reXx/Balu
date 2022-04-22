const gbschema = require('../../models/gb-schema');
const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: 'gbremove',
    description: 'Entfernt dich vom Geburtstags System (Team Command)',
    usage: '#gbremove @user || #gbremove id',
    execute: async (client, message, args, prefix, Discord) => {
        const fail = new MessageEmbed()
        .setTitle(`**Birthday** ➽║ **gbremove**`)
        .setColor("RED")
        .setDescription("Mit diesem Befehl kann ein Teammitglied dir deinen Eintrag vom Geburtstags System entfernen.")
        .addFields(
            { name: `\`Anwendung\``, value: "➽ #gbremove @User", inline: true},
            { name: `\`Beispiel\``, value: `➽ #gbremove ${client.user}`, inline: true},
            { name: `\`Benötigte Permissions\``, value: "➽ Manage Messages"}
        )
        .setTimestamp();
        if (message.channel.type !== "DM") {

            if (message && !message.author.bot) {
                if (message.member.permissions.has("MANAGE_MESSAGES")) {
                    let todelete = message.mentions.members.first() || args[0];

                    if (!todelete) return message.reply({ embeds: [fail] }).catch(console.error);

                    gbschema.findOne({
                        userId: todelete.id || todelete
                    }, async (err, data) => {

                        if (!data) return message.reply({ embeds: [fail] }).catch(console.error);

                        if (data) {
                            data.delete().then(message.reply(`<a:LX_haken:912459313518379028> ➽║ Eintrag wurde entfernt.`).catch(console.error))
                        }
                    });
                };
            };
        };
    }
}