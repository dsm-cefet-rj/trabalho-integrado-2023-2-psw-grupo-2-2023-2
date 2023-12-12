import pymongo
import json
caminho='frontend\src\dados\Times\TimesItalia.json'
# Dados dos times
with open(caminho, 'r') as file:
    data = json.load(file)['response']

# Conectando ao servidor MongoDB
client = pymongo.MongoClient('mongodb+srv://admin:1234@scoutball.mgalr3w.mongodb.net/?retryWrites=true&w=majority')
db = client['test']
collection = db['times']  # Nome da coleção no MongoDB

# Inserindo os dados dos times no servidor MongoDB
collection.insert_many(data)

# Verificando se os dados foram inseridos corretamente
cursor = collection.find({})
for document in cursor:
    print(document)





