let navesGuerra = Array("ARQ2555: Sara Bel-Sun","ARQ2556: Nodin Chavdri","ARQ2557: Finn")

let buscarCodigo = (palabraClave,navesGuerra) =>{
    let encontrado = false
    navesGuerra.forEach(nave =>{
        let elementosNave = dividirElemento(nave,": ")
        if(palabraClave == elementosNave[0]){
            console.log(`El nombre de el piloto con la nave: ${palabraClave} es ${elementosNave[1]}`)
            encontrado = true
        }
        })
    encontrado == false ? console.log(`No se encontro la nave con codigo: ${palabraClave}`) : console.log("")
}

let dividirElemento = (elemento,separador) => elementosNave = elemento.split(separador);
buscarCodigo("ARQ2556",navesGuerra)