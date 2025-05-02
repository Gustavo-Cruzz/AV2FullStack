curl -X POST http://localhost:3000/api/books \
-H "Content-Type: application/json" \
-H "Authorization: Bearer SEU_TOKEN_AQUI" \
-d '{
  "title": "",
  "author": "Autor Sem Título",
  "value": -10,
  "rating": 15,
  "analysis": ""
}'