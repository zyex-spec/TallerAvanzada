let navesGuerra = Array("ARQ2555: Sara Bel-Sun","ARQ2556: Nodin Chavdri","ARQ2557: Finn")

function buscarCodigo(palabraClave,navesGuerra)
{
    let encontrado = false
    navesGuerra.forEach(function(nave){
        let elementosNave = dividirElemento(nave,": ")
        if(palabraClave == elementosNave[0])
        {
            console.log(`El nombre de el piloto con la nave: ${palabraClave} es ${elementosNave[1]}`)
            encontrado = true
        }
    })
    if (encontrado == false)
    {
        console.log(`No se encontro la nave con codigo: ${palabraClave}`)
    }
}

function dividirElemento(elemento,separador)
{
    let elementosNave = elemento.split(separador);
    return elementosNave
}
buscarCodigo("ARQ2557",navesGuerra)
