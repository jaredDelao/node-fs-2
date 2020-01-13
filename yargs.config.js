const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    default: true,
    alias: 'c'
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento', {
        descripcion
    })
    .command('actualizar', 'Actualiza un elemento', {
        descripcion,
        completado

    })
    .command('borrar', 'Borra un elemento', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
