const mongoose = require('mongoose')

const { Schema } = mongoose

const reqString = {

    type: String,

    required: true,

}

const schema = new Schema(

    {

        name: { type: String },

        userId: { type: String },

        guildId: { type: String },

        reason: { type: String },

        timestamp: { type: Number },

    },

    {

        timestamps: true,

    }

)

const name = 'afkuser'

module.exports = mongoose.models[name] || mongoose.model(name, schema)