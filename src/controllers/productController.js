const Product = require('../models/productModel');

const getAllProducts = async (req, res) => {
    try {
        // Get all products from the database using the Product model sort by _id in descending order
        const products = await Product.aggregate([{$sort: {_id: -1}}]);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({message: 'Product not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

const createProduct = async (req, res) => {
    try {
        const fields = req.body;
        const product = new Product({
            name: fields.name,
            description: fields.description,
            price: fields.price,
            category: fields.category,
            countInStock: fields.countInStock,
            imageUrl: fields.imageUrl
        });
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

const updateProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            category,
            countInStock,
            imageUrl
        } = req.body;
        const product = await Product.findById(req.params.id);
        if (product) {
            product.name = name;
            product.description = description;
            product.price = price;
            product.category = category;
            product.countInStock = countInStock;
            product.imageUrl = imageUrl;
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({message: 'Product not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (product) {
            res.json({message: 'Product removed'});
        } else {
            res.status(404).json({message: 'Product not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }

}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};