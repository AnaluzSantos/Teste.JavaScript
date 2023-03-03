//função simples
/*
    function nomeDaFuncao(number01, number02){
        console.log(number01, number02); 
    }
        
    nomeDaFuncao(1, 2); 
    */ 

    //função anônima - São aquelas que não tem nome.
    /*
        const description = function(text){
            console.log(text); 
        }

        description('função anônima!');
        */

    //     function returnValue(value01, value02){
    //         sum = value01 + value02; 

    //         console.log(sum);
    //         return sum;
    //     }

    //     returnValue(4,6);
    //     */

    //    //Arrow function
    //    /*
    //         const newFunction = (name) => {
    //             console.log(name);
    //         }

    //         console.log(newFunction('Arrow function here!'));
    //         */

    //     // Callback
    //     // Uma callback é uma função que está sendo passadapara outra
    //     // como parâmetro.
    //     const btn = document.querySelector('.btn');

    //     btn.addEventListener('click',() =>){
    //         console.log('callback aqui');
    //     });


        // ATIVIDADE 01

        /**
         * 1. Faça um script contendo uma função que retorne 1, se o número digitado for positivo ou 0 se for negativo 
         */

        let num = prompt('digite um número');
        function teste(num1){
            if (num >= 1){
                document.getElementById('info').innerHTML = `1`
                console.log(1)
            }
            else{
                document.getElementById('info').innerHTML = `0`
                console.log(0)
            }
        }
        console.log(teste(num))

    


                  