let mapas = Array()
    
let numeroRandom = (min,max) => Math.floor(Math.random() * (max - min) + min);

let creacionPlanetas = cantidad =>{
    for (var i = 0; i < cantidad; i++) {
        let nombrePlaneta = "Planeta"+i.toString()
        let grados = numeroRandom(0,100)
        let minutos = numeroRandom(0,100)
        let segundos = numeroRandom(0,100)
        let latitud = grados.toString()+"°"+minutos.toString()+"’"+segundos.toString()+"’’ N"
        grados = numeroRandom(0,100)
        minutos = numeroRandom(0,100)
        segundos = numeroRandom(0,100)
        let longitud = grados.toString()+"°"+minutos.toString()+"’"+segundos.toString()+"’’ E"
        let nivelDeOxigeno = numeroRandom(-100,100)
        let volumenTotalAgua = numeroRandom(-100000000,100000000)
        volumenTotalAgua<0 ? volumenTotalAgua = 0 : volumenTotalAgua = volumenTotalAgua
        mapas.push({nombrePlaneta: nombrePlaneta, latitud: latitud, longitud: longitud, nivelDeOxigeno: nivelDeOxigeno, volumenTotalAgua: volumenTotalAgua})
    }
console.log(mapas)
}

creacionPlanetas(15)

let sumarCantidadAgua = planetas =>{
    let acum = 0
    planetas.forEach(planeta=>acum = acum + planeta.volumenTotalAgua)
    return acum
}

let calcularOxigeno = planetas =>{
    let acum = 0
    planetas.forEach(planeta=>acum = acum + planeta.nivelDeOxigeno)
    return acum*100
}

let calcularOxigenoNegativo = planetas =>{
    let oxigenoNegativo = planetas.filter(planeta=>planeta.nivelDeOxigeno<0)
    return oxigenoNegativo
}
let calcularAguaNegativa = planetas =>{
    let aguaNegativa = planetas.filter(planeta=>planeta.volumenTotalAgua==0)
    return aguaNegativa
}

console.log("La cantidad total de agua de los 15 planetas es: "+sumarCantidadAgua(mapas)+" millas cúbicas")
console.log("El total de oxigeno de los 15 planetas por 100 es: "+calcularOxigeno(mapas)+ "%")
console.log("Los planetas que tienen un nivel de oxigeno negativo son: \n",calcularOxigenoNegativo(mapas))
console.log("Los planetas que no tienen agua son: \n",calcularAguaNegativa(mapas))