const Transacao = require('../models/transacao');

exports.listar = async (req, res) => {
  const transacoes = await Transacao.findAll();
  res.json(transacoes);
};

exports.criar = async (req, res) => {
  try {
    const transacao = await Transacao.create(req.body);
    res.status(201).json(transacao);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};
