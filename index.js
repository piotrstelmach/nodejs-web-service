let express=require('express');
let mongoose = require('mongoose');
let EmployeeModel = require('./api/models/EmployeeModel');
let AddressModel = require('./api/models/AddressModel');
var routes= require('./api/routes/EmployeesRoutes');

let app=express();
routes(app);
var port = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost/EmployeeDB',{
    useNewUrlParser: true
});



app.listen(port, function () {
    console.log("Running  on port " + port);
});