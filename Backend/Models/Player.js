
const mongoose = require("mongoose");

const playerSchema = mongoose.Schema ({

    nom : String,
    age : String,
    position : String,
    nombre : Number,
    // un objet
    teamId:{type:mongoose.Schema.Types.ObjectId,
        ref:"Team"}
})
const player = mongoose.model("Player",playerSchema);
module.exports = player ;