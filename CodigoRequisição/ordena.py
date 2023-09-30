import json

# Seu JSON original
data= {}

def get_team_name(team_data):
    return team_data["team"]["name"]
data["response"] = sorted(data["response"], key=get_team_name)


with open("TimesItalia2.json", "w") as outfile:
    json.dump(data, outfile, indent=4)

print("Times ordenados e salvos no arquivo 'times_ordenados.json'")
