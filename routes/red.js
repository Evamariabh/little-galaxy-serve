const { Router } = require('express');
const router = Router();

const { getRedes, createRed, getRed, updateRed, deleteRed } = require('../controllers/redes.controller')

router.route('/')
    .get(getRedes)
    .post(createRed)

router.route('/:id')
    .put(updateRed)
    .delete(deleteRed)
    .get(getRed)

module.exports = router;