var mongoose = require('mongoose');
Employee = mongoose.model('Employees');
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
    Employee.findOne({}).populate('Address_id').then(function (err, employee) {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    });
};

//TODO: Create employee and update, create address and update



