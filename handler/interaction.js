const client = require("../index").Client

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'echo') {
        const messageToSend = interaction.options.getString("message");
        interaction.followUp({ content: messageToSend });
    }
});