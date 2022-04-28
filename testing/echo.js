const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    ...new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option
                .setName('message')
                .setDescription('The message to echo back')
                .setRequired(true))
}