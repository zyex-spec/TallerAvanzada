let energiaSables = [2,4,-8,5,-6]

function contabilizarEnergiaSables(sables)
{
    let sablesNegativos = sables.filter(function(sable){
        return(sable<0)
    })
    return sablesNegativos.length
}

let cantidadSablesDefectuosos = contabilizarEnergiaSables(energiaSables)
console.log(`La cantidad de sables defectuosos con energía negativa fue de: ${cantidadSablesDefectuosos}`)