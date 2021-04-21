// Exibe uma mensagem em uma seção de saída de depuração especial do documento.
// Se o documento não contém esta seção, cria uma.
function debug(msg) {
 // Localiza a seção de depuração do documento, examinando os atributos de
 // identificação HTML
 var log = document.getElementById("debuglog");

 // Se não existe elemento algum com a identificação "debuglog", cria um.
 if (!log) {
 log = document.createElement("div"); // Cria um novo elemento <div>
 log.id = "debuglog"; // Define o atributo de identificação HTML
 // nele
 log.innerHTML = "<h1>Debug Log</h1>"; // Define o conteúdo inicial
 document.body.appendChild(log); // Adiciona-o no final do documento
 }
 // Agora, coloca a mensagem em seu próprio <pre> e a anexa no log
 var pre = document.createElement("pre"); // Cria uma marca <pre>
 var text = document.createTextNode(msg); // Coloca a msg em um nó de texto
 pre.appendChild(text); // Adiciona o texto no <pre>
 log.appendChild(pre); // Adiciona <pre> no log
}

function hide(e, reflow) { // Oculta o elemento e faz script de seu estilo
 if (reflow) { // Se o 2º argumento é verdadeiro
 e.style.display = "none" // oculta o elemento e utiliza seu espaço
 }
 else { // Caso contrário
 e.style.visibility = "hidden"; // torna e invisível, mas deixa seu espaço
 }
}
function highlight(e) { // Destaca e, definindo uma classe CSS
 // Basta definir ou anexar no atributo da classe HTML.
 // Isso presume que uma folha de estilos CSS já define a classe "hilite"
 if (!e.className) e.className = "hilite";
 else e.className += " hilite";
}