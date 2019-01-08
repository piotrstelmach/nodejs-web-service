
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
   Name:{
       type:String,
       required:'Enter name of employee'
   },
    Last_name:{
       type:String,
        required: 'Enter last name'
    },
    Birth_date:{
      type:Date,
      required:'Please enter date of birth'
    },
    Salary:{
      type: Decimal
    },
    Created_date:{
       type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('Employees',EmployeeSchema);