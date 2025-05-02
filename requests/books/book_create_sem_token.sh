curl -X POST http://localhost:3000/api/books \
-H "Content-Type: application/json" \
-d '{
  "title": "1984",
  "author": "George Orwell",
  "value": 42.50,
  "rating": 9,
  "analysis": "Distopia extremamente atual."
}'
