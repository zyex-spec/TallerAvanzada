let alimentos = Array(

    )
    
    function creacionAlimentos(cantidad)
    {
        for (var i = 0; i < cantidad; i++) 
        {
            let tipos = ["vegetal","animal","insecto"]
            let nombre = "Alimento"+i.toString()
            let tipo = Math.floor(Math.random() * (2 - 0 + 1) + 0);
            if (tipo == 0 ){
                tipo = tipos[0]
            }
            if (tipo == 1 ){
                tipo = tipos[1]
            }
            if (tipo == 2 ){
                tipo = tipos[2]
            }
            nivelEnergia = Math.floor(Math.random() * (500 - 100) + 100);
            alimentos.push({nombre: nombre, tipo: tipo, nivelEnergia: nivelEnergia})
        }
        //console.log(alimentos)
    }

creacionAlimentos(300)

function principal(alimentos, callback)
{
    setTimeout(function(){
        let vegetalesMasDe200 = alimentos.filter(function(alimento){
            return(alimento.tipo=="vegetal"&&alimento.nivelEnergia>200)
        })
        console.log(vegetalesMasDe200)
        callback(vegetalesMasDe200)
    },5000)
}

principal(alimentos,function(alimentos){ //declarando el callback
    let acum = 0 
    alimentos.forEach(alimento=>acum = acum + alimento.nivelEnergia)
    console.log(`La sumatoria de energia de los vegetales con niveles de energia de mas de 200 son: ${acum}`)
})