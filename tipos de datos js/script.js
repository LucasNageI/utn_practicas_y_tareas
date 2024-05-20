let primeraOperacion = 5 + null; /* Number, 0 */

let segundaOperacion = 3 + 0; /* Number, 3 */

let terceraOperacion = 4 + "8"; /* Number, 12 */

let cuartaOperacion = null == NaN; /* boolean, false */

let quintaOperacion = "pepe" + " "; /* string, "pepe " */

let sextaOperacion = NaN + ""; /* Number, NaN */

let septimaOperacion = true === 1; /* boolean, flase */

/* RESULTADOS: 5 / 7 correctos */

console.log(primeraOperacion) /* Number, 5 */

console.log(segundaOperacion) /* Number, 3 */

console.log(terceraOperacion) /* String, "48" */

console.log(cuartaOperacion) /* Boolean, false */

console.log(quintaOperacion) /* string, "pepe " */

console.log(sextaOperacion) /* Number, NaN */

console.log(septimaOperacion) /* boolean, flase */