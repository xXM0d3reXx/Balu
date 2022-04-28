const fetch = require('axios')
const dotenv = require('dotenv')
dotenv.config()
module.exports = {
    name: 'av',
    description: 'Zeige den Avatar von dir/einem User.',
    usage: '#av || #av @user',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        let toPing = (message.mentions.members.first() || message.guild.members.cache.get(args[0]))

        if (toPing) {
            let res = await fetch.get(`https://discord.com/api/guilds/851071074736144415/members/${toPing.id}`, {
                headers: {
                    Authorization: `Bot ${process.env.TOKEN}`
                }
            })
            if (res.data.avatar !== undefined && res.data.avatar !== null) {
                let url = `https://cdn.discordapp.com/guilds/851071074736144415/users/${toPing.id}/avatars/${res.data.avatar}.webp?size=2048`

                const embed = new Discord.MessageEmbed()
                    .setDescription(`Avatar von ${toPing}`)
                    .setColor('RANDOM')
                    .setImage(url)



                try {
                    return message.reply({
                        embeds: [embed]
                    })
                } catch (err) { console.log(err) }
            } else {
                const embed = new Discord.MessageEmbed()
                    .setDescription(`Avatar von ${toPing}`)
                    .setColor('RANDOM')
                    .setImage(toPing.displayAvatarURL({
                        dynamic: true,
                        size: 2048
                    }))
                try {
                    return message.reply({
                        embeds: [embed]
                    })
                } catch (err) { console.log(err) }
            }
        }
        if (!toPing) {
            let res = await fetch.get(`https://discord.com/api/guilds/851071074736144415/members/${message.author.id}`, {
                headers: {
                    Authorization: `Bot ${process.env.TOKEN}`
                }
            })
            if (res.data.avatar !== undefined && res.data.avatar !== null) {
                let url = `https://cdn.discordapp.com/guilds/851071074736144415/users/${message.author.id}/avatars/${res.data.avatar}.webp?size=2048`

                const embed = new Discord.MessageEmbed()
                    .setDescription(`Avatar von ${message.author}`)
                    .setColor('RANDOM')
                    .setImage(url)



                try {
                    return message.reply({
                        embeds: [embed]
                    })
                } catch (err) { console.log(err) }
            } else {
                const embed = new Discord.MessageEmbed()
                    .setDescription(`Avatar von ${message.author}`)
                    .setColor('RANDOM')
                    .setImage(message.author.displayAvatarURL({
                        dynamic: true,
                        size: 2048
                    }))
                try {
                    return message.reply({
                        embeds: [embed]
                    })
                } catch (err) { console.log(err) }
            }
        }
    }
}