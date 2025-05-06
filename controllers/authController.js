const authService = require('../services/authService');
const logger = console;

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await authService.register(name, email, password);
    logger.log(`[REGISTER] Sucesso - Email: ${email}`);
    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    logger.error(`[REGISTER] Erro - Email: ${req.body?.email || 'desconhecido'}, Erro: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    logger.log(`[LOGIN] Sucesso - Email: ${email}`);
    res.status(200).json({ token });
  } catch (error) {
    logger.warn(`[LOGIN] Falha - Email: ${req.body?.email || 'desconhecido'}, Erro: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { register, login };
