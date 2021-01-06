// Requires
const colors = require('colors/safe');
 
const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( resultado => console.log(`Archivo creado: ${colors.green(resultado)}`))
            .catch( error => console.log(error));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log("Comando no reconocible");
        break;
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];



