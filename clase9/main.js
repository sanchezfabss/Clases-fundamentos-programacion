//let conditionNumber = 10;
//while(conditionNumber < 0){
    //Cofigo que quiero ejecutar
    //En cada iteracion
    //conditionNumber = conditionNumber  - 1; //
//}
//El for tiene 3 partes
//inicializacion
//condicion
//despues de cada iteracion
//Se separan con ;
//for(inicializacion; condicion; despues de cada iteracion)
//number = number +1 es lo mismo que number++
//const tablaMultiplicacion = 3;
//for(let number = 100; number > 0; number-- ){
    //const resultado =tablaMultiplicacion * number
    //console.log (tablaMultiplicacion + " X ", number, " = " + resultado)
//}
//Output
const word = "reconocer"
let wordreserve = "";
let CantLetra = word.length;


for(let letra = CantLetra - 1; letra >= 0; letra --){
    wordreserve = wordreserve + word.charAt(letra)
}
if (word === wordreserve) {
    console.log ("La palabra", word, "Si es un palindromo")
} else {
    console.log ("La palabra", word, "No es un palindromo")
}





//while (letra > 0){
    //if(word = wordreserve){
     //   console.log ("")
    //} else{
     //   console.log ()
   // }
//}
    
   