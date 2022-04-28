const moment = require('moment');
const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: 'userinfo',
    description: 'Lese User Informationen aus',
    usage: '#userinfo || #userinfo @user',
    execute: async (client, message, args, prefix, Discord) => {
        if (message.channel.type === "DM") { return }
        let toPing = (message.mentions.members.first() || message.guild.members.cache.get(args[0]))

        if (toPing) {

            let x = Date.now() - toPing.user.createdAt;
            let y = Date.now() - message.guild.members.cache.get(toPing.id).joinedAt;
            const joined = Math.floor(y / 86400000);
            const joinede = Math.floor(x / 86400000);

            const joineddate = moment.utc(message.guild.members.cache.get(toPing.id).joinedAt).format("dddd, MMMM Do YYYY");

            const embed = new Discord.MessageEmbed()
                .setTitle(`<a:LX_shiggycool:914337097903661126>			Userinfo			<a:LX_shiggycool:914337097903661126>`)
                .setTimestamp()
                .setColor('RANDOM')
                .setThumbnail(toPing.displayAvatarURL({
                    dynamic: true,
                    size: 512
                }))
                .addField("Member Name", `${toPing}`)
                .addField("Member ID", toPing.id)
                .addField("⏲ Alter des Kontos:", ` ${moment.utc(toPing.user.createdAt).format("dddd, MMMM Do YYYY")}\n> ${joinede} day(S) Ago`, true)
                .addField('⏲ Auf dem Server seit:', `${joineddate} \n> ${joined} day(S) Ago`)

            try {
                return message.reply({
                    embeds: [embed]
                })
            } catch (err) { console.log(err) }
        } else if (!toPing) {

            let x = Date.now() - message.author.createdAt;
            let y = Date.now() - message.guild.members.cache.get(message.author.id).joinedAt;
            const joined = Math.floor(y / 86400000);
            const joinede = Math.floor(x / 86400000);

            const joineddate = moment.utc(message.guild.members.cache.get(message.author.id).joinedAt).format("dddd, MMMM Do YYYY");

            const embed = new Discord.MessageEmbed()
                .setTitle(`<a:LX_shiggycool:914337097903661126>			Userinfo			<a:LX_shiggycool:914337097903661126>`)
                .setTimestamp()
                .setColor('RANDOM')
                .setThumbnail(message.author.displayAvatarURL({
                    dynamic: true,
                    size: 512
                }))
                .addField("Member Name", `${message.author}`)
                .addField("Member ID", message.author.id)
                .addField("⏲ Alter des Kontos:", ` ${moment.utc(message.author.createdAt).format("dddd, MMMM Do YYYY")}\n> ${joinede} day(S) Ago`, true)
                .addField('⏲ Auf dem Server seit:', `${joineddate} \n> ${joined} day(S) Ago`)

            try {
                return message.reply({
                    embeds: [embed]
                })
            } catch (err) { console.log(err) }
        }
    }
}