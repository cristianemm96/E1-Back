const fs = require("fs");
const prompts = require('prompts');
const opciones = require('./opcionesGastos')

let cargar = ()=>
fs.readFile('gastos.txt', "utf-8",(err)=>{
    if(err){
        fs.writeFile('gastos.txt', 'Mis gastos:\n', err=>{
            if(err) throw err
        })       
    }
})


const procesarEntrada = (opcion)=>{
    cargar()
    console.clear()
    switch (opcion) {
        case 1:
            (async () => {
                const response = await prompts({
                  type: 'text',
                  name: 'value',
                  message: 'Ingrese nombre del gasto seguido del monto, con el formato nombre-monto',
                });
                let val = response.value + "\n"
                opciones.agregarGasto(val, menu)
            })();
            break;
        case 2:
            opciones.mostrarGastos(menu)
            break;
        default:
            console.log("Opcion incorrecta");
            menu();
            break;
    }
}

const menu = ()=>(async () => {
    const response = await prompts({
      type: 'number',
      name: 'value',
      message: 'Presione 1 para ingresar gastos. Presione 2 para visualizar gastos. Presione 3 para eliminar los gastos',
    });
    console.clear()
    procesarEntrada(response.value);
})();
menu()
