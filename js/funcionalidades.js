var ganadores;

function	cambiarDiseno(nombre){ //Cambia la imagen usada por el puzzle
	document.documentElement.style.setProperty('--imagen', 'url(../imagen/' + nombre + ')');
}

function redirigir(ruta){ //redirige a las paginas de puzzle según dificultad
	document.location.href = ruta;
}

function mostrarGanadores(){ //Llena la lista con los ultimos tres ganadores
	var texto = ''
	ganadores = localStorage.getItem('ganadores'); //Si hay ganadore se obtienen

	if(ganadores === null){
    texto = 'No hay ganadores'; //si la lista está vacía se muestra ese texto
  } else {
  	ganadores = ganadores.split('|');

  	for(var i = 0; i < ganadores.length; i++){
  		texto += '<li>' + ganadores[i] + '</li>'; //Si la lista no está vacía se escriben los nombres
  	}
  }

  document.getElementById("ganadores").innerHTML = texto;
}

function mostrarModal(){ //Metodo para mostrar el modal de registrar ganadores
	$('#modalGanador').modal('show'); //Se abre el modal
}

function registrarGanador() { //Metodo para registrar ganadores
	var nombre = $('#nombre').val(); //Se obtiene el nombre escrito en el campo

	if (nombre != "") { //Se verifica que sea un valo válido
		if (ganadores == null) {
			ganadores = new Array();
		} 

		if (ganadores.length < 3) { //Si la lista es menor a 3 se agrega el nombre
			ganadores.push(nombre);
		} else {
			ganadores.shift(); //Si la lista es mayor a 3 se elimina el primer elemento
			ganadores.push(nombre); //Y el nuevo se agrega al final
		}

		localStorage.setItem('ganadores', ganadores.join('|')); //Se guardan los nombres en memoria
		mostrarGanadores();

		$('#modalGanador').modal('hide'); //Se cierra el modal
	}
}