const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('node:fs');
const dotenv = require('dotenv')
dotenv.config()
const token = process.env.TOKEN

const commands = [];
const commandFiles = fs.readdirSync('./testing').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '925896859829035048';
const guildId = '851071074736144415';

for (const file of commandFiles) {
    const command = require(`../testing/${file}`);
    commands.push(command.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();