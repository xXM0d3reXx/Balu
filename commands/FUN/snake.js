module.exports = {
    name: 'snake',
    description: 'el snake',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        try {
            return message.reply("https://www.google.com/search?q=play+snake")
        } catch (err) { console.log(err) }
    }
}