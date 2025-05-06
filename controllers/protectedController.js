const logger = console;

const accessProtected = (req, res) => {
  logger.log(`[PROTECTED] Acesso autorizado - Usuário: ${req.userId}`);
  res.status(200).json({ message: 'Acesso autorizado' });
};

module.exports = { accessProtected };
