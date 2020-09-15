
let rec;
if(!("webkitSpeechRecognition" in window)){
		alert("El navegador no soporta esta funcionalidad");
}else{
		rec = new webkitSpeechRecognition();
		rec.lang = "es-ES";
		rec.continuous = true;
		rec.interim = true;
		rec.addEventListener("result",iniciar);			
}
			
function iniciar(event){
		grabar();
		for(let i= event.resultIndex; i<event.results.length;i++){
			document.getElementById('texto').innerHTML =event.results[i][0].transcript;
		}
}

rec.start();