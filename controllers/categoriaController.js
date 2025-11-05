const Categoria = require('../models/categoria');

exports.listar = async (req, res) => {
  const categorias = await Categoria.findAll();
  res.json(categorias);
};

exports.criar = async (req, res) => {
  try {
    const categoria = await Categoria.create(req.body);
    res.status(201).json(categoria);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};
