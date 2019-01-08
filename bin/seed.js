let faker = require('faker');
let Employees = require('../api/models/EmployeeModel');
let Address = require('../api/models/AddressModel');
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/EmployeeDB');

function getAddressesIds() {
   let addressesId = [];
    for (let i = 0; i < 30; i++) {
        addressesId.push(new mongoose.Types.ObjectId);
    }
    return addressesId;
}

let addressesIds = getAddressesIds();

Address.remove({})
    .then(() => {

        let addresses = [];
        for (let i = 0; i < 30; i++) {
            addresses.push({
                _id: addressesIds[i],
                Street: faker.address.streetName(),
                Street_num: faker.random.number(35),
                Country: faker.address.country()
            });
        }
        return Address.create(addresses);
    });

Employees.remove({})
    .then(() => {
        let employees = [];
        for (let i = 0; i < 30; i++) {
            employees.push({
                Name: faker.name.firstName(),
                Last_name: faker.name.lastName(),
                Birth_date: faker.date.past(20),
                Salary: faker.finance.amount(5000, 15000),
                Address_id: addressesIds[i]
            });
        }
        return Employees.create(employees);
    }).then(() => {
    process.exit();
})
    .catch((e) => {
        console.log(e);
        process.exit(1);
    });