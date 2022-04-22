const msgSchema = require('../models/msg-shema');
const client = require("../index").Client

client.on('messageCreate', async (message) => {
    if(message.channel.id === '851073890795913286') {

        if (message && !message.author.bot) {

            //FEEDING USER DATA IN DATABASE
            msgSchema.findOne({
                userId: message.author.id,
                guildId: message.guild.id
            }, async (err, data) => {

                if (err) return console.error(err);
                if (data) {
                    data.countId++;

                } else {
                    data = new msgSchema({
                        name: message.author.username,
                        userId: message.author.id,
                        guildId: message.guild.id,
                        countId: 1,
                        lb: "all",
                    });
                };
                data.save();
            });
        };
    };
});