module.exports = {
    name: 'owner',
    description: 'The master of the Rick Rolls',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        try {
            return message.reply("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        } catch (err) { console.log(err) }
    }
}