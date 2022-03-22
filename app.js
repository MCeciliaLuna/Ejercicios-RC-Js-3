// Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

meses.map(meses => console.log(meses))


//Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

const ciudades = ['Roma', 'Rio de Janeiro', 'San Miguel de Tucumán', 'La Plata', 'Washington DC']

//Mostrar la longitud del arreglo.
console.log(ciudades.length)
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
console.log(ciudades[0])
console.log(ciudades[2])
console.log(ciudades[ciudades.length -1])
// Añade en última posición la ciudad de París.
ciudades.push('París')
console.log(ciudades)
// Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(ciudades[1])
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1] = 'Barcelona'
console.log(ciudades)


// FUNCIONES

//Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

const numeroPar = (num1) => {
  if (num1 % 2 === 0) {
    document.write('El número ES par')
  } else {
    document.write('El número NO ES par.')
  }
}


// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

const texto = (cadena) => {
  if (cadena === cadena.toUpperCase()) {
    console.log('El texto está formado solamente por mayúsculas')
  } else if (cadena === cadena.toLowerCase() ) {
    console.log('El texto está formado solamente por minúsculas')
  } else {
    console.log('El texto es una combinación entre mayúsculas y minúsculas')
  }
}

//Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

let a = parseInt(prompt('Ingrese un número'))
let b = parseInt(prompt('Ingrese otro número'))

const perimetroRectángulo = (a,b) => {
  const lados = a + b
  const perimetro = 2 * lados
  console.log(perimetro)
}

console.log(perimetroRectángulo(a,b))


// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

