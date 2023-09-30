import json

# Seu JSON original
data={
    "get": "teams",
    "parameters": {
        "league": "135",
        "season": "2023"
    },
    "errors": [],
    "results": 20,
    "paging": {
        "current": 1,
        "total": 1
    },
    "response": [
        {
            "team": {
                "id": 489,
                "name": "AC Milan",
                "code": "MIL",
                "country": "Italy",
                "founded": 1899,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/489.png"
            },
            "venue": {
                "id": 907,
                "name": "Stadio Giuseppe Meazza",
                "address": "Via Piccolomini 5",
                "city": "Milano",
                "capacity": 80018,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/907.png"
            }
        },
        {
            "team": {
                "id": 542,
                "name": "Alaves",
                "code": "ALA",
                "country": "Spain",
                "founded": 1921,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/542.png"
            },
            "venue": {
                "id": 1470,
                "name": "Estadio de Mendizorroza",
                "address": "Paseo de Cervantes",
                "city": "Vitoria-Gasteiz",
                "capacity": 19840,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1470.png"
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
            },
            "venue": {
                "id": 19216,
                "name": "Power Horse Stadium \u2013 Estadio de los Juegos Mediterr\u00e1neos",
                "address": "Calle de Belladona",
                "city": "Almer\u00eda",
                "capacity": 21350,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/19216.png"
            }
        },
        {
            "team": {
                "id": 125,
                "name": "America Mineiro",
                "code": "AME",
                "country": "Brazil",
                "founded": 1912,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/125.png"
            },
            "venue": {
                "id": 206,
                "name": "Est\u00e1dio Raimundo Sampaio",
                "address": "Avenida Ism\u00eania Tunes, Bairro Horto",
                "city": "Belo Horizonte, Minas Gerais",
                "capacity": 23018,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/206.png"
            }
        },
        {
            "team": {
                "id": 42,
                "name": "Arsenal",
                "code": "ARS",
                "country": "England",
                "founded": 1886,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/42.png"
            },
            "venue": {
                "id": 494,
                "name": "Emirates Stadium",
                "address": "Queensland Road",
                "city": "London",
                "capacity": 60383,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/494.png"
            }
        },
        {
            "team": {
                "id": 497,
                "name": "AS Roma",
                "code": "ROM",
                "country": "Italy",
                "founded": 1927,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/497.png"
            },
            "venue": {
                "id": 910,
                "name": "Stadio Olimpico",
                "address": "Viale dei Gladiatori, 2 / Via del Foro Italico",
                "city": "Roma",
                "capacity": 68530,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/910.png"
            }
        },
        {
            "team": {
                "id": 66,
                "name": "Aston Villa",
                "code": "AST",
                "country": "England",
                "founded": 1874,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/66.png"
            },
            "venue": {
                "id": 495,
                "name": "Villa Park",
                "address": "Trinity Road",
                "city": "Birmingham",
                "capacity": 42788,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/495.png"
            }
        },
        {
            "team": {
                "id": 499,
                "name": "Atalanta",
                "code": "ATA",
                "country": "Italy",
                "founded": 1907,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/499.png"
            },
            "venue": {
                "id": 879,
                "name": "Gewiss Stadium",
                "address": "Viale Giulio Cesare 18",
                "city": "Bergamo",
                "capacity": 21300,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/879.png"
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
            },
            "venue": {
                "id": 1460,
                "name": "San Mam\u00e9s Barria",
                "address": "Rafael Moreno Pitxitxi Kalea",
                "city": "Bilbao",
                "capacity": 53289,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1460.png"
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
            },
            "venue": {
                "id": 19217,
                "name": "Est\u00e1dio C\u00edvitas Metropolitano",
                "address": "Rosas",
                "city": "Madrid",
                "capacity": 70460,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/19217.png"
            }
        },
        {
            "team": {
                "id": 502,
                "name": "Fiorentina",
                "code": "FIO",
                "country": "Italy",
                "founded": 1926,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/502.png"
            },
            "venue": {
                "id": 902,
                "name": "Stadio Artemio Franchi",
                "address": "Viale Manfredo Fanti 14",
                "city": "Firenze",
                "capacity": 43147,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/902.png"
            }
        },
        
        {
            "team": {
                "id": 1062,
                "name": "Atletico-MG",
                "code": "ATL",
                "country": "Brazil",
                "founded": 1908,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/1062.png"
            },
            "venue": {
                "id": 206,
                "name": "Est\u00e1dio Raimundo Sampaio",
                "address": "Avenida Ism\u00eania Tunes, Bairro Horto",
                "city": "Belo Horizonte, Minas Gerais",
                "capacity": 23018,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/206.png"
            }
        },
        {
            "team": {
                "id": 134,
                "name": "Atletico Paranaense",
                "code": "ATL",
                "country": "Brazil",
                "founded": 1924,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/134.png"
            },
            "venue": {
                "id": 10493,
                "name": "Arena da Baixada",
                "address": "Rua Buenos Aires 1260, \u00c1gua Verde",
                "city": "Curitiba, Paran\u00e1",
                "capacity": 43981,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/10493.png"
            }
        },
        {
            "team": {
                "id": 500,
                "name": "Bologna",
                "code": "BOL",
                "country": "Italy",
                "founded": 1909,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/500.png"
            },
            "venue": {
                "id": 881,
                "name": "Stadio Renato Dall'Ara",
                "address": "Via Andrea Costa, 174",
                "city": "Bologna",
                "capacity": 39279,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/881.png"
            }
        },
        {
            "team": {
                "id": 487,
                "name": "Lazio",
                "code": "LAZ",
                "country": "Italy",
                "founded": 1900,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/487.png"
            },
            "venue": {
                "id": 910,
                "name": "Stadio Olimpico",
                "address": "Viale dei Gladiatori, 2 / Via del Foro Italico",
                "city": "Roma",
                "capacity": 68530,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/910.png"
            }
        },
        {
            "team": {
                "id": 488,
                "name": "Sassuolo",
                "code": "SAS",
                "country": "Italy",
                "founded": 1922,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/488.png"
            },
            "venue": {
                "id": 935,
                "name": "MAPEI Stadium - Citt\u00e0 del Tricolore",
                "address": "Piazza Azzuri d&apos;Italia, 1",
                "city": "Reggio Emilia",
                "capacity": 23717,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/935.png"
            }
        },
       
        {
            "team": {
                "id": 490,
                "name": "Cagliari",
                "code": "CAG",
                "country": "Italy",
                "founded": 1920,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/490.png"
            },
            "venue": {
                "id": 12275,
                "name": "Unipol Domus",
                "address": "Via Raimondo Carta Raspi",
                "city": "Cagliari",
                "capacity": 16416,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/12275.png"
            }
        },
        {
            "team": {
                "id": 492,
                "name": "Napoli",
                "code": "NAP",
                "country": "Italy",
                "founded": 1904,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/492.png"
            },
            "venue": {
                "id": 11904,
                "name": "Stadio Diego Armando Maradona",
                "address": "Pizzale Vincenzo Tecchio",
                "city": "Napoli",
                "capacity": 60240,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/11904.png"
            }
        },
        {
            "team": {
                "id": 494,
                "name": "Udinese",
                "code": "UDI",
                "country": "Italy",
                "founded": 1896,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/494.png"
            },
            "venue": {
                "id": 20299,
                "name": "Udinese Arena",
                "address": "Piazza le Repubblica Argentina, 3",
                "city": "Udine",
                "capacity": 25952,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/20299.png"
            }
        },
        {
            "team": {
                "id": 495,
                "name": "Genoa",
                "code": "GEN",
                "country": "Italy",
                "founded": 1893,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/495.png"
            },
            "venue": {
                "id": 905,
                "name": "Stadio Comunale Luigi Ferraris",
                "address": "Via Giovanni De Pr\u00e0, 1",
                "city": "Genova",
                "capacity": 36703,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/905.png"
            }
        },
        {
            "team": {
                "id": 496,
                "name": "Juventus",
                "code": "JUV",
                "country": "Italy",
                "founded": 1897,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/496.png"
            },
            "venue": {
                "id": 909,
                "name": "Allianz Stadium",
                "address": "Strada Comunale di Altessano 131",
                "city": "Torino",
                "capacity": 45666,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/909.png"
            }
        },
       
       
       
       
        {
            "team": {
                "id": 503,
                "name": "Torino",
                "code": "TOR",
                "country": "Italy",
                "founded": 1906,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/503.png"
            },
            "venue": {
                "id": 943,
                "name": "Stadio Olimpico Grande Torino",
                "address": "Corso Sebastopoli 123, Santa Rita",
                "city": "Torino",
                "capacity": 27958,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/943.png"
            }
        },
        {
            "team": {
                "id": 504,
                "name": "Verona",
                "code": "VER",
                "country": "Italy",
                "founded": 1903,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/504.png"
            },
            "venue": {
                "id": 890,
                "name": "Stadio Marc'Antonio Bentegodi",
                "address": "Piazzale Olimpia",
                "city": "Verona",
                "capacity": 39211,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/890.png"
            }
        },
        {
            "team": {
                "id": 505,
                "name": "Inter",
                "code": "INT",
                "country": "Italy",
                "founded": 1908,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/505.png"
            },
            "venue": {
                "id": 907,
                "name": "Stadio Giuseppe Meazza",
                "address": "Via Piccolomini 5",
                "city": "Milano",
                "capacity": 80018,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/907.png"
            }
        },
        {
            "team": {
                "id": 511,
                "name": "Empoli",
                "code": "EMP",
                "country": "Italy",
                "founded": 1920,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/511.png"
            },
            "venue": {
                "id": 20109,
                "name": "Stadio Carlo Castellani \u2013 Computer Gross Arena",
                "address": "Viale delle Olimpiadi",
                "city": "Empoli",
                "capacity": 16284,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/20109.png"
            }
        },
        {
            "team": {
                "id": 512,
                "name": "Frosinone",
                "code": "FRO",
                "country": "Italy",
                "founded": 1928,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/512.png"
            },
            "venue": {
                "id": 904,
                "name": "Stadio Benito Stirpe",
                "address": "Viale Olimpia",
                "city": "Frosinone",
                "capacity": 16310,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/904.png"
            }
        },
        {
            "team": {
                "id": 514,
                "name": "Salernitana",
                "code": "SAL",
                "country": "Italy",
                "founded": 2011,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/514.png"
            },
            "venue": {
                "id": 933,
                "name": "Stadio Arechi",
                "address": "Via Salvador Allende",
                "city": "Salerno",
                "capacity": 37245,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/933.png"
            }
        },
        {
            "team": {
                "id": 867,
                "name": "Lecce",
                "code": "LEC",
                "country": "Italy",
                "founded": 1908,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/867.png"
            },
            "venue": {
                "id": 911,
                "name": "Stadio Comunale Via del Mare",
                "address": "Viale dello Stadio",
                "city": "Lecce",
                "capacity": 33876,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/911.png"
            }
        },
        {
            "team": {
                "id": 1579,
                "name": "Monza",
                "code": "MON",
                "country": "Italy",
                "founded": 1912,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/1579.png"
            },
            "venue": {
                "id": 12086,
                "name": "U-Power Stadium",
                "address": "Via Franco Tognini",
                "city": "Monza",
                "capacity": 18568,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/12086.png"
            }
        },
 
        {
            "team": {
                "id": 33,
                "name": "Manchester United",
                "code": "MUN",
                "country": "England",
                "founded": 1878,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/33.png"
            },
            "venue": {
                "id": 556,
                "name": "Old Trafford",
                "address": "Sir Matt Busby Way",
                "city": "Manchester",
                "capacity": 76212,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/556.png"
            }
        },
        {
            "team": {
                "id": 34,
                "name": "Newcastle",
                "code": "NEW",
                "country": "England",
                "founded": 1892,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/34.png"
            },
            "venue": {
                "id": 562,
                "name": "St. James' Park",
                "address": "St. James&apos; Street",
                "city": "Newcastle upon Tyne",
                "capacity": 52758,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/562.png"
            }
        },
        {
            "team": {
                "id": 35,
                "name": "Bournemouth",
                "code": "BOU",
                "country": "England",
                "founded": 1899,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/35.png"
            },
            "venue": {
                "id": 504,
                "name": "Vitality Stadium",
                "address": "Dean Court, Kings Park",
                "city": "Bournemouth, Dorset",
                "capacity": 12000,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/504.png"
            }
        },
        {
            "team": {
                "id": 36,
                "name": "Fulham",
                "code": "FUL",
                "country": "England",
                "founded": 1879,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/36.png"
            },
            "venue": {
                "id": 535,
                "name": "Craven Cottage",
                "address": "Stevenage Road",
                "city": "London",
                "capacity": 25700,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/535.png"
            }
        },
        {
            "team": {
                "id": 39,
                "name": "Wolves",
                "code": "WOL",
                "country": "England",
                "founded": 1877,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/39.png"
            },
            "venue": {
                "id": 600,
                "name": "Molineux Stadium",
                "address": "Waterloo Road",
                "city": "Wolverhampton, West Midlands",
                "capacity": 34624,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/600.png"
            }
        },
        {
            "team": {
                "id": 40,
                "name": "Liverpool",
                "code": "LIV",
                "country": "England",
                "founded": 1892,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/40.png"
            },
            "venue": {
                "id": 550,
                "name": "Anfield",
                "address": "Anfield Road",
                "city": "Liverpool",
                "capacity": 55212,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/550.png"
            }
        },
        
        {
            "team": {
                "id": 44,
                "name": "Burnley",
                "code": "BUR",
                "country": "England",
                "founded": 1882,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/44.png"
            },
            "venue": {
                "id": 512,
                "name": "Turf Moor",
                "address": "Harry Potts Way",
                "city": "Burnley",
                "capacity": 22546,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/512.png"
            }
        },
        {
            "team": {
                "id": 45,
                "name": "Everton",
                "code": "EVE",
                "country": "England",
                "founded": 1878,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/45.png"
            },
            "venue": {
                "id": 8560,
                "name": "Goodison Park",
                "address": "Goodison Road",
                "city": "Liverpool",
                "capacity": 40569,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/8560.png"
            }
        },
        {
            "team": {
                "id": 47,
                "name": "Tottenham",
                "code": "TOT",
                "country": "England",
                "founded": 1882,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/47.png"
            },
            "venue": {
                "id": 593,
                "name": "Tottenham Hotspur Stadium",
                "address": "Bill Nicholson Way, 748 High Road",
                "city": "London",
                "capacity": 62850,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/593.png"
            }
        },
        {
            "team": {
                "id": 48,
                "name": "West Ham",
                "code": "WES",
                "country": "England",
                "founded": 1895,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/48.png"
            },
            "venue": {
                "id": 598,
                "name": "London Stadium",
                "address": "Marshgate Lane, Stratford",
                "city": "London",
                "capacity": 62500,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/598.png"
            }
        },
        {
            "team": {
                "id": 49,
                "name": "Chelsea",
                "code": "CHE",
                "country": "England",
                "founded": 1905,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/49.png"
            },
            "venue": {
                "id": 519,
                "name": "Stamford Bridge",
                "address": "Fulham Road",
                "city": "London",
                "capacity": 41841,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/519.png"
            }
        },
        {
            "team": {
                "id": 50,
                "name": "Manchester City",
                "code": "MAC",
                "country": "England",
                "founded": 1880,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/50.png"
            },
            "venue": {
                "id": 555,
                "name": "Etihad Stadium",
                "address": "Rowsley Street",
                "city": "Manchester",
                "capacity": 55097,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/555.png"
            }
        },
        {
            "team": {
                "id": 51,
                "name": "Brighton",
                "code": "BRI",
                "country": "England",
                "founded": 1901,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/51.png"
            },
            "venue": {
                "id": 508,
                "name": "The American Express Community Stadium",
                "address": "Village Way",
                "city": "Falmer, East Sussex",
                "capacity": 31872,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/508.png"
            }
        },
        {
            "team": {
                "id": 52,
                "name": "Crystal Palace",
                "code": "CRY",
                "country": "England",
                "founded": 1905,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/52.png"
            },
            "venue": {
                "id": 525,
                "name": "Selhurst Park",
                "address": "Holmesdale Road",
                "city": "London",
                "capacity": 26309,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/525.png"
            }
        },
        {
            "team": {
                "id": 55,
                "name": "Brentford",
                "code": "BRE",
                "country": "England",
                "founded": 1889,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/55.png"
            },
            "venue": {
                "id": 10503,
                "name": "Gtech Community Stadium",
                "address": "166 Lionel Rd N, Brentford",
                "city": "Brentford, Middlesex",
                "capacity": 17250,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/10503.png"
            }
        },
        {
            "team": {
                "id": 62,
                "name": "Sheffield Utd",
                "code": "SHE",
                "country": "England",
                "founded": 1889,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/62.png"
            },
            "venue": {
                "id": 581,
                "name": "Bramall Lane",
                "address": "Bramall Lane",
                "city": "Sheffield",
                "capacity": 32702,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/581.png"
            }
        },
        {
            "team": {
                "id": 65,
                "name": "Nottingham Forest",
                "code": "NOT",
                "country": "England",
                "founded": 1865,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/65.png"
            },
            "venue": {
                "id": 566,
                "name": "The City Ground",
                "address": "Pavilion Road",
                "city": "Nottingham, Nottinghamshire",
                "capacity": 30576,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/566.png"
            }
        },
        
        {
            "team": {
                "id": 1359,
                "name": "Luton",
                "code": "LUT",
                "country": "England",
                "founded": 1885,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/1359.png"
            },
            "venue": {
                "id": 551,
                "name": "Kenilworth Road",
                "address": "1 Maple Road",
                "city": "Luton, Bedfordshire",
                "capacity": 11000,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/551.png"
            }
        },
  
        {
            "team": {
                "id": 79,
                "name": "Lille",
                "code": "LIL",
                "country": "France",
                "founded": 1944,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/79.png"
            },
            "venue": {
                "id": 19207,
                "name": "Decathlon Arena \u2013 Stade Pierre-Mauroy",
                "address": "261, Boulevard de Tournai, l&apos;H\u00f4tel de Ville",
                "city": "Villeneuve d&apos;Ascq",
                "capacity": 50083,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/19207.png"
            }
        },
        {
            "team": {
                "id": 80,
                "name": "Lyon",
                "code": "LYO",
                "country": "France",
                "founded": 1950,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/80.png"
            },
            "venue": {
                "id": 666,
                "name": "Groupama Stadium",
                "address": "Chemin du Montout",
                "city": "D\u00e9cines-Charpieu",
                "capacity": 61556,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/666.png"
            }
        },
        {
            "team": {
                "id": 81,
                "name": "Marseille",
                "code": "MAR",
                "country": "France",
                "founded": 1899,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/81.png"
            },
            "venue": {
                "id": 12678,
                "name": "Stade Orange V\u00e9lodrome",
                "address": "3, boulevard Michelet",
                "city": "Marseille",
                "capacity": 67394,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/12678.png"
            }
        },
        {
            "team": {
                "id": 82,
                "name": "Montpellier",
                "code": "MON",
                "country": "France",
                "founded": 1974,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/82.png"
            },
            "venue": {
                "id": 20107,
                "name": "Stade de la Mosson-Mondial 98",
                "address": "Avenue de Heidelberg",
                "city": "Montpellier",
                "capacity": 32939,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/20107.png"
            }
        },
        {
            "team": {
                "id": 83,
                "name": "Nantes",
                "code": "NAN",
                "country": "France",
                "founded": 1943,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/83.png"
            },
            "venue": {
                "id": 662,
                "name": "Stade de la Beaujoire - Louis Fonteneau",
                "address": "5, boulevard de la Beaujoire",
                "city": "Nantes",
                "capacity": 38285,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/662.png"
            }
        },
        {
            "team": {
                "id": 84,
                "name": "Nice",
                "code": "NIC",
                "country": "France",
                "founded": 1904,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/84.png"
            },
            "venue": {
                "id": 663,
                "name": "Allianz Riviera",
                "address": "Boulevard des Jardiniers",
                "city": "Nice",
                "capacity": 35624,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/663.png"
            }
        },
        {
            "team": {
                "id": 85,
                "name": "Paris Saint Germain",
                "code": "PAR",
                "country": "France",
                "founded": 1970,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/85.png"
            },
            "venue": {
                "id": 671,
                "name": "Parc des Princes",
                "address": "24, rue du Commandant Guilbaud",
                "city": "Paris",
                "capacity": 47929,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/671.png"
            }
        },
        {
            "team": {
                "id": 91,
                "name": "Monaco",
                "code": "MON",
                "country": "France",
                "founded": 1919,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/91.png"
            },
            "venue": {
                "id": 659,
                "name": "Stade Louis II",
                "address": "7, avenue des Castelans",
                "city": "Monaco",
                "capacity": 18523,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/659.png"
            }
        },
        {
            "team": {
                "id": 93,
                "name": "Reims",
                "code": "REI",
                "country": "France",
                "founded": 1909,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/93.png"
            },
            "venue": {
                "id": 674,
                "name": "Stade Auguste-Delaune II",
                "address": "33, Chauss\u00e9e Bocquaine",
                "city": "Reims",
                "capacity": 21684,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/674.png"
            }
        },
        {
            "team": {
                "id": 94,
                "name": "Rennes",
                "code": "REN",
                "country": "France",
                "founded": 1901,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/94.png"
            },
            "venue": {
                "id": 680,
                "name": "Roazhon Park",
                "address": "111, route de Lorient",
                "city": "Rennes",
                "capacity": 31127,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/680.png"
            }
        },
        {
            "team": {
                "id": 95,
                "name": "Strasbourg",
                "code": "STR",
                "country": "France",
                "founded": 1906,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/95.png"
            },
            "venue": {
                "id": 681,
                "name": "Stade de la Meinau",
                "address": "12, rue de l&apos;Extenwoerth",
                "city": "Strasbourg",
                "capacity": 26109,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/681.png"
            }
        },
        {
            "team": {
                "id": 96,
                "name": "Toulouse",
                "code": "TOU",
                "country": "France",
                "founded": 1937,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/96.png"
            },
            "venue": {
                "id": 682,
                "name": "Stadium de Toulouse",
                "address": "1, all\u00e9e Gabriel Bi\u00e8n\u00e9s",
                "city": "Toulouse",
                "capacity": 33150,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/682.png"
            }
        },
        {
            "team": {
                "id": 97,
                "name": "Lorient",
                "code": "LOR",
                "country": "France",
                "founded": 1926,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/97.png"
            },
            "venue": {
                "id": 656,
                "name": "Stade Yves Allainmat - Le Moustoir",
                "address": "11, rue Jean Le Coutaller",
                "city": "Lorient",
                "capacity": 18970,
                "surface": "artificial turf",
                "image": "https://media-4.api-sports.io/football/venues/656.png"
            }
        },
        {
            "team": {
                "id": 99,
                "name": "Clermont Foot",
                "code": "CLE",
                "country": "France",
                "founded": 1990,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/99.png"
            },
            "venue": {
                "id": 644,
                "name": "Stade Gabriel Montpied",
                "address": "Rue Adrien-Mabut",
                "city": "Clermont-Ferrand",
                "capacity": 13576,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/644.png"
            }
        },
        {
            "team": {
                "id": 106,
                "name": "Stade Brestois 29",
                "code": "BRE",
                "country": "France",
                "founded": 1950,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/106.png"
            },
            "venue": {
                "id": 641,
                "name": "Stade Francis-Le Bl\u00e9",
                "address": "26, rue de Quimper",
                "city": "Brest",
                "capacity": 15931,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/641.png"
            }
        },
        {
            "team": {
                "id": 111,
                "name": "LE Havre",
                "code": "HAV",
                "country": "France",
                "founded": 1872,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/111.png"
            },
            "venue": {
                "id": 652,
                "name": "Stade Oc\u00e9ane",
                "address": "Boulevard de L\u00e9ningrad",
                "city": "Le Havre",
                "capacity": 25178,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/652.png"
            }
        },
        {
            "team": {
                "id": 112,
                "name": "Metz",
                "code": "MET",
                "country": "France",
                "founded": 1932,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/112.png"
            },
            "venue": {
                "id": 658,
                "name": "Stade Saint-Symphorien",
                "address": "3, all\u00e9e Saint-Symphorien",
                "city": "Longeville-l\u00e8s-Metz",
                "capacity": 30000,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/658.png"
            }
        },
        {
            "team": {
                "id": 116,
                "name": "Lens",
                "code": "LEN",
                "country": "France",
                "founded": 1906,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/116.png"
            },
            "venue": {
                "id": 654,
                "name": "Stade Bollaert-Delelis",
                "address": "83, rue Maurice-Carton",
                "city": "Lens",
                "capacity": 41233,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/654.png"
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
            },
            "venue": {
                "id": 19939,
                "name": "Estadi Ol\u00edmpic Llu\u00eds Companys",
                "address": "Carrer de l&apos;Estadi",
                "city": "Barcelona",
                "capacity": 55926,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/19939.png"
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
            },
            "venue": {
                "id": 1497,
                "name": "Estadio de Mestalla",
                "address": "Avenida de Suecia",
                "city": "Valencia",
                "capacity": 55000,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1497.png"
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
            "venue": {
                "id": 1498,
                "name": "Estadio de la Cer\u00e1mica",
                "address": "Plaza Labrador",
                "city": "Villarreal",
                "capacity": 24500,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1498.png"
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
            },
            "venue": {
                "id": 1481,
                "name": "Estadio de Gran Canaria",
                "address": "Avenida P\u00edo XII 29",
                "city": "Las Palmas de Gran Canaria",
                "capacity": 32392,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1481.png"
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
            },
            "venue": {
                "id": 1494,
                "name": "Estadio Ram\u00f3n S\u00e1nchez Pizju\u00e1n",
                "address": "Avenida de Eduardo Dato",
                "city": "Sevilla",
                "capacity": 48649,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1494.png"
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
                "id": 541,
                "name": "Real Madrid",
                "code": "REA",
                "country": "Spain",
                "founded": 1902,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/541.png"
            },
            "venue": {
                "id": 1456,
                "name": "Estadio Santiago Bernab\u00e9u",
                "address": "Avenida de Concha Espina 1, Chamart\u00edn",
                "city": "Madrid",
                "capacity": 85454,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1456.png"
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
            },
            "venue": {
                "id": 1489,
                "name": "Estadio Benito Villamar\u00edn",
                "address": "Avenida de Heli\u00f3polis",
                "city": "Sevilla",
                "capacity": 60721,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1489.png"
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
            },
            "venue": {
                "id": 1476,
                "name": "Coliseum Alfonso P\u00e9rez",
                "address": "Avenida de Teresa de Calcuta",
                "city": "Getafe",
                "capacity": 17393,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1476.png"
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
            },
            "venue": {
                "id": 1478,
                "name": "Estadi Municipal de Montilivi",
                "address": "Avenida Montlivi 141",
                "city": "Girona",
                "capacity": 14500,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1478.png"
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
            },
            "venue": {
                "id": 1491,
                "name": "Reale Arena",
                "address": "Paseo de Anoeta 1",
                "city": "Donostia-San Sebasti\u00e1n",
                "capacity": 39500,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1491.png"
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
            },
            "venue": {
                "id": 1479,
                "name": "Estadio Nuevo Los C\u00e1rmenes",
                "address": "Calle Pintor Manuel Maldonado",
                "city": "Granada",
                "capacity": 23156,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1479.png"
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
            },
            "venue": {
                "id": 11915,
                "name": "Estadio Nuevo Mirandilla",
                "address": "Plaza de Madrid",
                "city": "C\u00e1diz",
                "capacity": 22000,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/11915.png"
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
            },
            "venue": {
                "id": 1486,
                "name": "Estadio El Sadar",
                "address": "Carretera El Sadar",
                "city": "Iru\u00f1ea",
                "capacity": 23576,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1486.png"
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
            },
            "venue": {
                "id": 1488,
                "name": "Estadio de Vallecas",
                "address": "Calle Payaso Fof\u00f3",
                "city": "Madrid",
                "capacity": 15500,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/1488.png"
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
            },
            "venue": {
                "id": 19940,
                "name": "Estadi Mallorca Son Moix",
                "address": "Cam\u00ed dels Reis",
                "city": "Palma de Mallorca",
                "capacity": 23142,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/19940.png"
            }
        },
   
        {
            "team": {
                "id": 118,
                "name": "Bahia",
                "code": "BAH",
                "country": "Brazil",
                "founded": 1931,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/118.png"
            },
            "venue": {
                "id": 216,
                "name": "Arena Fonte Nova",
                "address": "Rua Lions Club, Nazar\u00e9",
                "city": "Salvador, Bahia",
                "capacity": 56500,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/216.png"
            }
        },
        {
            "team": {
                "id": 119,
                "name": "Internacional",
                "code": "INT",
                "country": "Brazil",
                "founded": 1909,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/119.png"
            },
            "venue": {
                "id": 244,
                "name": "Est\u00e1dio Jos\u00e9 Pinheiro Borda",
                "address": "Avenida Padre Cacique 891, Bairro Menino Deus",
                "city": "Porto Alegre, Rio Grande do Sul",
                "capacity": 50128,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/244.png"
            }
        },
        {
            "team": {
                "id": 120,
                "name": "Botafogo",
                "code": "BOT",
                "country": "Brazil",
                "founded": 1904,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/120.png"
            },
            "venue": {
                "id": 218,
                "name": "Est\u00e1dio Nilton Santos",
                "address": "Rua Arquias Cordeiro, Engenho de Dentro",
                "city": "Rio de Janeiro",
                "capacity": 46931,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/218.png"
            }
        },
        {
            "team": {
                "id": 121,
                "name": "Palmeiras",
                "code": "PAL",
                "country": "Brazil",
                "founded": 1914,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/121.png"
            },
            "venue": {
                "id": 258,
                "name": "Allianz Parque",
                "address": "Rua Turia\u00e7u 1840, Perdizes",
                "city": "S\u00e3o Paulo, S\u00e3o Paulo",
                "capacity": 43713,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/258.png"
            }
        },
        {
            "team": {
                "id": 124,
                "name": "Fluminense",
                "code": "FLU",
                "country": "Brazil",
                "founded": 1902,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/124.png"
            },
            "venue": {
                "id": 204,
                "name": "Estadio Jornalista M\u00e1rio Filho (Maracan\u00e3)",
                "address": "Rua Professor Eurico Rabelo, Maracan\u00e3",
                "city": "Rio de Janeiro, Rio de Janeiro",
                "capacity": 78838,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/204.png"
            }
        },
        
        {
            "team": {
                "id": 126,
                "name": "Sao Paulo",
                "code": "PAU",
                "country": "Brazil",
                "founded": 1930,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/126.png"
            },
            "venue": {
                "id": 269,
                "name": "Est\u00e1dio C\u00edcero Pompeu de Toledo (Morumbi)",
                "address": "Praca Roberto Gomes Pedrosa 1, Morumbi",
                "city": "S\u00e3o Paulo, S\u00e3o Paulo",
                "capacity": 66795,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/269.png"
            }
        },
        {
            "team": {
                "id": 127,
                "name": "Flamengo",
                "code": "FLA",
                "country": "Brazil",
                "founded": 1895,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/127.png"
            },
            "venue": {
                "id": 204,
                "name": "Estadio Jornalista M\u00e1rio Filho (Maracan\u00e3)",
                "address": "Rua Professor Eurico Rabelo, Maracan\u00e3",
                "city": "Rio de Janeiro, Rio de Janeiro",
                "capacity": 78838,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/204.png"
            }
        },
        {
            "team": {
                "id": 128,
                "name": "Santos",
                "code": "SAN",
                "country": "Brazil",
                "founded": 1912,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/128.png"
            },
            "venue": {
                "id": 10494,
                "name": "Est\u00e1dio Urbano Caldeira",
                "address": "Rue Princesa Isabel 77, Vila Belmiro",
                "city": "Santos, S\u00e3o Paulo",
                "capacity": 21256,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/10494.png"
            }
        },
        {
            "team": {
                "id": 130,
                "name": "Gremio",
                "code": "GRE",
                "country": "Brazil",
                "founded": 1903,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/130.png"
            },
            "venue": {
                "id": 241,
                "name": "Arena do Gr\u00eamio",
                "address": "Bairro Humait\u00e1",
                "city": "Porto Alegre, Rio Grande do Sul",
                "capacity": 60540,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/241.png"
            }
        },
        {
            "team": {
                "id": 131,
                "name": "Corinthians",
                "code": "COR",
                "country": "Brazil",
                "founded": 1910,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/131.png"
            },
            "venue": {
                "id": 11531,
                "name": "Neo Qu\u00edmica Arena",
                "address": "Avenida Miguel In\u00e1cio Curi, 111, Vila Carmosina, Itaquera",
                "city": "S\u00e3o Paulo, S\u00e3o Paulo",
                "capacity": 49205,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/11531.png"
            }
        },
        {
            "team": {
                "id": 133,
                "name": "Vasco DA Gama",
                "code": "VAS",
                "country": "Brazil",
                "founded": 1898,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/133.png"
            },
            "venue": {
                "id": 19377,
                "name": "Est\u00e1dio S\u00e3o Janu\u00e1rio",
                "address": "Rua Gal Alm\u00e9rio de Moura 131, Bairro Vasco da Gama",
                "city": "Rio de Janeiro, Rio de Janeiro",
                "capacity": 24584,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/19377.png"
            }
        },
       
        {
            "team": {
                "id": 135,
                "name": "Cruzeiro",
                "code": "CRU",
                "country": "Brazil",
                "founded": 1921,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/135.png"
            },
            "venue": {
                "id": 234,
                "name": "Est\u00e1dio Governador Magalh\u00e3es Pinto",
                "address": "Avenida Antonio Abrah\u00e3o Car\u00e3 1001, Pampulhas",
                "city": "Belo Horizonte, Minas Gerais",
                "capacity": 62170,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/234.png"
            }
        },
        {
            "team": {
                "id": 147,
                "name": "Coritiba",
                "code": "COR",
                "country": "Brazil",
                "founded": 1909,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/147.png"
            },
            "venue": {
                "id": 230,
                "name": "Est\u00e1dio Major Ant\u00f4nio Couto Pereira",
                "address": "Rua Ubaldino do Amaral 37, Bairro Alto da Gl\u00f3ria",
                "city": "Curitiba, Paran\u00e1",
                "capacity": 45563,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/230.png"
            }
        },
        {
            "team": {
                "id": 151,
                "name": "Goias",
                "code": "GOI",
                "country": "Brazil",
                "founded": 1943,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/151.png"
            },
            "venue": {
                "id": 240,
                "name": "Est\u00e1dio de Hail\u00e9 Pinheiro",
                "address": "Avenida Edmundo Pinheiro de Abreu 721, Setor Bela Vista",
                "city": "Goi\u00e2nia, Goi\u00e1s",
                "capacity": 14525,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/240.png"
            }
        },
        {
            "team": {
                "id": 154,
                "name": "Fortaleza EC",
                "code": "FOR",
                "country": "Brazil",
                "founded": 1918,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/154.png"
            },
            "venue": {
                "id": 225,
                "name": "Est\u00e1dio Governador Pl\u00e1cido Aderaldo Castelo",
                "address": "Avenida Alberto Craveiro, Passar\u00e9",
                "city": "Fortaleza, Cear\u00e1",
                "capacity": 63903,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/225.png"
            }
        },
        {
            "team": {
                "id": 794,
                "name": "RB Bragantino",
                "code": "BRA",
                "country": "Brazil",
                "founded": 1928,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/794.png"
            },
            "venue": {
                "id": 220,
                "name": "Est\u00e1dio Nabi Abi Chedid",
                "address": "Rua Em\u00edlio Coleta",
                "city": "Bragan\u00e7a Paulista, S\u00e3o Paulo",
                "capacity": 17128,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/220.png"
            }
        },
       
        {
            "team": {
                "id": 1193,
                "name": "Cuiaba",
                "code": "CUI",
                "country": "Brazil",
                "founded": 2001,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/1193.png"
            },
            "venue": {
                "id": 235,
                "name": "Arena Pantanal",
                "address": 0,
                "city": "Cuiab\u00e1, Mato Grosso",
                "capacity": 44003,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/235.png"
            }
        },
  
        {
            "team": {
                "id": 157,
                "name": "Bayern Munich",
                "code": "BAY",
                "country": "Germany",
                "founded": 1900,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/157.png"
            },
            "venue": {
                "id": 700,
                "name": "Allianz Arena",
                "address": "Werner-Heisenberg-Allee 25",
                "city": "M\u00fcnchen",
                "capacity": 75000,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/700.png"
            }
        },
        {
            "team": {
                "id": 160,
                "name": "SC Freiburg",
                "code": "FRE",
                "country": "Germany",
                "founded": 1904,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/160.png"
            },
            "venue": {
                "id": 12717,
                "name": "Europa-Park Stadion",
                "address": "Achim-Stocker-Stra\u00dfe 1",
                "city": "Freiburg im Breisgau",
                "capacity": 34700,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/12717.png"
            }
        },
        {
            "team": {
                "id": 161,
                "name": "VfL Wolfsburg",
                "code": "WOL",
                "country": "Germany",
                "founded": 1945,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/161.png"
            },
            "venue": {
                "id": 752,
                "name": "VOLKSWAGEN ARENA",
                "address": "In den Allerwiesen 1",
                "city": "Wolfsburg",
                "capacity": 30000,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/752.png"
            }
        },
        {
            "team": {
                "id": 162,
                "name": "Werder Bremen",
                "code": "WER",
                "country": "Germany",
                "founded": 1899,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/162.png"
            },
            "venue": {
                "id": 755,
                "name": "wohninvest WESERSTADION",
                "address": "Franz-B\u00f6hmert-Stra\u00dfe 1c",
                "city": "Bremen",
                "capacity": 42358,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/755.png"
            }
        },
        {
            "team": {
                "id": 163,
                "name": "Borussia Monchengladbach",
                "code": "MOE",
                "country": "Germany",
                "founded": 1900,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/163.png"
            },
            "venue": {
                "id": 703,
                "name": "Stadion im BORUSSIA-PARK",
                "address": "Hennes-Weisweiler-Allee 1",
                "city": "M\u00f6nchengladbach",
                "capacity": 54057,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/703.png"
            }
        },
        {
            "team": {
                "id": 164,
                "name": "FSV Mainz 05",
                "code": "MAI",
                "country": "Germany",
                "founded": 1905,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/164.png"
            },
            "venue": {
                "id": 11899,
                "name": "MEWA ARENA",
                "address": "Eugen-Salomon-Stra\u00dfe 1",
                "city": "Mainz",
                "capacity": 34034,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/11899.png"
            }
        },
        {
            "team": {
                "id": 165,
                "name": "Borussia Dortmund",
                "code": "DOR",
                "country": "Germany",
                "founded": 1909,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/165.png"
            },
            "venue": {
                "id": 19381,
                "name": "SIGNAL IDUNA PARK",
                "address": "Strobelalle 50",
                "city": "Dortmund",
                "capacity": 81365,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/19381.png"
            }
        },
        {
            "team": {
                "id": 167,
                "name": "1899 Hoffenheim",
                "code": "HOF",
                "country": "Germany",
                "founded": 1899,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/167.png"
            },
            "venue": {
                "id": 724,
                "name": "PreZero Arena",
                "address": "Dietmar-Hopp-Stra\u00dfe 1",
                "city": "Sinsheim",
                "capacity": 30164,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/724.png"
            }
        },
        {
            "team": {
                "id": 168,
                "name": "Bayer Leverkusen",
                "code": "BAY",
                "country": "Germany",
                "founded": 1904,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/168.png"
            },
            "venue": {
                "id": 699,
                "name": "BayArena",
                "address": "Bismarckstr. 122-124",
                "city": "Leverkusen",
                "capacity": 30210,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/699.png"
            }
        },
        {
            "team": {
                "id": 169,
                "name": "Eintracht Frankfurt",
                "code": "EIN",
                "country": "Germany",
                "founded": 1899,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/169.png"
            },
            "venue": {
                "id": 10491,
                "name": "Deutsche Bank Park",
                "address": "M\u00f6rfelder Landstr. 362",
                "city": "Frankfurt am Main",
                "capacity": 58000,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/10491.png"
            }
        },
        {
            "team": {
                "id": 170,
                "name": "FC Augsburg",
                "code": "AUG",
                "country": "Germany",
                "founded": 1907,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/170.png"
            },
            "venue": {
                "id": 698,
                "name": "WWK Arena",
                "address": "B\u00fcrgermeister Ulrich-Stra\u00dfe 90",
                "city": "Augsburg",
                "capacity": 30662,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/698.png"
            }
        },
        {
            "team": {
                "id": 172,
                "name": "VfB Stuttgart",
                "code": "STU",
                "country": "Germany",
                "founded": 1893,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/172.png"
            },
            "venue": {
                "id": 19928,
                "name": "MHP Arena",
                "address": "Mercedesstrasse 87",
                "city": "Stuttgart",
                "capacity": 60469,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/19928.png"
            }
        },
        {
            "team": {
                "id": 173,
                "name": "RB Leipzig",
                "code": "LEI",
                "country": "Germany",
                "founded": 2009,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/173.png"
            },
            "venue": {
                "id": 738,
                "name": "Red Bull Arena",
                "address": "Am Sportforum 3",
                "city": "Leipzig",
                "capacity": 47069,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/738.png"
            }
        },
        {
            "team": {
                "id": 176,
                "name": "VfL BOCHUM",
                "code": "BOC",
                "country": "Germany",
                "founded": 1848,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/176.png"
            },
            "venue": {
                "id": 751,
                "name": "Vonovia Ruhrstadion",
                "address": "Castropher Stra\u00dfe 145",
                "city": "Bochum",
                "capacity": 30748,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/751.png"
            }
        },
        {
            "team": {
                "id": 180,
                "name": "FC Heidenheim",
                "code": "HEI",
                "country": "Germany",
                "founded": 1946,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/180.png"
            },
            "venue": {
                "id": 723,
                "name": "Voith-Arena",
                "address": "Schlo\u00dfhaustra\u00dfe 160",
                "city": "Heidenheim an der Brenz",
                "capacity": 15000,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/723.png"
            }
        },
        {
            "team": {
                "id": 181,
                "name": "SV Darmstadt 98",
                "code": "DAR",
                "country": "Germany",
                "founded": 1898,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/181.png"
            },
            "venue": {
                "id": 705,
                "name": "Merck-Stadion am B\u00f6llenfalltor",
                "address": "Nieder-Ramst\u00e4dter Stra\u00dfe 170",
                "city": "Darmstadt",
                "capacity": 17810,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/705.png"
            }
        },
        {
            "team": {
                "id": 182,
                "name": "Union Berlin",
                "code": "UNI",
                "country": "Germany",
                "founded": 1966,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/182.png"
            },
            "venue": {
                "id": 748,
                "name": "Stadion An der Alten F\u00f6rsterei",
                "address": "H\u00e4mmerlingstra\u00dfe 80-88, K\u00f6penick",
                "city": "Berlin",
                "capacity": 22467,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/748.png"
            }
        },
        {
            "team": {
                "id": 192,
                "name": "FC Koln",
                "code": "KOL",
                "country": "Germany",
                "founded": 1948,
                "national": False,
                "logo": "https://media-4.api-sports.io/football/teams/192.png"
            },
            "venue": {
                "id": 731,
                "name": "RheinEnergieStadion",
                "address": "Aachener Str. 999",
                "city": "K\u00f6ln",
                "capacity": 50076,
                "surface": "grass",
                "image": "https://media-4.api-sports.io/football/venues/731.png"
            }
        }
    ]
}

# Função para obter o nome do time
def get_team_name(team_data):
    return team_data["team"]["name"]

# Ordenar os times pelo nome
data["response"] = sorted(data["response"], key=get_team_name)

# Escrever o JSON ordenado em um novo arquivo
with open("times_ordenados.json", "w") as outfile:
    json.dump(data, outfile, indent=4)

print("Times ordenados e salvos no arquivo 'times_ordenados.json'")
