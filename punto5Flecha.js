const salarioMensual = 3500000
const comision = 1500000
const deduccion = 5

let vendedores = Array(
    {nombre: "David", edad: 29, cedula: "123456", cantidadLicenciasVendidas: 3}
)

let calcularSalarioMensual = vendedores =>{
    let vendedoresConSalario = vendedores.map(vendedor=>{
        let salarioTotalDevengado = salarioMensual+(vendedor.cantidadLicenciasVendidas*comision)
        vendedor.salario = salarioTotalDevengado - salarioTotalDevengado*(deduccion/100)
        return(vendedor)
    })
    vendedoresConSalario.forEach(vendedor=>{
        console.log(`El salario mensual del vendedor: ${vendedor.nombre} es ${vendedor.salario}`)
    })
}

calcularSalarioMensual(vendedores)