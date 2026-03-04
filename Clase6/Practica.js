const Lunes = "Lunes"
const Martes = "Martes"
const Miercoles = "Miercoles"
const Jueves = "Jueves"
const Viernes = "Viernes"
const Sabado = "Sabado"
const Domingo = "Domingo"


const Hoy = "Miercoles"

let pregunta1="Hoy es Lunes?"
let pregunta2="Hoy es Miercoles?"
let pregunta3="Hoy es Martes o Miercoles?"
let pregunta4="Hoy es Miercoles y Jueves?"


console.log(pregunta1, Lunes == Hoy)
console.log(pregunta2, Miercoles == Hoy)
console.log(pregunta3, Hoy == Martes || Hoy == Miercoles)
console.log(pregunta4, Hoy == Miercoles && Hoy==Jueves)
