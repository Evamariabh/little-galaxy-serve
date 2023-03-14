const { Router } = require('express');
const router = Router();

const { getProducts, getProductName, createProduct, updateProduct, deleteProduct, getProduct } = require('../controllers/products.controller')

router.route('/')
    .get(getProductName)
    .post(createProduct)

router.route('/:id')
    .put(updateProduct)
    .delete(deleteProduct)
    .get(getProduct)


module.exports = router;