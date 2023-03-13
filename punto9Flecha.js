let crearEstudiante = (nombre,planeta,edad,estatura,clasificarEstudiante) =>{
    setTimeout(()=>{
        let estudiante = {
            nombre:nombre,
            edad:edad,
            planeta:planeta,
            estatura:estatura
        }
        clasificarEstudiante(estudiante.edad)
    },1000)
}

crearEstudiante("Pedro","Marte",18,1.86,edad=>edad<15 ? console.log("Su edad es "+edad+" tu clase sera manejo de la fuerza") : console.log("Su edad es "+edad+" tu clase sera uso del sable"))