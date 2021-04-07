./node_modules/.bin/json-server --watch ./src-mock-server/mock.db.json --port 3004

# example mock.db.json
# {
#   "error": [
#   ]
# }
#
# support commands
# curl -g -X POST "http://localhost:3004/error" -H 'Content-Type: application/json' -d '{"error": "error4"}'
# curl http://localhost:3004/error
