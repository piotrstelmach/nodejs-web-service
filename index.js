let express=require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let EmployeeModel = require('./api/models/EmployeeModel');
let AddressModel = require('./api/models/AddressModel');
let employeeRoutes= require('./api/routes/EmployeesRoutes');
let addressesRoutes = require('./api/routes/AddressesRoutes');

let app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
employeeRoutes(app);
addressesRoutes(app);
let port = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost/EmployeeDB',{
    useNewUrlParser: true
});



app.listen(port, function () {
    console.log("Running  on port " + port);
});