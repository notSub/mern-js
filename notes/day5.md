     
    function anime(name,genre,rating){
     this.name= name;
     this.genre= genre;
     this.rating=rating;
     this.watcher=function (){console.log(`You are watching ${this.name} that has a rating of ${this.rating}`)};


}

const anime1= new anime("Naruto", "Shonen", 8.6);
console.log(anime1.name);
anime1.watcher();

const anime2= new anime("bleach","shonen,supernatural", 7.3);
anime2.watcher(); 



learning classes:

class Fruits{
    constructor(fruitname,price){
        this.name=fruitname;
        this.price=price;
        this.eater=function(){
            console.log(`You are eating ${this.fruitname} thats priced ${this.price}`);
        }
    }
    calculateprice(taxinper){
        let total=this.price + (this.price*taxinper/100);
        console.log(`Your total price including tax is ${total}`);
    }

}
const fruit1=new Fruits("mango", 36);
const fruit2=new Fruits("apple", 21);
const tax = 20;
console.log(fruit1.name);
fruit2.eater();
console.log(fruit2.price);
fruit2.calculateprice(tax);