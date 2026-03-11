// if (5 == 5){
   // console.log("La condicion es cierta"); 
//} else {
  //  console.log("La condicion es falsa");
//}
//Si es = if
//Si no entonces = else

const UserName = "Suggarfabs"
const Password = "0312" 
const savedPassword = "0312"
const UserAnswer = "Hola123"
const savedAnswer = "Pumpe"

if (UserName != "Suggarfabs"){
    console.log("Su Username no existe")
} else if(UserName == "Suggarfabs" && Password == savedAnswer){
    console.log("Puede iniciar sesion")
} else if (Password != "0312" || UserAnswer == "Hola123"){
    console.log("Puede iniciar sesion")
} else {
    console.log("No puede iniciar sesion")
}

