URL API usada: "https://raw.githubusercontent.com/alexgmzdev/urlapiweather/main/ciudades.json",
URL de donde se extrageron los datos:
    -Para sacar los IDs de las ciudades se entro a la siguiente web: http://bulk.openweathermap.org/sample/ (el zip usado es: "city.list.json.gz") proporcionada por: https://openweathermap.org
    -Y para sacar la informacion de cada ciudad se uso la siguiente URL: https://api.openweathermap.org/data/2.5/weather?id=3106868&APPID=6549134c6ce81b9ff87d2cb19d6a1849, esta url entra la id de la ciudad despues de weather?id= y despues de &APPID= entra la APIKey que he recibido para poder usar estos servicios. 

La informacion de las ciudades son un JSON por cada ciudad y toda esa informacion recogida se junto en un JSON aparte para poder acceder a esa informacion mediante la web

La pagina web consta de un buscador y un pie de pagina, dicho buscador puede ofrecer el tiempo "actual" de dicha localidad Madrileña buscada, estas localidades disponibles son:
    -Fuenlabrada
    -Móstoles
    -Leganés
    -Navacerrada
    -Villaconejos
    -Alcorcón
    -Alcobendas
    -Alcalá de Henares
    -Getafe
    -Aranjuez
    -Pinto
    -Valdemoro
    -Coslada
    -Majadahonda
    -Rascafría
    -Manzanares
    -Alpedrete
    -Arroyomolinos
    -Boadilla del Monte
    -Buitrago del Lozoya
    -Canencia
    -Casarrubuelos
    -Cercedilla
    -Escorial, El
    -Galapagar
    -Humanes
    -Madrid
    -Moraleja de Enmedio
    -Parla
    -Las Rozas
    -Torrejón de Ardoz
    -Tres Cantos

Trabajo realizado por Alejandro Gimenez 1º DAM.