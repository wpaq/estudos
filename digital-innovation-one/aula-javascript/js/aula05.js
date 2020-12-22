//Manipulando elementos da página
function clicou(){
	document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";	
	//alert("Obrigado por clicar!");
}

function redirecionar(){
	//window.open("https://www.google.com");
	window.location.href = "https://www.google.com";
}

function trocar(elemento){
	//document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse!";
	elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
	//document.getElementById("mouseover").innerHTML = "Passe o mouse aqui!";
	elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
	alert("Página carregada");
}

function funcaoChange(elemento){
	console.log(elemento.value);
}