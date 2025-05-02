curl -X POST http://localhost:3000/api/books \
-H "Content-Type: application/json" \
-H "Authorization: Bearer SEU_TOKEN_AQUI" \
-d '{
  "title": "O Senhor dos Anéis",
  "author": "J.R.R. Tolkien",
  "value": 59.90,
  "rating": 10,
  "analysis": "Uma obra-prima da fantasia épica."
}'

