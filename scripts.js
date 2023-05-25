
function Datos () {
    var url="https://raw.githubusercontent.com/alexgmzdev/urlapiweather/main/openweaterapi.json";

    fetch(url) 
        .then(response => response.text())
        .then(respuesta => mostrarTiempo(respuesta))
}

function mostrarTiempo(respuesta){
    var infoClima= JSON.parse(respuesta);

    var ciudad = document.getElementById("#ciudad").value = infoClima.name;
    

}