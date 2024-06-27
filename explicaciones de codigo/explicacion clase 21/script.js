const validarMayuscula =(texto) =>{ 
    let textoMinuscula = texto.toLowerCase()
    return textoMinuscula !== texto
}

/* crea una constante que guarda una arrow function, dentro de la funcion, crea una variable que es igual al parametro "texto", convertido a minusculas, y luego retorna el boolean resultante de "textoMinuscula !== texto", devuelve true si el texto contenia mayusculas, y false si no */

const VALIDACIONES = { /* crea un diccionario con 3 propiedades, que a su vez guardan 2 propiedades, "validacion", y "errorText" */

    password: {
        validacion:(texto) => texto && texto.includes('#') && validarMayuscula(texto), /* crea una funcion anonima que recibe un parametro de texto, verifica que sea un valor truthly, despues verifica si tiene # mediante el metodo includes(), y llama a la funcion validarMayuscula, pasandole el parametro de texto */
        errorText: 'La password es incorrecta'
    },
    email: {
        validacion: (email) => (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)), /* crea una funcion anonima que recibe como parametro email, y testea si usa la regex de email */
        errorText: 'El email es incorrecto'
    },
    username: {
        validacion: (texto) => texto && texto.includes('-') && validarMayuscula(texto), /* crea una funcion anonima que recibe como parametro texto, verifica si es un valor truthly, si incluye en el parametro "-" y si contiene mayusculas */
        errorText: 'El username es incorrecto'
    }

}


const obtenerValoresFormulario = (formulario) => { /* se crea una funcion a la que se le pasa como parametro un formulario */
        
    const inputs = ['username', 'password', 'email'] /* se crea un array de 3 elementos, username, password, email */
    const inputsInfo = {} /* se crea un objeto vacio y se guarda en una constante */
    for(let input of inputs){ /* se usa forof para recorrer el array de 3 elementos */
        const spanErrorHTML = formulario.querySelector('.error-text-' + input) /* se crea una constante "spanErrorHTML", que usa el parametro para acceder al hmtl, mediante query selector selecciona un spam que tiene la clase error-text, y le suma el valor del input, que equivale a un elemento del array */
        const valor = formulario[input].value /* se crea una constante que toma el valor de formulario, y accede al valor del elemento que se esta iterando */
        inputsInfo[input] = { /* al objeto vacio, se le agregan estos datos */
            errorHTML: spanErrorHTML, /* span del input */
            validacion: VALIDACIONES[input].validacion, /* la validacion */
            errorText: VALIDACIONES[input].errorText, /* el mensaje de error */
            valor: valor /* el valor del elemento */
        }
    }
    return inputsInfo /* una vez terminado el bucle, retorna el objeto con los 3 elementos */
}


const formLoginHTML = document.getElementById('form-login') /* crea una constante llamada formLoginHTML que accede al elemento cuyo id sea form-login */


const handleSubmit = (evento) =>{ /* se crea el handler de formLoginHTML */
    evento.preventDefault() /* previene su comportamiento por default */
    const formulario = evento.target /* guarda el valor de la etiqueta que provoco el evento en una constante */
    const valoresFormulario = obtenerValoresFormulario(formulario) /* crea una constante que sea igual al retorno de la funcion obtenerValoresFormulario, pasandole como parametro la constante formulario */
    console.log(valoresFormulario) /* muestra en consola valoresFormulario */
    for(const propiedad in valoresFormulario){ /* crea un bucle forin, que recorre cada propiedad del objeto creado */
        const objetoInputFormulario = valoresFormulario[propiedad] /* crea una constante que accede al objeto retornado por la funcion, y pasa como indice la propiedad que se esta iterando */
        if(!objetoInputFormulario.validacion(objetoInputFormulario.valor)){ /* si la validacion (se le pasa como parametro la propiedad iterada) de la propiedad que esta iterando devuelve false */
            objetoInputFormulario.errorHTML.innerText = objetoInputFormulario.errorText /* accede a la propiedad errorHTML y la inserta como texto */
        }
        else{
            objetoInputFormulario.errorHTML.innerText = '' /* sino, le asigna un empty string para no mostrar ningun error, o eliminar el error anterior */
        }
        
    }
}

formLoginHTML.addEventListener('submit', handleSubmit) /* se crea un evento "submit", que se le pasa la funcion handleSubmit */