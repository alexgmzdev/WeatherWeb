function Datos() {
    var url = "https://raw.githubusercontent.com/alexgmzdev/urlapiweather/main/ciudades.json";

    fetch(url)
        .then(response => response.text())
        .then(respuesta => mostrarTiempo(respuesta))
}
//VARIABLES A USAR
//VARIBLE PARA ICONOS DEL TIEMPO QUE HACE
var dato = document.createElement("img");
dato.id = "icon"; // creo un id para editarlo en css
//VARIABLES PARA LA TEMPERATURA
var temp = document.createElement("p");
temp.id = "temperatura"
var tempicon = document.createElement("img");
tempicon.id = "icon-temp";
//VARIABLES PARA EL NOMBRE DE CIUDAD
var nombreciudad = document.createElement('p'); // creo variable y su elemento en HTML
nombreciudad.className = "nm-cd"; // creo una clase para editarlo en css
//VARIABLES PARA EL VIENTO
var viento = document.createElement("p");
viento.id = "viento";
var vientoicon = document.createElement("img");
vientoicon.id = "icon-viento";


function mostrarTiempo(respuesta) {
    var infoClima = JSON.parse(respuesta);
    console.log(infoClima);

    var ciudadCorrecta = false;


    for (let value in infoClima) {
        if (infoClima.hasOwnProperty(value)) {
            const objetoInterno = infoClima[value];
            if (document.querySelector("#ciudad").value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() === objetoInterno.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()) {     //Con este if controlo la entrada de texto del usuario ignorando mayusculas y acentos
                ciudadCorrecta = true;
                var infoTiempo = document.querySelector("#info-tiempo");
                dato.src = "https://openweathermap.org/img/wn/" + objetoInterno.weather[0].icon + "@2x.png";

                nombreciudad.innerHTML = objetoInterno.name; //lo igualo al valor del JSON
                temp.innerHTML = Math.trunc(objetoInterno.main.temp + (-273.15)) + "ºC"; //Hago el calculo de todas las temperaturas dadas para poder pasarlos de Fahrenheit a Celsius
                
                //Se pocrede a pintar en el HTML todos los elementos usados de la API

                infoTiempo.appendChild(dato);
                infoTiempo.appendChild(nombreciudad); 
                infoTiempo.appendChild(temp);

                if (Math.trunc(objetoInterno.main.temp + (-273.15)) <= 20) {    
                    tempicon.src = "media/thermometer.png";
                    tempicon.innerHTML;
                    infoTiempo.appendChild(tempicon);
                } else {
                    tempicon.src = "media/thermometerhot.png" //si la temperatura es superior a veinte cambia el icono a un termometro rojo
                }

                viento.innerHTML = objetoInterno.wind.speed + " km/h";
                infoTiempo.appendChild(viento);
                vientoicon.src = "media/wind.png";
                vientoicon.innerHTML;
                infoTiempo.appendChild(vientoicon);
            }
        }
    }

    if (!ciudadCorrecta) {  //si la ciudad no es válida de las opciones a usar / se escribe mal el nombre de la misma, salta un alert de error
        alert("Introduce una ciudad válida");

    }
    /*var ciudad = document.createElement("p");
    ciudad.textContent = infoClima.name;*/

}