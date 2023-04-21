$(document).ready(function() {
	$('form').submit(function(event) {
		event.preventDefault(); // Previene la recarga de la página

		// Obtiene los valores del formulario
		var nombre = $('#nombre').val();
		var email = $('#email').val();
		var telefono = $('#telefono').val();
		var mensaje = $('#mensaje').val();

		// Envía los datos al servidor
		$.ajax({
			url: 'enviar.php', // Archivo PHP que procesa los datos
			method: 'POST',
			data: {
				nombre: nombre,
				email: email,
				telefono: telefono,
				mensaje: mensaje
			},
			success: function(respuesta) {
				// Muestra la respuesta del servidor en el elemento con ID "respuesta"
				$('#respuesta').html(respuesta);
			}
		});
	});
});