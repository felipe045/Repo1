
function validar_nombre_usuario(string) {
    
    if (!/^[0-9A-Z]{6,30}$/gi.test(string)) {
        alert("El campo nombre debe contener entre 6 y 30 caracteres (A-Z)(0-9)");
        return false;
        }
        return true;
    }

 function validar_contrasena(string) {
    //implementacion
    
    if (!/^[A-Z0-9]{6,}$/gi.test(string)) {
        alert("La contraseña debe contener minimo 6 caracteres (A-Z)(0-9)");
        return false;
        }
        return true;
}

function confirmar_contrasena(stringA, stringB) {
    //implementacion

    if (!validar_contrasena(stringA) || !validar_contrasena(stringB)){
        alert("Alguna de las contraseñas no cumple");
        return false;
    }

    if(stringA != stringB){
        alert("Las contraseñas son diferentes");
        return false;

    }
        return true;
}
// jrojas210@yahoo.com

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;

