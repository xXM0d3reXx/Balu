module.exports = {
    name: 'error404',
    description: 'Replies with easteregg',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        try {
            return message.reply(`Mein Bot token ist ||Never Gonna Give You Up.||`)
        } catch (err) { console.log(err) }
    }
}