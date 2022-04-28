const client = require("../index").Client
const {
    setInterval
} = require('timers')
client.on("ready", async () => {

    const guild = client.guilds.cache.get("851071074736144415");
    var channel = guild.channels.cache.get("920410870096470066");

    setInterval(async function () {
        try {
            var onlineCount = (await guild.members?.fetch()).filter(member => !member.user.bot && member.presence?.status !== 'offline' && member.presence?.status).size;
        } catch (err) { console.log(err) }
        try {
            var memberCount = (await guild.members?.fetch()).filter(member => !member.user.bot).size;
        } catch (err) { console.log(err) }
        try {
            channel.setName(`➽║🟢${onlineCount}║👤${memberCount}`)
        } catch (err) { console.log(err) }
    }, 60 * 5000);
})
