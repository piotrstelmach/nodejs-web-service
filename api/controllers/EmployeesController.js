const mongoose = require('mongoose');
const Employee = mongoose.model('Employees');
Address = mongoose.model('Addresses');

exports.listAllEmployees = function (req, res) {
    Employee.find().populate('Address_id').then(function (err, employees) {
        if (err) {
            res.send(err);
        }
        res.json(employees);
    });
};

exports.listOneEmployee = function (req, res) {
    Employee.findById(req.params.employeeId).populate('Address_id').then(function (err, employee) {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    });
};


exports.createNewEmployee = function(req,res){
    let employee = new Employee(req.body);
    employee.save(function(err){
        if(err){
            res.send(err);
        }
        res.json({message: 'Succesfully created!'});
    });
};

exports.updateEmployee = function(req,res){
    Employee.findOneAndUpdate({_id:req.params.employeeId},req.body,{new: true},function (err,employee) {
        if(err){
            res.send(err);
        }
        res.json(employee);
    });
};

exports.deleteEmployee = function(req,res){
    Employee.remove({_id:req.params.employeeId},function (err) {
        if(err){
            res.send(err);
        }
        res.json({message: 'Employee deleted!'});
    });
};

