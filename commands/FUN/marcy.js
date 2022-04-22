module.exports = {
    name: 'marcy',
    description: 'Replies with a marcy',
    execute: async(client, message, args, prefix, Discord) =>{
        if (message.channel.type === "DM") { return }
        if (message) {

            message.reply("https://www.youtube.com/watch?v=D9LxMut3TMM").catch(console.error)

        };
    }
}