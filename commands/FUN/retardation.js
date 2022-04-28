module.exports = {
    name: 'retardation',
    description: 'custom command von Fox',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        try {
            return message.reply("https://cdn.discordapp.com/attachments/848685875114410004/939636701222023208/Y2Mate.is_-_cave_with_MatttGFX-mRae5C3wfzs-1080p-1642232166958.mp4")
        } catch (err) { console.log(err) }
    }
}