module.exports = {
    name: 'lexenia',
    description: 'lexenia beste bruder fuck daniel, all my homies hate daniel',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        try {
            return message.reply("discord.gg/lexenia")
        } catch (err) { console.log(err) }
    }
}