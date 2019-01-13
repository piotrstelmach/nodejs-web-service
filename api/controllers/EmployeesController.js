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


exports.createNewEmployee = function (req, res) {
    let address=new Address({
       Street: req.body.Street,
       Street_num: req.body.Street_num,
       Country: req.body.Country
    });
    address.save()
        .catch(err=>{
            res.status(400).send(err);
        });
    let employee = new Employee({
        Name: req.body.Name,
        Last_name: req.body.Last_name,
        Birth_date: req.body.Birth_date,
        Salary: req.body.Salary,
        Address_id: address.id
    });
    employee.save()
        .then(user => {
            res.json('Employee created succesfully');
        })
        .catch(err => {
            res.status(400).send(err);
        });
};



exports.updateEmployee = function (req, res) {
    Employee.findOneAndUpdate({_id: req.params.employeeId}, req.body, {new: true}, function (err, employee) {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    });
};

exports.deleteEmployee = function (req, res) {
    Employee.deleteOne({_id: req.params.employeeId}, function (err) {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Employee deleted!'});
    });
};

