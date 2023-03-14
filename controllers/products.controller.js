const productCtrl = {};

const Product = require('../models/Product')

productCtrl.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

productCtrl.getProductName = async(req, res) => {
    const { product } = req.body
    
    const prod = await Product.findOne({product});
    res.json(prod);
};

productCtrl.createProduct = async (req, res) => {
    const { product, price, stock, details, etiqueta, estado, date } = req.body
    const newProduct = new Product({
        product,
        price,
        stock,
        details,
        etiqueta,
        estado,
        date
    });
    await newProduct.save();
    res.json({message: 'Product saved'})
};

productCtrl.getProduct = async(req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
};

productCtrl.updateProduct = async (req, res) => {
    const { product, price, stock, details, etiqueta, estado, date } = req.body
    const newProduct = await Product.findByIdAndUpdate(req.params.id, {
        product,
        price,
        stock,
        details,
        etiqueta,
        estado,
        date
    });
    await newProduct.save();
    res.json({message: 'Product Updated'});
};

productCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndRemove(req.params.id);
    res.json({message: 'Product Deleted'});
};


module.exports = productCtrl;


