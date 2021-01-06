// Requires
const colors = require('colors');
const fs = require('fs');
const { Module } = require('module');

let crearArchivo = ( base, limite = 10 ) => {
    return new Promise( (resolve, rejects) => {
        
        if( !Number(base)) {
            rejects(`El valor introducido ${ base } no es un número`);
            return;
        }
        else if( !Number(limite)) {
            console.log(`El valor introducido ${ limite } no es un número`);
            return;
        }

        let data = '';

        for(let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if(err) rejects(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

let listarTabla = (base, limite = 10) => {
    
    if( !Number(base)) {
        console.log(`El valor introducido ${ base } no es un número`);
        return;
    }
    else if( !Number(limite)) {
        console.log(`El valor introducido ${ limite } no es un número`);
        return;
    }

    console.log("===============================".green);
    console.log(`========= Tabla del ${base} =========`.green);
    console.log("===============================".green);
    for(i=1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
    }
}


module.exports = { crearArchivo, listarTabla }


