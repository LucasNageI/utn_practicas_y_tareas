/* tarea operadores y variables en ambitos */


(true > true || 9) && Number(Boolean(1)) > 0 || "pepe" /* Number 1 (9 = true) */ /* CORRECCION: true((true > true || 9) devuelve true,) */ 
console.log((true > true || 9) && Number(Boolean(1)) > 0 || "pepe")

"valor" == "VALOR" || NaN == NaN && "1" === !"-1" /* boolean, false (NaN !== NaN) */ /* CORRECTO */
console.log("valor" == "VALOR" || NaN == NaN && "1" === !"-1")

/* 1/2 */


let nombre = "pepe"
console.log(nombre) /* "pepe" */ /* CORRECTO */

{
    let nombre = "pedro"
    console.log(nombre) /* "pedro" */ /* CORRECTO */

    {
        let nombre = "maria"
        console.log(nombre) /* "maria" */ /* CORRECTO */
    }
{
    let nombre = "leonel"
    console.log(nombre) /* "leonel" */ /* CORRECTO */
    {
        let nombre = "julieta"
        console.log(nombre) /* "julieta" */ /* CORRECTO */
    }
    console.log(nombre) /* "leonel" */ /* CORRECTO */
}
console.log(nombre) /* "pedro" */ /* CORRECTO */
nombre = "juan"
}
console.log(nombre) /* "juan" */ /* CORRECCION: "pepe" */

/* 7/8 */