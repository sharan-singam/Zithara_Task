const pool = require('../db');

const getCustomers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM customers');
    const customers = result.rows.map(customer => {
      const created_at = new Date(customer.created_at);
      return {
        ...customer,
        date: created_at.toLocaleDateString(),
        time: created_at.toLocaleTimeString()
      };
    });
    res.json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addCustomer = async (req, res) => {
  const { name, age, phone, location } = req.body;
  try {
    await pool.query('INSERT INTO customers (name, age, phone, location) VALUES ($1, $2, $3, $4)', [name, age, phone, location]);
    res.status(201).json({ message: 'Customer added successfully' });
  } catch (error) {
    console.error('Error adding customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getCustomers,
  addCustomer
};
