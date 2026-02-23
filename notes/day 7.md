Setters and Getters:
class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    set firstname(newfirstname){
        if(typeof(newfirstname)==typeof("")){
            this._firstname=newfirstname
        }
        else console.error("The name cannot have a number")
    }
    set firstname(newfirstname){
        if(typeof(newfirstname)==typeof("")){
            this._firstname=newfirstname;
        }
        else console.error("The name cannot have a number");
    }set lastname(newlastname){
        if(typeof(newlastname)==typeof("")){
            this._lastname=newlastname;
        }
        else console.error("The name cannot have a number");
    }
    set age(newage){
        if(typeof(newage)==typeof(3)){
            this._age=newage;
        }
        else console.error("The age cannot be a string");
    }
    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._lastname;
    }
    get age(){
        return this._age;
    }
    
}



const person1= new Person("subhash",'Dasari',34);
console.log();

/ nested objects:
class myAnime{
    constructor(animename,animerating,airdate,...genre){
        this.animename=animename;
        this.animerating=animerating;
        this.airdate=airdate;
        this.genre= new myGenre(...genre);

    }
}
class myGenre{
    constructor(...genres){
        this.genres=genres;
            
        }
    }



const anime1= new myAnime('naruto',9,2005,'shonen','isekai','horror','fantasay', 8);
console.log(anime1);


ARRAY OF OBJEXTS;
const fruits = [{name: "apple", color: "red", calories: 95},
{name: "orange", color: "orange", calories: 45},
{name: "banana", color: "yellow", calories: 105},
{name: "coconut", color: "white", calories: 159},
{name: "pineapple", color: "yellow", calories: 37}];


const maxCalFruit= fruits.reduce((acc,fruit)=>{acc=Math.max(acc.calories,fruit.calories);return acc; }
);
