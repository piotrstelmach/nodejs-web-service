module.exports = function (app){
    var EmployeesController = require('../controllers/EmployeesController');


    app.route('/employees')
        .get(EmployeesController.listAllEmployees);


};