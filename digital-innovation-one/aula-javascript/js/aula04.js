//Desenvolva páginas web com JavaScript

function soma(n1, n2){
	return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
	var validar;

	if(idade >= 18){
		validar = true;
	} else{
		validar = false;
	}
	return validar;
}

alert(soma(5, 5));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

var idade = prompt("Qual sua Idade?");
console.log(validaIdade(idade));