import pymongo
import json
caminho='frontend\src\dados\Jogadores\DadosJogadoresItaliano.json'
# Dados dos times
with open(caminho, 'r') as file:
    data = json.load(file)['response']

# Conectando ao servidor MongoDB
client = pymongo.MongoClient('mongodb://localhost:27017')
db = client['Scoutball']
collection = db['jogadores']  # Nome da coleção no MongoDB

# Inserindo os dados dos times no servidor MongoDB
collection.insert_many(data)

# Verificando se os dados foram inseridos corretamente
cursor = collection.find({})
for document in cursor:
    print(document)





