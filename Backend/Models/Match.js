// import mongoose module

const mongoose = require("mongoose");
// creation d'un schema
const matchSchema = mongoose.Schema ({
    scoreOne : Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String,
    
})
// match en miniscule c'est une variable adheka 3leh ktibneh ;("Match") hia module 
const match = mongoose.model(" Match",matchSchema);
// export 
module.exports= match;