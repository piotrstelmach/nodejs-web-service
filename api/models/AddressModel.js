var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
   Street:{
       type:String,
       //required: 'street is required'
   },
    Street_num:{
       type:Number,
        //required: 'Street number is required!'
    },
    Country:{
       type:String,
        //required:'Country is required'
    }

});
module.exports = mongoose.model('Addresses',AddressSchema);
