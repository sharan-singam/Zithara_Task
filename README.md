# Customer Management App

Zithara Technologies Round 2 - Task: React and Node JS Application Development. This is a simple customer management app built with React, Node.js, Express and PostgreSQL.

## Features

- Displays customer data in a paginated table
- Search customers by name and location 
- Sort customers by created date and time
- React frontend with Node/Express backend
- PostgreSQL database with dummy seeded data


## Usage

### Env Variables

Create a .env file in then root and add the following

```
DB_HOST = localhost
DB_PORT = 5432
DB_USER = postgres
DB_PASS = admin
DB_NAME = customerdb
```

### Install Dependencies

```
npm install
cd frontend
npm install 
```


## Database Schema

A PostgreSQL database named `customerdb` is used with the following schema:


**Table** - `customers`

| Column | Type |
| ----------------- | -------------------|
| sno (PK) | SERIAL |
| name | VARCHAR(50) |
| age  | INTEGER | 
| phone | VARCHAR(15) |
| location | VARCHAR(50) |
| created_at | TIMESTAMP |


The `created_at` column is split into `date` and `time` in the UI display.

## API Reference

### Get all customers (paginated)

```http
  GET /api/customers
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `int` | **Required**. Page number |
| `limit` | `int` | **Required**. Customers per page (default 20) |

### Search customers

```http
  GET /api/search
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `text`      | `string` | **Required**. Text to search |

## Frontend

The `frontend` directory has the React frontend code. It uses React hooks for state management and Axios to call APIs. 

Some key files:

- `App.js` - Handles routing and layout
- `customers.js` - Customer table component
- `API.js` - Axios API calls

## Backend

The `index.js` has the Express code with routes.

Some key files:

- `routes/index.js` - API route handlers
- `db/index.js` - Database connection and queries
- `utils/paginate.js` - Pagination helper

## License

[MIT](https://choosealicense.com/licenses/mit/)
