const express = require('express');
const router = express.Router();
const transacaoController = require('../controllers/transacaoController');

router.get('/', transacaoController.listar);
router.post('/', transacaoController.criar);

module.exports = router;
