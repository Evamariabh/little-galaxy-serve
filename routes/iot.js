const { Router } = require('express');
const router = Router();

const { getIot, createIot } = require('../controllers/iot.controller')

router.route('/')
    .get(getIot)
    .post(createIot)

module.exports = router;