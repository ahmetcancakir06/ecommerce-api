# E-commerce API

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This is a RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB.

## Features
- User registration and authentication
- Product management
- Shopping cart management
- Order processing
- Payment integration (optional)

## Technologies
- Node.js
- Express
- MongoDB
- Mongoose
- JWT for authentication
- Mocha and Chai for testing
- Swagger for API documentation

## Installation
1. Clone the repository
   ```bash
   git clone https://github.com/ahmetcancakir06/ecommerce-api.git
   cd ecommerce-api

2. Install dependencies
   ```bash
   npm install

3. Set up environment variables
   Create a `.env` file in the root directory and add the following:
   
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret


## Usage
1. Start the server
   ```bash
   npm start

2. The API will be available at `http://localhost:3000`

## API Endpoints
### User
- **POST /api/users/register**: Register a new user
- **POST /api/users/login**: Login a user

### Product
- **POST /api/products**: Add a new product (Admin only)
- **GET /api/products**: Get all products
- **GET /api/products/:id**: Get a product by ID
- **PUT /api/products/:id**: Update a product by ID (Admin only)
- **DELETE /api/products/:id**: Delete a product by ID (Admin only)

### Cart
- **POST /api/cart**: Add a product to cart
- **GET /api/cart**: Get user's cart
- **DELETE /api/cart/:id**: Remove a product from cart

### Order
- **POST /api/orders**: Create a new order
- **GET /api/orders**: Get all orders (Admin only)
- **GET /api/orders/:id**: Get an order by ID
- **PUT /api/orders/:id**: Update order status (Admin only)

## Testing
1. Run the tests
   ```bash
   npm test

## Documentation
API documentation is available at `http://localhost:3000/api-docs`

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.