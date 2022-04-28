module.exports = {
    name: 'fuck',
    description: 'custom command von Prelaxo',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        try {
            return message.reply("https://tenor.com/view/stop-gif-18136326")
        } catch (err) { console.log(err) }
    }
}