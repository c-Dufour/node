var square = x => x * x;

var user = {
    name: "paolo",
    sayHi: () => {
        console.log(`Bonjour je suis xxx ${this.name}`);
    },
    sayHello: function(){
        console.log(`Bonjour je suis xxx ${this.name}`);
    },
    sayCiao(){
        console.log(`Bonjour je suis xxx ${this.name}`);        
    }
}
console.log(square(9));
user.sayHi();
user.sayHello();
user.sayCiao();