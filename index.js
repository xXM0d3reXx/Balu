// INPUT
const Discord = require('discord.js')
const fs = require('node:fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const clientId = '925896859829035048';
const guildId = '851071074736144415';

//INTENTS AND PARTIALS
const {
    Intents
} = Discord

const client = new Discord.Client({

    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],

    partials: ["CHANNEL"],

});

// EXPORT CLIENT
module.exports.Client = client

// HANDLER
const handlerFiles = fs.readdirSync("./handler").filter(file => file.endsWith(".js"));
for (const file of handlerFiles) {
    require(`./handler/${file}`);

};
console.log("Es wurden alle Handler geladen");

let listing = [];
fs.readdirSync('./handler').forEach(function (listings) {
    listing.push(listings);
});
console.log(listing);

client.countings = new Discord.Collection();
const countingFiles = fs.readdirSync('./counting').filter(file => file.endsWith('.js'));
for (const file of countingFiles) {
    const counting = require(`./counting/${file}`);

    if (counting) {
        client.countings.set(counting.name, counting);
    }
};

const testings = [];
const commandFiles = fs.readdirSync('./testing').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const test = require(`./testing/${file}`);
    testings.push(test.data.toJSON());
}

// LOGIN
client.login(process.env.TOKEN)
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true, })