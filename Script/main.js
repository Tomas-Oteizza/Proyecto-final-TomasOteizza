//este proyecto pretende ser un homebanking, el cual seguire desarrollando con el avance de las clases y entregas 

function inicioSesion () {
let usuario = prompt ("ingrese su usuario por favor")
let contrasenia = parseInt (prompt ("ingrese su contraseña:"))

while (contrasenia != 1234) {
    alert ("contraseña equivocada, por favor vuelva a intentarlo")
    contrasenia = prompt ("vuelva a ingresar la contraseña")
}
}

function dineroIngresado () {
    let ingreso = parseFloat (prompt("ingrese el dinero a ingresar: "))
    if (ingreso >= 1000000) {
        alert ("te va a correr la AFIP")
    }else  {
        alert ("su dinero se ingreso con exito")
    }
}

alert ("Bienvenido a su homebanking, por favor siga los siguientes pasos para realizar un deposito")

inicioSesion ();

dineroIngresado ();