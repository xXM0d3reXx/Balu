// INPUT
const Discord = require('discord.js')
const client = require("../index").Client

// HANDLING
client.on("voiceStateUpdate", async (oldState, newState) => {
    if(newState.channelId && newState.channel.type === "GUILD_STAGE_VOICE" && newState.guild.me.voice.suppress) {
        try{
            await newState.guild.me.voice.setSuppressed(false)
        }catch (d) {
			console.error(d)
        }
    }
})