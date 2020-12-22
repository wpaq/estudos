//Condicionais, laços de repetição e Date
var year = prompt("Qual sua Idade: ");
if (year >= 18){
	alert("Maior de Idade!");
} else{
	alert("Menor de Idade!");
}

var count = 5;
for (var i = 0; i<count; i++){
	console.log(i);
}

var d = new Date();
alert(d.getMonth()+1);