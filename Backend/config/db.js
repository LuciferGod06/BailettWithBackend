const mongoose = require('mongoose');

const connection = mongoose.connect(`mongodb+srv://prasadgoura:Sonu1309@cluster0.zzkqbrx.mongodb.net/bailetti`);


module.exports = {connection};