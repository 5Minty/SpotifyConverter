#!/bin/bash

client_id=6b6e2db4d7984ece996ab3cba807a937
client_secret=f34151afa39f4c10b933a89e7be957bf

response=$(curl -s https://accounts.spotify.com/api/token \
  -H "Content-Type:application/x-www-form-urlencoded" \
  -H "Authorization: Basic $(echo $client_id:$client_secret | base64 | sed 's/K$/=/')" \
  -d "grant_type=client_credentials")

echo $response | jq .