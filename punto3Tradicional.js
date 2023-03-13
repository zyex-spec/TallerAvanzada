function calcularTemperaturaMedia(temperaturaMinima,temperaturaMaxima)
{
    return ((temperaturaMaxima+temperaturaMinima)/2)
}

let temperaturaMedia = calcularTemperaturaMedia(27,34)
console.log(`La temperatura media es de: ${temperaturaMedia} °C`)