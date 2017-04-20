const express = require('express');

const app = express();

app.get('/',(req,res) => {
   // res.send('Hello');
   res.send({
       name: 'Paolo',
       age: 21
   });
});

app.get('/about',(req,res)=>{
    res.send('<p><em>About page</em></p>')
});
app.listen(3000,()=>{
    console.log('Serveur ouvert sur le port 3000');
});