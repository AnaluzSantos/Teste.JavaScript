/**
 * 2. Escreva um script que receba as 3 notas de um aluno por parâmetro e uma letra. Se a letra for A, o procedimento calcula a média aritmétrica das notas do aluno, se for P, a sua média (pesos: 5, 3 e 2). A média calcula também deve retornar por parâmetro.
 */




let num1 = parseFloat(prompt('Digite o primeiro número')); 
let num2 = parseFloat(prompt('Digite o segundo número')); 
let num3 = parseFloat(prompt('Digite o terceiro número'));
let letra = prompt('Digite a letra').toUpperCase();



function calculo(numero1, numero2, numero3, letrinha){
    if (letrinha == 'A'){
        let media = (numero1 + numero2 + numero3) /3
        document.getElementById('info').innerHTML = `A média aritmétrica é: ${media}.` 
    }
    else if(letrinha == 'P'){
        let media = ((numero1*5) + (numero2*3) + (numero3*2))/10
        document.getElementById('info').innerHTML = `A média por peso é: ${media}`
    }
}

calculo(num1, num2, num3, letra)