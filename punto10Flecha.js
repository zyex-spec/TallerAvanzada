let alimentos = Array()
    
let creacionAlimentos = cantidad =>{
    for (var i = 0; i < cantidad; i++) {
        let tipos = ["vegetal","animal","insecto"]
        let nombre = "Alimento"+i.toString()
        let tipo = Math.floor(Math.random() * (2 - 0 + 1) + 0);
        let tipoAlimento
        for(var j = 0; j <= tipos.length; j++){
            tipo == j ? tipoAlimento = tipos[j] : tipoAlimento = tipoAlimento
        }
        nivelEnergia = Math.floor(Math.random() * (500 - 100) + 100);
        alimentos.push({nombre: nombre, tipo: tipoAlimento, nivelEnergia: nivelEnergia})
    }
        //console.log(alimentos)
}

creacionAlimentos(300)

let principal = (alimentos, callback) =>{
    setTimeout(()=>{
        let vegetalesMasDe200 = alimentos.filter(alimento=>alimento.tipo=="vegetal"&&alimento.nivelEnergia>200)
        console.log(vegetalesMasDe200)
        callback(vegetalesMasDe200)
    },5000)
}

principal(alimentos,alimentos=>{ 
    let acum = 0 
    alimentos.forEach(alimento=>acum = acum + alimento.nivelEnergia)
    console.log(`La sumatoria de energia de los vegetales con niveles de energia de mas de 200 son: ${acum}`)
})