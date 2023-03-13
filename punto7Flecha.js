let numeros = []

let  crearNumeros = cantidad =>{
    for (var i = 0; i < cantidad; i++) {
        let numero = Math.floor(Math.random() * (10000 - -10000) + -10000);
        numeros.push(numero)
    }
    console.log(numeros)
}

let separarPositivos = numeros =>{
    let positivos = numeros.filter(numero=>numero>0)
    console.log(positivos)
    return positivos
}

let separarNegativos = numeros =>{
    let negativos = []
    let filtro = numeros.filter(numero=>numero<0)
    console.log(filtro)
    filtro.forEach(numero=>negativos.push(Math.abs(numero)))
    console.log(negativos)
    return negativos
}

let calcularMasCercanoA0 = (numerosPositivos,numerosNegativos) =>{
    let menor
    let menorPositivos = numerosPositivos[0]
    numerosPositivos.forEach(numero=>numero < menorPositivos ? menorPositivos = numero : menorPositivos = menorPositivos)
    let menorNegativos = numerosNegativos[0]
    numerosNegativos.forEach(numero=>numero < menorNegativos ? menorNegativos = numero : menorNegativos = menorNegativos)
    menorPositivos < menorNegativos ? menor = menorPositivos : menor = menorNegativos
    console.log(`El numero mas cercano a 0 es: ${menor}`)
}

crearNumeros(50)
calcularMasCercanoA0(separarPositivos(numeros),separarNegativos(numeros))