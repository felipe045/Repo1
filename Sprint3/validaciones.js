let registros = [];

function agregarRegistro(){
    
    let nombresEl = document.getElementById("in_nombre_usuario");
    let contrasenaEl = document.getElementById("in_contrasena");
    let confirmarEl = document.getElementById("in_confirmar_contrasena");

    let nombres = nombresEl.value;
    let contrasena = contrasenaEl.value;
    let confirmar = confirmarEl.value;


            if (nombres ==="") {
            alert("Debe ingresar un nombre");
            nombresEl.classList.add("error");
            
            }

            else if (!/^[0-9A-Z]{6,}$/gi.test(nombres)) {
                alert("Debe ingresar minimo 6 caracteres para el nombre (0-9)(A-Z)");
                nombresEl.classList.add("error");
               
            }

            if (contrasena ==="") {
                alert("Debe ingresar una contraseña");
                contrasenaEl.classList.add("error");
                
                }
        
            else if (!/^[0-9A-Z]{6,}$/gi.test(contrasena)){
                    alert("La contraseña debe contener minimo 6 caracteres (A-Z)(0-9)");
                    
            }

            if (confirmar==="") {
                alert("Debe confirmar la contraseña");
                confirmarEl.classList.add("error");
                
            }
            
            else if (!/^[0-9A-Z]{6,}$/gi.test(confirmar)){
                alert("La confirmación debe contener minimo 6 caracteres (A-Z)(0-9)");
                
            }
            
            else if(confirmar !== contrasena){
                alert("Las contraseñas son diferentes");
                
            }


        else if(nombres !== "" && contrasena !== "" && confirmar !== "" ){
            let datospersonales = { //crear un elemento
                nombres : nombres,
                contrasena : contrasena,
                confirmar : confirmar
            }
            
            console.log(registros);
            //alert("Datos ingresados correctamente");
            registros.push(datospersonales);
            OrdenarArreglo(registros);
            
          
            
           

        }
        //console.table(registros);
}



function OrdenarArreglo(registros){
    //implementacion
    registros.sort((a, b) => (a.nombres > b.nombres) ? 1 : -1);
    console.table(registros);
}
    
    



module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;