console.log('--- Démarrage de l\'application ---');

setTimeout(() => {
    console.log('Premier setTimeout');
}, 2000);

setTimeout(() => {
    console.log('Deuxieme setTimeout');
}, 0);

console.log('--- fin de l\'application ---');
