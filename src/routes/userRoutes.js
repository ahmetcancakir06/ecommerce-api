const express = require('express');
const { register, login } = require('../controllers/userController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Authentication
 *  description: User authentication
 */

/**
 * @swagger
 * /api/users/register:
 *  post:
 *    summary: Register a new user
 *    tags: [Authentication]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/RegisterRequest'
 *    responses:
 *      201:
 *        description: User created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AuthResponse'
 *      400:
 *        description: Bad request (e.g., user already exists)
 *      500:
 *        description: Server error
 */
router.post('/register', register);

/**
 * @swagger
 * /api/users/login:
 *  post:
 *    summary: Login user
 *    tags: [Authentication]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/LoginRequest'
 *    responses:
 *      200:
 *        description: Login successful
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AuthResponse'
 *      400:
 *        description: Invalid credentials (e.g., user does not exist)
 *      500:
 *        description: Server error
 */
router.post('/login', login);

module.exports = router;
