module.exports = function (app){
    let EmployeesController = require('../controllers/EmployeesController');


    app.route('/employees')
        .get(EmployeesController.listAllEmployees)
        .post(EmployeesController.createNewEmployee);

    app.route('/employees/:employeeId')
        .get(EmployeesController.listOneEmployee)
        .put(EmployeesController.updateEmployee)
        .delete(EmployeesController.deleteEmployee);
};

