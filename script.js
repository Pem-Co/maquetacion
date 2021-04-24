(function(){
	var actualizarHora = function(){
		var fecha = new Date(),
			H = fecha.getHours(),
			DN,
			MIN = fecha.getMinutes(),
			S = fecha.getSeconds(),
			DS = fecha.getDay(),
			D = fecha.getDate(),
			M = fecha.getMonth(),
			A = fecha.getFullYear();
		var pHoras = document.getElementById('H'),
			pAMPM = document.getElementById('DN'),
			pMinutos = document.getElementById('MIN'),
			pSegundos = document.getElementById('S'),
			pDiaSemana = document.getElementById('DS'),
			pDia = document.getElementById('D'),
			pMes = document.getElementById('M'),
			pYear = document.getElementById('A');
		var semanas = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
		pDiaSemana.textContent = semanas[DS];
		pDia.textContent = D;
		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
		pMes.textContent = meses[M];
		pYear.textContent = A;
        if (H >= 12) {
			H = H - 12;
			DN = 'PM';
		} else {
			DN = 'AM';
		}
		if (H == 0 ){
			H = 12;
		}
		pHoras.textContent = H;
		pAMPM.textContent = DN;
		if (MIN < 10){ MIN = "0" + MIN; }
		if (S < 10){ S = "0" + S; }

		pMinutos.textContent = MIN;
		pSegundos.textContent = S;
	};

	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000);
}())