const fs = require("fs");

let agregarGasto = (gasto, cb)=>{
    fs.appendFile("gastos.txt",gasto,function (err) {
        if (err) throw err;
        console.log('Guardado!');
        console.clear()
        cb()
})}

let mostrarGastos = (cb)=>{
    fs.readFile( "gastos.txt", "utf-8", (err,data)=>{
        if(err) throw err
        else{
            console.log(data);
            cb()
        }
    })
}

let mostrarOpcionIncorrecta = (cb)=>{
    console.log("Opcion incorrecta");
    cb();
}

let cargar = ()=>
fs.readFile('gastos.txt', "utf-8",(err)=>{
    if(err){
        fs.writeFile('gastos.txt', 'Mis gastos:\n', err=>{
            if(err) throw err
        })       
    }
})

module.exports = {
    agregarGasto,
    mostrarGastos,
    mostrarOpcionIncorrecta,
    cargar
}