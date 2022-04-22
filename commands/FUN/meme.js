const {
    MessageEmbed,
} = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
    name: 'meme',
    description: 'meme',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {
                message.channel.send(`${json.url}`).catch(console.error)
            });
    }
}