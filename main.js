const usuarios = [];

class Dni{
    constructor(dni, nombre, apellido, anioNac, extranjero){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.anioNac = anioNac;
        this.extranjero = extranjero;
        this.presente = false;
    }
    Ingreso(){
        this.presente = true;
    }
}

//ingreso de datos
let consulta, busqueda, extranjeros, usuariosExtranjeros = "";
alert("Bienvenido a la aduana!");

do {

    decision = prompt("1_ Ingreso de personas \n2_ Consulta de persona \n3_ Mostrar extranjeros \n4_ Salir");

    if (decision == 1) {
        const dni = parseInt(prompt('Ingrese dni: '));
        const nombre = prompt('Ingrese nombre: ');
        const apellido = prompt('Ingrese apellido: ');
        const anioNac = parseInt(prompt('Ingrese año de nacimiento: '));
        const extranjero = prompt('Ingrese nacionalidad: ').toLowerCase();
            
        const confirmacion = parseInt(prompt(`DNI: ${dni}\nNombre: ${nombre}\nApellido: ${apellido}\nAño de Nacimiento: ${anioNac}\nNacionalidad: ${extranjero}\n\n¿Los datos son correctos?\n 1_ Si\n 2_ No`));

        if(confirmacion === 1) {
            const usuario1 = new Dni(dni, nombre, apellido, anioNac, extranjero);
            usuarios.push(usuario1);
            usuario1.Ingreso();
            alert("Usuario agregado correctamente.");
        }else if(confirmacion === 2){
            alert("Los datos no fueron agregados.");
            }
           
            
    } else if (decision == 2) {
        consulta = prompt("DNI a consultar: ");
        busqueda = usuarios.find(item => item.dni == consulta);
        if (busqueda) {
            const mensaje = `El usuario corresponde a \nDNI: ${busqueda.dni}\nNombre: ${busqueda.nombre}\nApellido: ${busqueda.apellido}\nAño de Nacimiento: ${busqueda.anioNac}\nNacionalidad: ${busqueda.extranjero}\nIngreso: ${busqueda.presente}`;
            alert(mensaje);
        } else {
            alert("No se encontró ninguna persona con ese DNI.");
        }

        
    } else if (decision == 3){
        extranjeros = usuarios.filter(item => item.extranjero !== "argentina");
    if (extranjeros.length > 0) {
        for (const usuario of extranjeros) {
            usuariosExtranjeros += `Los extranjeros son:\n${usuario.dni}\nNombre: ${usuario.nombre}\nApellido: ${usuario.apellido}\nAño de Nacimiento: ${usuario.anioNac}\nNacionalidad: ${usuario.extranjero}\n`;
        }
        alert(usuariosExtranjeros);
    } else {
        alert("No se encontraron usuarios extranjeros.");
        }


    } else if(decision == 4){
        break
    }
    

    else {
        alert("Opción no valida");
    }
    
} while (true);