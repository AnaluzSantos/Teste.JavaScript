for (let i = 0; i < 10; i++){
    console.log(1)
   }
   
   // Palavra-chave for
   // Declaração variável
   // Condição
   // Incremento / Decremento

   //While = enquanto

   var i = 0;

   while (i <10) {
        console.log(i);

        i++;

        //do..while
    }
      
    //do..while
    let i = 0;
    do { 
        console.log(i);
        i++;
    } while (i< 0);

    // for ...of 

    let esportes = ['futebol', 'basquete', 'vôlei', 'skate'];
    for(let esporte of esporte) {
        console.log(esporte)
    }

    let person = {
        name: 'John',
        age: 31,
        weightt: 60,0
    };
    for(let property in person) {
        console.log(property);
        console.log(person[property]);
    }