// Atividade 02

/*

Crie um script que faça a conversão da temperatura de graus Celsius para Fshenheit 

Para ajudar: (valor * 9 / 5 + 32)

*/

let celsius = parseInt(prompt("Digite a temperatura em graus Celsius:"));
let fahrenheit = (celsius * 9/5) + 32;
document.getElementById('info').innerHTML =celsius + " graus Celsius equivalem a " + fahrenheit + " graus Fahrenheit.";


