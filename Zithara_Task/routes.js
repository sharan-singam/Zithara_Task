const { Router } = require('express');
const router = Router();
const { getCustomers, addCustomer } = require('./controllers/customerController');

router.get('/customers', getCustomers); 
router.post('/customers', addCustomer);
module.exports = router;
