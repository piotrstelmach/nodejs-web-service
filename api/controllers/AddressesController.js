const mongoose = require('mongoose');
const Employee = mongoose.model('Employees');
Address = mongoose.model('Addresses');

exports.listAddresses = function (req, res) {
    Address.find()
        .then(function (err, addresses) {
            if (err) {
                res.send(err);
            }
            res.json(addresses);
        });
};

exports.listOneAddress = function (req, res) {
    Address.findById(req.params.addressId)
        .then(function (err, address) {
            if (err) {
                res.send(err);
            }
            res.json(address);
        });
};

exports.createNewAddress = function (req, res) {
    let address = new Address({
        Street: req.body.address.Street,
        Street_num: req.body.address.Street_num,
        Country: req.body.address.Country
    });
    address.save()
        .then(address => {
            res.json('Address created succesfully')
        })
        .catch(err => {
            res.status(400).send(err);
        });
};

exports.updateAddress = function (req, res) {
    Address.findOneAndUpdate({_id: req.params.addressId}, req.body, {new: true}, function (err, address) {
        if (err) {
            res.send(err);
        }
        res.json(address);
    });
};

exports.deleteAddress = function (req, res) {
    Address.deleteOne({_id: req.params.addressId}, function (err) {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Address deleted!'});
    });
};

