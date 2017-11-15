const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ToiletSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    
    locations: [{
        clue: {
            type: String,
            required: true,
        },    
        latitude: {
            type: String,
            required: true,
        },
        longitude: {
            type: String,
            required: true,
        },    
        hitcounter: {
            type: Number,
            required: true,
            default: 5
        },
    }]
})

const Toilet = mongoose.model("Toilet", ToiletSchema)

module.exports = Toilet