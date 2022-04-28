const {
    MessageActionRow,
    MessageEmbed,
    MessageSelectMenu,
    Interaction
} = require('discord.js');
const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource
} = require("@discordjs/voice");
const ytdl = require("ytdl-core");
const Channels = ["851072969841442887"];
module.exports = {
    name: 'play',
    description: 'Änder den Radiosender.',
    usage: '#play',
    execute: async (client, message, args, prefix, Discord) => {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('Nichts ausgewählt')
                    .addOptions([{
                        label: 'Energy Salzburg',
                        emoji: {
                            "name": "1️⃣"
                        },
                        value: 'http://cdn.nrjaudio.fm/adwz1/at/36005/mp3_128.mp3',
                    },
                    {
                        label: 'Antenne Bayern',
                        emoji: {
                            "name": "2️⃣"
                        },
                        value: 'https://s7-webradio.antenne.de/antenne/stream/mp3?aw_0_1st.playerid=radio.de',
                    },
                    {
                        label: 'ILoveRadio',
                        emoji: {
                            "name": "3️⃣"
                        },
                        value: 'https://streams.iloveradio.de/iloveradio1.mp3',
                    },
                    {
                        label: 'Sunshine',
                        emoji: {
                            "name": "4️⃣"
                        },
                        value: 'https://sunshinelive.hoerradar.de/sunshinelive-live-mp3-hq',
                    },
                    {
                        label: '80s80s',
                        emoji: {
                            "name": "5️⃣"
                        },
                        value: 'https://streams.80s80s.de/100/mp3-192/streams.80s80s.de/',
                    },
                    {
                        label: '90s90s',
                        emoji: {
                            "name": "6️⃣"
                        },
                        value: 'https://streams.90s90s.de/90s90s-sommerhits/mp3-192/streams.90s90s.de/',
                    },
                    {
                        label: 'Neue Deutsche Welle',
                        emoji: {
                            "name": "7️⃣"
                        },
                        value: 'https://streams.80s80s.de/ndw/aac-64/streams.80s80s.de/',
                    },
                    {
                        label: 'Radio Bob Rock Hits',
                        emoji: {
                            "name": "8️⃣"
                        },
                        value: 'https://streams.radiobob.de/bob-rockhits/aac-64/streams.radiobob.de/',
                    },
                    ]),
            );
        const filter = (interaction) => interaction.isSelectMenu() && interaction.user.id === message.author.id

        const collector = message.channel.createMessageComponentCollector({
            filter,
            max: "1",
            time: 20000
        })

        collector.on("collect", async (collected) => {
            const value = collected.values[0]
            collected.deferUpdate()
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
                            //use a: direct mp3 link / file / const ytdl = require("ytdl-core"); ytdl("https://www.youtube.com/watch?v=IoUqh5q--MY"); "http://cdn.nrjaudio.fm/adwz1/at/36005/mp3_128.mp3
                            const resource = createAudioResource(value, {
                                inlineVolume: true
                            });
                            resource.volume.setVolume(0.2);
                            const player = createAudioPlayer()
                            VoiceConnection.subscribe(player);
                            player.play(resource);
                            player.on("end", () => {
                                player.stop()
                                VoiceConnection.destroy()

                            })
                        })
                    } catch (err) { console.log(err) }
                }
                try {
                    message.channel.send(`<a:LX_haken:912459313518379028> ➽║ Es wird nun der ausgewählte Radiosender abgespielt. Nutze den Command nochmal um den sender zu ändern.`)
                } catch (err) { console.log(err) }
            } catch (error) {
                console.log(error)
            }
        })
        collector.on("end", async (collected) => {
            return
        })
        try {
            message.channel.send({
                content: "Wähle hier aus welchen der unten Aufgelisteten Radiosender du abspielen willst.",
                components: [row]
            })
        } catch (err) { console.log(err) }
    }
}