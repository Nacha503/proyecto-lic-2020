const solucion = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]; //Respuesta correcta de resolución del puzzle
var posiciones = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]; //Estado inicial de las piezas en un array 4×4
var iniciado = false; //determina si se ha iniciado un nuevo intento

function moverPieza(celda1,celda2) { //Intercambia las clases y estilos de las celdas
  var temp = document.getElementById(celda1).className;
  document.getElementById(celda1).className = document.getElementById(celda2).className;
  document.getElementById(celda2).className = temp;
}

function cambiarPosicion(filaO, columnaO, filaD, columnaD){ //Intercambia las posiciones de las piezas(logicamente)
	var temp = posiciones[filaO - 1][columnaO - 1];
	posiciones[filaO - 1][columnaO - 1] = posiciones[filaD - 1][columnaD - 1];
	posiciones[filaD - 1][columnaD - 1] = temp;
}

function desordenar() {
	iniciado = true;

	//For anidados para poder acceder a todas las filas y columnas 
	for (var fila=1;fila<=4;fila++) { //Por cada fila de la matriz 4x4
	   for (var columna=1;columna<=4;columna++){ //Para cada columna de la fila

		    var fila2=Math.floor(Math.random()*(4-1)) + 1; //Obtiene una fila random de la 1 a la 4
		    var columna2=Math.floor(Math.random()*(4-1)) + 1; //Obtiene una columna random de la 1 a la 4
		    
		    cambiarPosicion(fila, columna, fila2, columna2); //Se intercambian las piezas logicamente 
		    moverPieza("celda"+fila+columna,"celda"+fila2+columna2); //Se intercambian las piezas graficamente
	  	} 
	} 
}

function clickPieza(fila, columna){
	if (iniciado) { //Cambiar '1==1' por 'iniciado' para obligar al usuario a darle clic al boton empezar del juego 
		var celda = document.getElementById("celda"+fila+columna);
		var pieza = celda.className;
		
		if (pieza!="pieza16") { 
			//Verificar si la pieza vacía está a la derecha
			if (columna<4) {
				if ( document.getElementById("celda"+fila+(columna+1)).className=="pieza16") {
					moverPieza("celda"+fila+columna,"celda"+fila+(columna+1));
					cambiarPosicion(fila, columna, fila, (columna+1));
					comprobarSolucion();
					return;
				}
			}

			//Verificar si la pieza vacía está a la izquierda
			if (columna>1) {
				if ( document.getElementById("celda"+fila+(columna-1)).className=="pieza16") {
					moverPieza("celda"+fila+columna,"celda"+fila+(columna-1));
					cambiarPosicion(fila, columna, fila, (columna-1));
					comprobarSolucion();
					return;
				}
			}

			////Verificar si la pieza vacía está arriba
			if (fila>1) {
				if ( document.getElementById("celda"+(fila-1)+columna).className=="pieza16") {
					moverPieza("celda"+fila+columna,"celda"+(fila-1)+columna);
					cambiarPosicion(fila, columna, (fila-1), columna);
					comprobarSolucion();
					return;
				}
			}

			//Verificar si la pieza vacía está abajo 
			if (fila<4) {
				if ( document.getElementById("celda"+(fila+1)+columna).className=="pieza16") {
					moverPieza("celda"+fila+columna,"celda"+(fila+1)+columna);
					cambiarPosicion(fila, columna, (fila+1), columna);
					comprobarSolucion();
					return;
				}
			} 
		}
	}
}

function comprobarSolucion(){
	if (JSON.stringify(solucion) == JSON.stringify(posiciones)) {
		iniciado = false;
		mostrarModal();
	}
}