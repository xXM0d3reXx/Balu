const client = require("../index").Client
const {
    setInterval
} = require('timers')
client.on("ready", () => {

    const guild = client.guilds.cache.get("851071074736144415");
    var channel = guild.channels.cache.get("920407851103576124");

    setInterval(async function () {
        var dayCount = new Date().getDate();
        var monthCount = new Date().getMonth() + 1;
        var yearCount = new Date().getFullYear();
        try {
            channel.setName(`➽║📅${dayCount}.${monthCount}.${yearCount}`)
        } catch (err) { console.error(err) }
    }, 60 * 1000 * 60);
})
hi