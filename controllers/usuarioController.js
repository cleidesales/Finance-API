const Usuario = require('../models/usuario');

exports.listar = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
};

exports.criar = async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};
