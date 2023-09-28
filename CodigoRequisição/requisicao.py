import requests

url = "https://api-football-v1.p.rapidapi.com/v3/teams"


querystring = {"league":"61","season":"2023"}

headers = {
	"X-RapidAPI-Key": "b4db6ebd20mshb265f997a47083bp136314jsn44c4a7a2d2e2",
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
    with open("Teste.json", "w") as json_file:
        json.dump(data, json_file, indent=4)
        print("Resposta da API foi salva em api_response.json")



        






