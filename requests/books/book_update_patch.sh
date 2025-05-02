curl -X PATCH http://localhost:3000/api/books/BOOK_ID_AQUI \
-H "Content-Type: application/json" \
-H "Authorization: Bearer SEU_TOKEN_AQUI" \
-d '{
  "rating": 10,
  "analysis": "Nota ajustada via PATCH"
}'
