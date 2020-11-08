var ganadores;

function cambiarDiseno(nombre) { 
	document.documentElement.style.setProperty('--imagen', 'url(../imagen/' + nombre + ')');
}

function redirigir(ruta) { 
	document.location.href = ruta;
}

function mostrarGanadores() { 
	var texto = '';
	ganadores = localStorage.getItem('ganadores'); 

	if (ganadores === null) {
		texto = 'No hay ganadores'; 
	} else {
		ganadores = ganadores.split('|');

		for (var i = 0; i < ganadores.length; i++) {
			texto += '<li>' + ganadores[i] + '</li>'; 
		}
	}

	document.getElementById("ganadores").innerHTML = texto;
}

function mostrarModal() { 
	$('#modalGanador').modal('show'); 
}

// mostrarModal(); probando el modal

function registrarGanador() { 
	var nombre = $('#nombre').val(); 

	if (nombre != "") { 
		if (ganadores == null) {
			ganadores = new Array();
		}

		if (ganadores.length < 3) { 
			ganadores.push(nombre);
		} else {
			ganadores.shift(); 
			ganadores.push(nombre); 
		}

		localStorage.setItem('ganadores', ganadores.join('|')); 
		mostrarGanadores();

		$('#modalGanador').modal('hide'); 
	}
}