/* Explicacion ejemplo
let cantstudentsfaltanporenviar = 20;
while (cantstudentsfaltanporenviar > 0){
    if(cantstudentsfaltanporenviar % 2 === 0){
        console.log ("Sorpresa para estudiahmbre", cantstudentsfaltanporenviar)
    } else{
        console.log ("Enviar correo a estudante", cantstudentsfaltanporenviar)
    }
    cantstudentsfaltanporenviar = cantstudentsfaltanporenviar -1;
}
    /*console.log("Enviar correo a estudihambres", cantstudentsfaltanporenviar)
    cantstudentsfaltanporenviar = cantstudentsfaltanporenviar - 1;
/*Lo que vaya aqui adentro se repite una y otra vez
Se puede agotar la memoria de Java*/ /*Se debe poner una conidicion que cambie*/

/*se utiliza === (Tres porque )
% numero === 0 (Para decir si es multiplo de ese numero) */

/*Practica1
-----------------------------------*/

/* let iteraciones = 100;
while (iteraciones > 0){
    /*const residuoDe5 = iteraciones % 5 === 0
    const residuoDe3 = itercaiones % 3 === 0
    if (iteraciones % 3 === 0 && iteraciones % 5 === 0){
        console.log ("El numero ", iteraciones, " es multiplo de 3 y 5")
    } else if(iteraciones % 5 == 0/*(residuode3)){
        console.log ("El numero ", iteraciones, " es multiplo de 5")
    } else if (iteraciones % 3 === 0/*(residuode5)){
        console.log("El numero ", iteraciones, " es multiplo de 3")
    } else{
        console.log("El numero ", iteraciones, " no es multiplo ni de 3, ni de 5")
    } 
    iteraciones = iteraciones -1
} */
    
const number = 3
let tabla = 1;
while (tabla <= 10){
    console.log(number + "X" + tabla, "=" + (number*tabla))
    tabla = tabla +1;
}
