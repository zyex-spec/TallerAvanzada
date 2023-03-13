let clones = Array()
    
let creacionClones = cantidad =>{
    for (var i = 0; i < cantidad; i++) {
        codigo = Math.floor(Math.random() * (10000 - 1000) + 1000);
        edad = Math.floor(Math.random() * (30 - 20) + 20);
        clones.push({codigo: codigo, edad: edad})
    }
console.log(clones)
}
    
let calcularEdadMayor = clones =>{
    let mayor = 0
    let cont = 0
    clones.forEach(clon=>clon.edad > mayor ? mayor = clon.edad : mayor = mayor)
    clones.forEach(clon=>clon.edad == mayor ? cont = cont + 1 : cont = cont)
    console.log(`La edad mayor es ${mayor} y se repite ${cont} veces`)
}
    
creacionClones(30)
calcularEdadMayor(clones)