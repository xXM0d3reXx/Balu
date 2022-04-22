const afkshema = require('../../models/afk-schema');
const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: 'afk',
    description: 'Setze dein AFK Status.',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        const reason = args.join(" ") || "Kein Grund."

        data = new afkshema({
            name: message.author.username,
            userId: message.author.id,
            guildId: message.guild.id,
            reason: reason,
            timestamp: Date.now()
        });

        data.save();
        let embed = new MessageEmbed()
            .setDescription(`${message.author} ist nun AFK. Grund: ${reason}`)
            .setColor("RANDOM")

        return message.reply({
            embeds: [embed]
        }).catch(console.error);
    }
}