var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var mongooseUniqueValidator =  require('mongoose-unique-validator');


var schema = new Schema({
    title                   : {type : String, required : true},
    dateCreated             : {type : Date, required : true},
    dateUpdated             : {type : Date, required : true},
    announcement            : {type : String, required : true}
});
schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Announcement',schema);