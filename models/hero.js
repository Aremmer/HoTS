var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    heroSchema = new Schema({
   attributeid:       {type:String},
   name:              {type:String},
   title:             {type:String},
   description:       {type:String},
   icon:              {type:String},
   role:              {type:String},
   type:              {type:String},
   gender:            {type:String},
   franchise:         {type:String},
   difficulty:        {type:String},
   recommendBuildKey: {type:Array},
   ratings: {
     damage:          {type:Number},
     utility:         {type:Number},
     survivability:   {type:Number},
     complexity:      {type:Number}
   },
   releaseDate: {type:String},
   stats: {},
   abilities: {},
   talents: {}
 })

 module.exports = {
   Hero: mongoose.model('Hero', heroSchema)
 }
