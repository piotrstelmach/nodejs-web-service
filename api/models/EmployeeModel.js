
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
   Name:{
       type:String,
       //required:true
   },
    Last_name:{
       type:String,
        //required: true
    },
    Birth_date:{
      type:Date,
      //required:true
    },
    Salary:{
      type: Number
    },
    Address_id:{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Addresses'
    },
    Created_date:{
       type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('Employees',EmployeeSchema);