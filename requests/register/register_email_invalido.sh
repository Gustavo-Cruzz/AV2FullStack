curl -X POST http://localhost:3000/api/register \
-H "Content-Type: application/json" \
-d '{"name":"Carlos","email":"emailinvalido","password":"senha123"}'
