const solucion = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]; 
var posiciones = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]; 
var iniciado = false; 

function moverPieza(celda1,celda2) { 
  var temp = document.getElementById(celda1).className;
  document.getElementById(celda1).className = document.getElementById(celda2).className;
  document.getElementById(celda2).className = temp;
}

function cambiarPosicion(filaO, columnaO, filaD, columnaD){ 
	var temp = posiciones[filaO - 1][columnaO - 1];
	posiciones[filaO - 1][columnaO - 1] = posiciones[filaD - 1][columnaD - 1];
	posiciones[filaD - 1][columnaD - 1] = temp;
}

function desordenar() {
	iniciado = true;

	
	for (var fila=1;fila<=4;fila++) { 
	   for (var columna=1;columna<=4;columna++){ 

		    var fila2=Math.floor(Math.random()*(4-1)) + 1; 
		    var columna2=Math.floor(Math.random()*(4-1)) + 1; 
		    
		    cambiarPosicion(fila, columna, fila2, columna2); 
		    moverPieza("celda"+fila+columna,"celda"+fila2+columna2); 
	  	} 
	} 
}

function clickPieza(fila, columna){
	if (iniciado) { 
		var celda = document.getElementById("celda"+fila+columna);
		var pieza = celda.className;
		
		if (pieza!="pieza16") { 
			
			if (columna<4) {
				if ( document.getElementById("celda"+fila+(columna+1)).className=="pieza16") {
					moverPieza("celda"+fila+columna,"celda"+fila+(columna+1));
					cambiarPosicion(fila, columna, fila, (columna+1));
					comprobarSolucion();
					return;
				}
			}

			
			if (columna>1) {
				if ( document.getElementById("celda"+fila+(columna-1)).className=="pieza16") {
					moverPieza("celda"+fila+columna,"celda"+fila+(columna-1));
					cambiarPosicion(fila, columna, fila, (columna-1));
					comprobarSolucion();
					return;
				}
			}

			
			if (fila>1) {
				if ( document.getElementById("celda"+(fila-1)+columna).className=="pieza16") {
					moverPieza("celda"+fila+columna,"celda"+(fila-1)+columna);
					cambiarPosicion(fila, columna, (fila-1), columna);
					comprobarSolucion();
					return;
				}
			}

			
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