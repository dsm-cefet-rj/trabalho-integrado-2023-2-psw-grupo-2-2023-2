import json

# Seu JSON original
data= {json}
# Função para obter o nome do time
def get_team_name(team_data):
    return team_data["team"]["name"]

# Ordenar os times pelo nome
data["response"] = sorted(data["response"], key=get_team_name)

# Escrever o JSON ordenado em um novo arquivo
with open("times_ordenados.json", "w") as outfile:
    json.dump(data, outfile, indent=4)

print("Times ordenados e salvos no arquivo 'times_ordenados.json'")
