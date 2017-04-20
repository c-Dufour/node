var asyncAdd = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            }else{
                reject('Les arguments doivent être des nombres');
            }
        },500)
    });
};

var tt = asyncAdd(4,9);

tt.then((res)=>{
    console.log(res);
    return asyncAdd(res,9);
}).then((res) => {
    console.log(res);
}).catch((err)=> {
    console.log(err);
});


/*var somePromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve('Promesse remplie');
        reject('Promesse non tenue');
    },1500);
    
});

somePromise.then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err);
});*/