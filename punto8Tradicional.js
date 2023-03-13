let mapas = Array(

    )
    
    function creacionPlanetas(cantidad)
    {
        for (var i = 0; i < cantidad; i++) 
        {
            let nombrePlaneta = "Planeta"+i.toString()
            let grados = Math.floor(Math.random() * (100 - 0) + 0);
            let minutos = Math.floor(Math.random() * (100 - 0) + 0);
            let segundos = Math.floor(Math.random() * (100 - 0) + 0);
            let latitud = grados.toString()+"°"+minutos.toString()+"’"+segundos.toString()+"’’ N"
            grados = Math.floor(Math.random() * (100 - 0) + 0);
            minutos = Math.floor(Math.random() * (100 - 0) + 0);
            segundos = Math.floor(Math.random() * (100 - 0) + 0);
            let longitud = grados.toString()+"°"+minutos.toString()+"’"+segundos.toString()+"’’ E"
            let nivelDeOxigeno = Math.floor(Math.random() * (100 - -100) + -100);
            let volumenTotalAgua = Math.floor(Math.random() * (100000000 - -100000000) + -100000000);
            if(volumenTotalAgua<0){
                volumenTotalAgua = 0
            }
            mapas.push({nombrePlaneta: nombrePlaneta, latitud: latitud, longitud: longitud, nivelDeOxigeno: nivelDeOxigeno, volumenTotalAgua: volumenTotalAgua})
        }
        console.log(mapas)
    }

creacionPlanetas(15)

function sumarCantidadAgua(planetas){
let acum = 0
    planetas.forEach(function(planeta){
        acum = acum + planeta.volumenTotalAgua
    })
    return acum
}

function calcularOxigeno(planetas){
    let acum = 0
        planetas.forEach(function(planeta){
            acum = acum + planeta.nivelDeOxigeno
        })
        return acum*100
    }

function calcularOxigenoNegativo(planetas){
    let oxigenoNegativo = planetas.filter(function(planeta){
        return(planeta.nivelDeOxigeno<0)
    })
    return oxigenoNegativo
}
function calcularAguaNegativa(planetas){
    let aguaNegativa = planetas.filter(function(planeta){
        return(planeta.volumenTotalAgua==0)
    })
    return aguaNegativa
}

console.log("La cantidad total de agua de los 15 planetas es: "+sumarCantidadAgua(mapas)+" millas cúbicas")
console.log("El total de oxigeno de los 15 planetas por 100 es: "+calcularOxigeno(mapas)+ "%")
console.log("Los planetas que tienen un nivel de oxigeno negativo son: \n",calcularOxigenoNegativo(mapas))
console.log("Los planetas que no tienen agua son: \n",calcularAguaNegativa(mapas))