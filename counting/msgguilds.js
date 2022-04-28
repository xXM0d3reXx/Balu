const guildSchema = require('../models/msg-guild');
const client = require("../index").Client

client.on('messageCreate', async (message) => {
    if(message.channel.id === '851073890795913286') {

        if (message && !message.author.bot) {

            //FEEDING GUILD DATA IN DATABASE
            guildSchema.findOne({
                guildId: message.guild.id
            }, async (err, data) => {

                if (err) return console.log(err);
                if (data) {
                    data.countId++;

                } else {
                    data = new guildSchema({
                        guildId: message.guild.id,
                        countId: 1
                    });
                };
                data.save();
            });
        };
    };
});
