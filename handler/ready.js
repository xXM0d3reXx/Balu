// INPUT
const Discord = require('discord.js')
const fs = require('fs')
const client = require("../index").Client
const Channels = ["851072969841442887"]
const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource
} = require("@discordjs/voice")
const moment = require('moment')

// HANDLING
client.on("ready", async () => {
    client.commands = new Discord.Collection();
    const commandFolders = fs.readdirSync('./commands')
    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../commands/${folder}/${file}`);

            if (command.name) {
                client.commands.set(command.name, command);
            }
        }
    };
    client.models = new Discord.Collection();
    const modelFiles = fs.readdirSync('./models').filter(file => file.endsWith('.js'));
    for (const file of modelFiles) {
        const model = require(`../models/${file}`);

        if (model) {
            client.models.set(model.nane, model);
        }
    };
    console.log(`${client.user.username} turned online at ${moment.utc().format("dddd, MMMM Do YYYY, hh:mm:ss")}`)
    setInterval(() => {
        const user = client.users.cache.random();
        let statuse = [`mit ${user.username}`]
        let rstatus = statuse[Math.floor(Math.random() * statuse.length)];
        client.user.setActivity(rstatus, {
            type: "PLAYING",
        })
    }, 1000 * 60 * 5);
    try {
        for (const channelId of Channels) {
            joinChannel(channelId);
            //wait 500ms        
            await new Promise(res => setTimeout(() => res(2), 500))
        }

        function joinChannel(channelId) {
            try {
                client.channels.fetch(channelId).then(channel => {
                    //JOIN THE VC AND PLAY AUDIO
                    const VoiceConnection = joinVoiceChannel({
                        channelId: channel.id,
                        guildId: channel.guild.id,
                        adapterCreator: channel.guild.voiceAdapterCreator
                    });
                    //use a: direct mp3 link / file / const ytdl = require("ytdl-core"); ytdl("https://www.youtube.com/watch?v=IoUqh5q--MY"); "http://cdn.nrjaudio.fm/adwz1/at/36005/mp3_128.mp3"
                    const ytdl = require("ytdl-core");
                    const resource = createAudioResource("http://cdn.nrjaudio.fm/adwz1/at/36005/mp3_128.mp3", {
                        inlineVolume: true
                    });
                    resource.volume.setVolume(0.2);
                    const player = createAudioPlayer()
                    VoiceConnection.subscribe(player);
                    player.play(resource);
                    player.on("idle", () => {
                        try {
                            player.stop()
                        } catch (e) {
                            console.error(e)
                        }
                        try {
                            setTimeout(() => {
                                VoiceConnection.destroy()
                            }, 300000);
                        } catch (a) {
                            console.error(a)
                        }
                        setTimeout(() => {
                            joinChannel(channel.id)
                        }, 300000);
                    })
                })
            } catch (err) { console.error(err) }
        }
    } catch (error) {
        console.error(error)
    }
})