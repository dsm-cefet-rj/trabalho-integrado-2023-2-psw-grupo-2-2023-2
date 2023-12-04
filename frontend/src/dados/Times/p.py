import pymongo
import json

# Dados dos times
teams_data = [
       {
            "team": {
                "id": 542,
                "name": "Alaves",
                "code": "ALA",
                "country": "Spain",
                "founded": 1921,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/542.png"
            }
        },
        {
            "team": {
                "id": 723,
                "name": "Almeria",
                "code": "ALM",
                "country": "Spain",
                "founded": 1989,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/723.png"
            }
        },
        {
            "team": {
                "id": 531,
                "name": "Athletic Club",
                "code": "BIL",
                "country": "Spain",
                "founded": 1898,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/531.png"
            }
        },
        {
            "team": {
                "id": 530,
                "name": "Atletico Madrid",
                "code": "MAD",
                "country": "Spain",
                "founded": 1903,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/530.png"
            }
        },
        {
            "team": {
                "id": 529,
                "name": "Barcelona",
                "code": "BAR",
                "country": "Spain",
                "founded": 1899,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/529.png"
            }
        },
        {
            "team": {
                "id": 724,
                "name": "Cadiz",
                "code": "CAD",
                "country": "Spain",
                "founded": 1910,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/724.png"
            }
        },
        {
            "team": {
                "id": 538,
                "name": "Celta Vigo",
                "code": "CEL",
                "country": "Spain",
                "founded": 1923,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/538.png"
            },
            "venue": {
                "id": 1467,
                "name": "Abanca-Bala\u00eddos",
                "address": "Avenida de Bala\u00eddos",
                "city": "Vigo",
                "capacity": 31800,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1467.png"
            }
        },
        {
            "team": {
                "id": 546,
                "name": "Getafe",
                "code": "GET",
                "country": "Spain",
                "founded": 1983,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/546.png"
            }
        },
        {
            "team": {
                "id": 547,
                "name": "Girona",
                "code": "GIR",
                "country": "Spain",
                "founded": 1930,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/547.png"
            }
        },
        {
            "team": {
                "id": 715,
                "name": "Granada CF",
                "code": "GRA",
                "country": "Spain",
                "founded": 1931,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/715.png"
            }
        },
        {
            "team": {
                "id": 534,
                "name": "Las Palmas",
                "code": "PAL",
                "country": "Spain",
                "founded": 1949,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/534.png"
            }
        },
        {
            "team": {
                "id": 798,
                "name": "Mallorca",
                "code": "MAL",
                "country": "Spain",
                "founded": 1916,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/798.png"
            }
        },
        {
            "team": {
                "id": 727,
                "name": "Osasuna",
                "code": "OSA",
                "country": "Spain",
                "founded": 1920,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/727.png"
            }
        },
        {
            "team": {
                "id": 728,
                "name": "Rayo Vallecano",
                "code": "RAY",
                "country": "Spain",
                "founded": 1924,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/728.png"
            }
        },
        {
            "team": {
                "id": 543,
                "name": "Real Betis",
                "code": "BET",
                "country": "Spain",
                "founded": 1907,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/543.png"
            }
        },
        {
            "team": {
                "id": 541,
                "name": "Real Madrid",
                "code": "REA",
                "country": "Spain",
                "founded": 1902,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/541.png"
            }
        },
        {
            "team": {
                "id": 548,
                "name": "Real Sociedad",
                "code": "RSO",
                "country": "Spain",
                "founded": 1909,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/548.png"
            }
        },
        {
            "team": {
                "id": 536,
                "name": "Sevilla",
                "code": "SEV",
                "country": "Spain",
                "founded": 1890,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/536.png"
            }
        },
        {
            "team": {
                "id": 532,
                "name": "Valencia",
                "code": "VAL",
                "country": "Spain",
                "founded": 1919,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/532.png"
            }
        },
        {
            "team": {
                "id": 533,
                "name": "Villarreal",
                "code": "VIL",
                "country": "Spain",
                "founded": 1923,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/533.png"
            },
            
    },
]

# Conectando ao servidor MongoDB
client = pymongo.MongoClient('mongodb://localhost:27017/')
db = client['Scoutball']
collection = db['times']  # Nome da coleção no MongoDB

# Inserindo os dados dos times no servidor MongoDB
collection.insert_many(teams_data)

# Verificando se os dados foram inseridos corretamente
cursor = collection.find({})
for document in cursor:
    print(document)





