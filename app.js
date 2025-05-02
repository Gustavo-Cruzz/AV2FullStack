const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/mongoConfig');

const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', protectedRoutes);
app.use('/api', bookRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
module.exports = app;