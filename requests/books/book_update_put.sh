curl -X PUT http://localhost:3000/api/books/BOOK_ID_AQUI \
-H "Content-Type: application/json" \
-H "Authorization: Bearer SEU_TOKEN_AQUI" \
-d '{
  "title": "Título Atualizado",
  "author": "Novo Autor",
  "value": 100.00,
  "rating": 8,
  "analysis": "Atualização completa via PUT"
}'
