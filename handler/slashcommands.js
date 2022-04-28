const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require('dotenv')
dotenv.config()
const fs = require('node:fs');

// Place your client and guild ids here
const clientId = '925896859829035048';
const guildId = '851071074736144415';

const commands = [];
const commandFiles = fs.readdirSync('./testing').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./testing/${file}`);
    commands.push(command.data.toJSON());
}


const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

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