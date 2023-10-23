const { model, Schema } = require('mongoose');

let levelSchema = new Schema({
    GuildID: String,
    UserID: String,
    Level: Number,
    XP: Number
})

module.exports = model('levelSchema',levelSchema);