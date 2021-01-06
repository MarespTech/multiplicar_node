const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                            .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
                            .command('crear', 'Crea el archivo de la tabla y lo guarda en el folder de tablas', opt)
                            .help()
                            .argv;

module.exports = { argv }