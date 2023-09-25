import requests

url = "https://api-football-v1.p.rapidapi.com/v3/teams"


querystring = {"league":"78","season":"2023"}

headers = {
	"X-RapidAPI-Key": "f9476b42d7mshde65990dd93c162p173969jsnc07b899065cb",
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
    with open("TimesAlemanha.json", "w") as json_file:
        json.dump(data, json_file, indent=4)
        print("Resposta da API foi salva em api_response.json")