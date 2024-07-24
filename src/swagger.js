const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'E-commerce API',
            version: '1.0.0',
            description: 'An API to perform CRUD operations on products',
            contact: {
                name: 'Ahmet Can ÇAKIR',
                email: 'ahmet71cakir@gmail.com'
            },
            servers: [{
                url:'http://localhost:3000',
                description: 'Development server'
            }]
        },
        tags: [{
            name: 'Products',
            description: 'API for products in the system'
        }],
        components: {
            schemas: {
                Product: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        description: { type: 'string' },
                        price: { type: 'number' },
                        category: { type: 'string' },
                        countInStock: { type: 'number' },
                        imageUrl: { type: 'string' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' }
                    },
                    example: {
                        name: 'Sample name',
                        description: 'Sample description',
                        price: 0,
                        category: 'Sample category',
                        countInStock: 0,
                        imageUrl: 'Sample image URL',
                        createdAt: '2024-07-20T17:32:28.214Z',
                        updatedAt: '2024-07-20T17:32:28.214Z'
                    }
                }
            }
        }
    },
    apis: ['src/routes/*.js']
};

module.exports = swaggerOptions;