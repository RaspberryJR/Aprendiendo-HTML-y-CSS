var boton = document.getElementById("boton");

function enviado(){
	alert("enviado");
	}

boton.onclick = enviado;
boton.addEventListener('mouseover',function(){
	console.log("raton por aqui");})

