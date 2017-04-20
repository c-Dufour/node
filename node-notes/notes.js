console.log(' fichier notes.js chargé');
var fs = require('fs');
/*var eleves = {
    nom: "robin",
    note: 15
};
var sum = (a,b) => a+b;
module.exports = {sum,eleves};*/
var fetchNote = ()=>{

    try {
        var notes = fs.readFileSync('notes-data.json');
        return  JSON.parse(notes);
    } catch (e) {
        return [];
    }
   
};
var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
var addNote = (title,body)=>{
    var notes = fetchNote();

        var note = {
        title: title,
        body: body
    };
    //filtrer les notes

    var duplicatedNotes = notes.filter((element) => {
        return element.title === note.title;
    });
    if(duplicatedNotes.length == 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }else{
        return undefined;
    }
        


};

var listNote = ()=>{
    var notes = fetchNote();
    notes.forEach(function(element) {
        return logNote(element);
    });

};

var readNote = (title)=>{
    var notes = fetchNote();
    var filter = notes.filter((item) => item.title === title);

    /*if(filter.length > 0){
      console.log("body de la note : "+filter[0].body);
    }else{
        console.log("No notes on this title");
    }*/
    return filter[0];

};

var removeNote = (title)=>{
    var originalNotes = fetchNote();
   /* notes.forEach(function(element) {
        if(element.title === title){
            notes.splice(notes.indexOf(element), 1);
            return notes;
        }else{
            return undefined;
        }
    });*/
    var notes = originalNotes.filter(note => note.title !== title);
    saveNotes(notes);
    return originalNotes.length !== notes.length;

};

var logNote = (note) => {
        console.log("--------------");
        console.log(`Titre: ${note.title}`);
        console.log(`body: ${note.body}`);
        console.log("--------------");
};

module.exports = {
    addNote,
    listNote,
    readNote,
    logNote,
    removeNote
};
