const jwt = require('jsonwebtoken');
const logger = console;

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader){
    logger.log('[AUTH] ERRO - Token não fornecido');
    return res.status(401).json({ error: 'Token não fornecido' });
  }
  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    logger.log('[AUTH] ERRO - Token INVÁLIDO');
    res.status(401).json({ error: 'Token inválido' });
  }
};

module.exports = authMiddleware;
