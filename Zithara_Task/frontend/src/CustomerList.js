import React, { useState, useEffect } from 'react';
import API from './API';
import Customer from './Customer';

function CustomersList() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await API.getCustomers();
        setCustomers(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredCustomers = customers.filter(
    customer =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCustomers = filteredCustomers.sort((a, b) => {
    const aValue = sortBy === 'date' ? new Date(a.date) : a.time;
    const bValue = sortBy === 'date' ? new Date(b.date) : b.time;
    return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
  });

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = sortedCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = e => {
    setSortBy(e.target.value);
  };

  const handleSortOrderChange = e => {
    setSortOrder(e.target.value);
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by name or location"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select value={sortBy} onChange={handleSortChange}>
          <option value="date">Sort by Date</option>
          <option value="time">Sort by Time</option>
        </select>
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {currentCustomers.map((customer, index) => (
            <Customer key={index} customer={customer} />
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastCustomer >= sortedCustomers.length}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CustomersList;
