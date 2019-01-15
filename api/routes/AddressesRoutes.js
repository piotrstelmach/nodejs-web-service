module.exports = function(app){
    let addressesController= require('../controllers/AddressesController');

    app.route('/addresses')
        .get(addressesController.listAddresses)
        .post(addressesController.createNewAddress);

    app.route('/addresses/:addressId')
        .get(addressesController.listOneAddress)
        .put(addressesController.updateAddress)
        .delete(addressesController.deleteAddress);
};