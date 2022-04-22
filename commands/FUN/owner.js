module.exports = {
    name: 'owner',
    description: 'The master of the Rick Rolls',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        if (message) {

            message.reply("https://www.youtube.com/watch?v=dQw4w9WgXcQ").catch(console.error)

        };
    }
}