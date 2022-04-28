const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require('dotenv')
dotenv.config()
const token = process.env.TOKEN

const test = [];

// Place your client and guild ids here
const clientId = '925896859829035048';
const guildId = '851071074736144415';

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: test })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);