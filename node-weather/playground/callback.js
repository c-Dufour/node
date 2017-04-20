var getUser = (id,callback) => {
    var user = {
        id:id,
        name: 'Rudy'
    };
    //callback(user); // execution immediate /synchrone
    
    //execution asynchrone
    setTimeout(()=>{
        callback(user);
    },2000)
};

getUser(35,(userObject) => {
    console.log(userObject);
});