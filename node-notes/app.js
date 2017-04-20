console.log("Application node-note démarrée");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
/*notes.listNote();

console.log(_.isString('juventus'));

var user = os.userInfo();
var message  = `Fichier créé par ${user}`;

fs.appendFile('test.txt', message,(err)=>{
    if(err) return console.log('Erreur dans la création de fichier');
    console.log('fichier créé');
});*/
//var command = process.argv[2];
var command = yargs.argv._[0];
var titleOptions = {
        describe: 'titre de la note',
        alias: 't',
        required: true 
    };
const argv = yargs
.command(`add`, `ajoute une note`,{
    title: titleOptions,
    body: {
        describe: 'body de la note',
        alias: 'b',
        required: false 
    }
})
.command(`read`, `lis une note`,{
    title: titleOptions,
    body: {
        describe: 'body de la note',
        alias: 'b',
        required: false 
    }
})
.command(`list`, `liste les notes`,{
    title: titleOptions,
    body: {
        describe: 'body de la note',
        alias: 'b',
        required: false 
    }
})
.command(`remove`, `Supprime une note`,{
    title: titleOptions,
    body: {
        describe: 'body de la note',
        alias: 'b',
        required: false 
    }
})
.help()
.argv;

if(command == ('add')){
   var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log("Note ajouté avec succes : ");
        notes.logNote(note);
    }else{
        console.log("Impossible car ce titre existe déjà")
    }
}else if(command == ('list')){
    notes.listNote();

}else if(command == ('read')){
    var note = notes.readNote(argv.title);
    if(note){
        notes.logNote(note);

    }else{
        console.log("Aucune note ne correspond à ce titre");
    }


}else if(command == ('remove')){
    note = notes.removeNote(argv.title);
    var message = (note) ? 'Note supprimé' : 'La note n existe pas';
    console.log(message);

}else{
    console.log("Commande inconnue");
}

/*switch (command) {
    case 'add':
    console.log("Ajoute une note :");        
        break;
    case 'add':
        
        break;
    case 'add':
        
        break;
    default:
        break;
};*/