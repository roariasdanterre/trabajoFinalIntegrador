const claveAPI = '9c5c47ee57e83e431155f2989605f396';
const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const formulario = $('#formulario');
const ciudadInput = $('#ciudad');

formulario.validate({
  rules: {
    ciudad: {
      required: true
    }
  },
  messages: {
    ciudad: {
      required: 'Por favor ingresa una ciudad'
    }
  },
  submitHandler: function(form) {
    const ciudad = ciudadInput.val();

    const url = `${urlBase}?q=${ciudad}&appid=${claveAPI}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const temperatura = data.main.temp;
        const humedad = data.main.humidity;
        const velocidadViento = data.wind.speed;
        const temperaturaMaxima = data.main.temp_max;
        const temperaturaMinina = data.main.temp_min;
        const codigoIcono = data.weather[0].icon;
        const urlIcono = `./icons/${codigoIcono}.png`
        console.log(data)

        $('#temperatura').text(`Temperatura: ${temperatura}°C`);
        $('#humedad').text(`Humedad: ${humedad}%`);
        $('#velocidad-viento').text(`Velocidad del viento: ${velocidadViento} km/h`);
        $('#tempearatura_max').text(`Máxima: ${temperaturaMaxima}°C`);
        $('#temperatura_min').text(`Mínima: ${temperaturaMinina}°C`);
        $('#icon').attr('src', urlIcono);


      });
  }
});
