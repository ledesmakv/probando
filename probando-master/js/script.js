var divContenedorBotonesUsuario = document.getElementById('div-contenedor-botones-usuario');
var divContenedorListaPosts = document.getElementById('div-contenedor-lista-posts');

pedirDatos(agregarBotones);

function pedirDatos(cbRequest) {
	var request = new XMLHttpRequest();

	request.onload = function() {
		var datosCambiados = JSON.parse(request.responseText);

		cbRequest(datosCambiados);
		//        cbRequest(JSON.parse(request.responseText))
	};

	request.open('GET', 'https://jsonplaceholder.typicode.com/users');
	request.send();
}

function agregarBotones(datos) {
	var listaUsuarios = datos;

	for (var i = 0; i < listaUsuarios.length; i++) {
		crearBotones(listaUsuarios[i].name, listaUsuarios[i].id);
	}
}

function crearBotones(nombre, id) {
	var boton = document.createElement('button');

	boton.setAttribute('class', 'boton-usuario');
	var texto = document.createTextNode(nombre);
	boton.appendChild(texto);

	boton.addEventListener('click', mostrarPost);

	function mostrarPost() {
		verPostsUsuario(id, mostrarPost);
	}

	divContenedorBotonesUsuario.appendChild(boton);
}
