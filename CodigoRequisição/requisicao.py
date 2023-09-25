import requests

url = "https://api-football-v1.p.rapidapi.com/v3/players"

querystring = {"league":"61","season":"2023","page":"35"}

headers = {
	"X-RapidAPI-Key": "7230cd40b3msh4c82dec94320fe8p146a87jsnb08449a06425",
	"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

if response.status_code == 200:
    data = response.json()
else:
    print(f"Erro na requisição: {response.status_code}")
    data = None

import json

if data:
    with open("frances35.json", "w") as json_file:
        json.dump(data, json_file, indent=4)
        print("Resposta da API foi salva em api_response.json")