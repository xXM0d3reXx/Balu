module.exports = {
    name: 'lexenia',
    description: 'lexenia beste bruder fuck daniel, all my homies hate daniel',
    execute: async(client, message, args, prefix, Discord) =>{
        if (message.channel.type === "DM") { return }
        if (message) {

            message.reply("discord.gg/lexenia").catch(console.error)

        };

    }

}