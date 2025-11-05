const express = require('express');
const app = express();
const sequelize = require('./config/database');

const usuarioRoutes = require('./routes/usuarioRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const transacaoRoutes = require('./routes/transacaoRoutes');

app.use(express.json());
app.use('/usuarios', usuarioRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/transacoes', transacaoRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});
