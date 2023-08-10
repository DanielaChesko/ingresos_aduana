const usuarios = []; //donde se guardan todos los usuarios ingresados

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

do { //eleccion de un do while para que siempre se vuelva al menu principal
    decision = prompt("1_ Ingreso de personas \n2_ Consulta de persona \n3_ Mostrar extranjeros \n4_ Salir");

    if (decision == 1) { //ingreso de datos
        const dni = parseInt(prompt('Ingrese dni: '));
        const nombre = prompt('Ingrese nombre: ');
        const apellido = prompt('Ingrese apellido: ');
        const anioNac = parseInt(prompt('Ingrese año de nacimiento: '));
        const extranjero = prompt('Ingrese nacionalidad: ').toLowerCase();
            
        const confirmacion = parseInt(prompt(`DNI: ${dni}\nNombre: ${nombre}\nApellido: ${apellido}\nAño de Nacimiento: ${anioNac}\nNacionalidad: ${extranjero}\n\n¿Los datos son correctos?\n 1_ Si\n 2_ No`)); //confirmacion si el usuario puso bien sus datos

        if(confirmacion === 1) {
            const usuario1 = new Dni(dni, nombre, apellido, anioNac, extranjero); //añade todos los datos a un objeto
            usuarios.push(usuario1);
            usuario1.Ingreso();
            alert("Usuario agregado correctamente.");
        }else if(confirmacion === 2){
            alert("Los datos no fueron agregados.");
            }
           
            
    } else if (decision == 2) { //el que trabaja en la aduana puede buscar un dni para ver si la persona que busca ingreso a Argentina
        consulta = prompt("DNI a consultar: ");
        busqueda = usuarios.find(item => item.dni == consulta); //busca el usuario y muestra todos los datos si es que se encontro el dni
        if (busqueda) {
            const mensaje = `El usuario corresponde a \nDNI: ${busqueda.dni}\nNombre: ${busqueda.nombre}\nApellido: ${busqueda.apellido}\nAño de Nacimiento: ${busqueda.anioNac}\nNacionalidad: ${busqueda.extranjero}\nIngreso: ${busqueda.presente}`;
            alert(mensaje);
        } else {
            alert("No se encontró ninguna persona con ese DNI.");
        }

        
    } else if (decision == 3){ //busca si hay extranjeros, para eso ve si hay datos ingresados que sean diferentes a "Argentina"
        extranjeros = usuarios.filter(item => item.extranjero !== "argentina");

    if (extranjeros.length > 0) { //si el largo de extranjeros es mayor a 0 muestra todos los extranjeros recorriendo con un for
        for (const usuario of extranjeros) {
            usuariosExtranjeros += `Los extranjeros son:\n${usuario.dni}\nNombre: ${usuario.nombre}\nApellido: ${usuario.apellido}\nAño de Nacimiento: ${usuario.anioNac}\nNacionalidad: ${usuario.extranjero}\n`;
        }
        alert(usuariosExtranjeros);
        
    } else {
        alert("No se encontraron usuarios extranjeros.");
        }


    } else if(decision == 4){ //corta el bucle do while y cierra la ventana
        break
    }
    

    else { //en caso de que el usuario no ingrese 1, 2, 3 o 4
        alert("Opción no valida");
    }
    
} while (true);