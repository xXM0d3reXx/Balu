module.exports = {
    name: 'snake',
    description: 'el snake',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        if (message) {

            message.reply("https://www.google.com/search?q=play+snake").catch(console.error)

        };
    }
}