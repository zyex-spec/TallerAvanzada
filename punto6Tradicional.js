let clones = Array(

)

function creacionClones(cantidad)
{
    for (var i = 0; i < cantidad; i++) 
    {
        codigo = Math.floor(Math.random() * (10000 - 1000) + 1000);
        edad = Math.floor(Math.random() * (30 - 20) + 20);
        clones.push({codigo: codigo, edad: edad})
    }
    console.log(clones)
}

function calcularEdadMayor(clones)
{
let mayor = 0
let cont = 0
    clones.forEach(function(clon){
        if (clon.edad > mayor)
        {
            mayor = clon.edad
        }
    })
    clones.forEach(function(clon){
        if (clon.edad == mayor)
        {
            cont = cont + 1
        }
    })
    console.log(`La edad mayor es ${mayor} y se repite ${cont} veces`)
}

creacionClones(30)
calcularEdadMayor(clones)