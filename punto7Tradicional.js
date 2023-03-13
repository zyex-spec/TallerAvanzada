let numeros = []

function crearNumeros(cantidad)
{
    for (var i = 0; i < cantidad; i++) 
    {
        let numero = Math.floor(Math.random() * (10000 - -10000) + -10000);
        numeros.push(numero)
    }
    console.log(numeros)
}

function separarPositivos(numeros)
{
let positivos = numeros.filter(function(numero){
    return(numero>0)
})
    console.log(positivos)
    return positivos
}

function separarNegativos(numeros)
{
let negativos = []
let filtro = numeros.filter(function(numero){
    return(numero<0)
})
    console.log(filtro)
    filtro.forEach(function(numero){
        negativos.push(Math.abs(numero))
    })
    console.log(negativos)
    return negativos
}
function calcularMasCercanoA0(numerosPositivos,numerosNegativos)
{
    let menor
    let menorPositivos = numerosPositivos[0]
        numerosPositivos.forEach(function(numero){
            if (numero < menorPositivos)
            {
                menorPositivos = numero
            }
        })
    let menorNegativos = numerosNegativos[0]
        numerosNegativos.forEach(function(numero){
            if (numero < menorNegativos)
            {
                menorNegativos = numero
            }
        })
    if (menorPositivos < menorNegativos){
        menor = menorPositivos
    }
    else{
        menor = menorNegativos
    }
        console.log(`El numero mas cercano a 0 es: ${menor}`)
}

crearNumeros(50)
calcularMasCercanoA0(separarPositivos(numeros),separarNegativos(numeros))