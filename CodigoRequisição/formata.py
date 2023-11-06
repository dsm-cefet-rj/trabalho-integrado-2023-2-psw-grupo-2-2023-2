import json
data={
    
}

formatted_results = []

# Verificar se a chave 'response' existe em data
if "response" in data:
    # Loop através dos elementos em "response" no JSON original
    for item in data["response"]:
        # Dicionário para armazenar o resultado formatado
        formatted_result = {
            "player": {
                "id": item["player"]["id"],
                "name": item["player"]["name"],
                "firstname": item["player"]["firstname"],
                "lastname": item["player"]["lastname"],
                "photo": item["player"]["photo"]
            },
            "statistics": [
                {
                    "team": {
                        "id": item["statistics"][0]["team"]["id"],
                        "name": item["statistics"][0]["team"]["name"]
                    },
                    "games": {
                        "appearences": item["statistics"][0]["games"]["appearences"],
                        "position": item["statistics"][0]["games"]["position"],
                        "rating": item["statistics"][0]["games"]["rating"]
                    },
                    "shots": {
                        "total": item["statistics"][0]["shots"]["total"],
                        "on": item["statistics"][0]["shots"]["on"]
                    },
                    "goals": {
                        "total": item["statistics"][0]["goals"]["total"],
                        "assists": item["statistics"][0]["goals"]["assists"]
                    },
                    "passes": {
                        "total": item["statistics"][0]["passes"]["total"],
                        "accuracy": item["statistics"][0]["passes"]["accuracy"]
                    },
                    "duels": {
                        "total": item["statistics"][0]["duels"]["total"],
                        "won": item["statistics"][0]["duels"]["won"]
                    },
                    "dribbles": {
                        "attempts": item["statistics"][0]["dribbles"]["attempts"],
                        "success": item["statistics"][0]["dribbles"]["success"]
                    },
                    "fouls": {
                        "committed": item["statistics"][0]["fouls"]["committed"]
                    },
                    "cards": {
                        "yellow": item["statistics"][0]["cards"]["yellow"],
                        "red": item["statistics"][0]["cards"]["red"]
                    }
                }
            ]
        }
        formatted_results.append(formatted_result)

    # Criar um novo JSON com os resultados formatados
    formatted_json = {
        "formatted_results": formatted_results
    }

    # Salvar o JSON formatado em um novo arquivo
    with open('formatted.json', 'w') as output_file:
        json.dump(formatted_json, output_file, indent=4)

    print("JSON formatado foi salvo em 'formatted.json'")
else:
    print("A chave 'response' não existe no JSON de entrada.")