Pokemon Image fetcher using the pokeapi.co API:


index.js:

const myButton= document.getElementById("button");
const myImg=document.createElement("img");
document.body.appendChild(myImg);



async function pokeapi(name){
    const fetcher=fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    try{
    const res= await fetcher;
    if (res.ok!=true){
        throw new Error("This pokemon not found bro");
    }
    const data= await res.json();
    imager(data);
    
    }
    catch(error){
        console.error(error);
    }
    
}

myButton.onclick = function(){
    const myPoke= document.getElementById("pokemon").value.toLowerCase();
    pokeapi(myPoke);
}

function imager(data){
    
    myImg.src=data.sprites.front_default;
    myImg.classList.add("imgs");
    

}



index.html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FirstSite</title>
    <link rel="stylesheet" href="style.css">
</head>
<body >
    <div id="container">
        <h1>Pokemon Image Fetcher</h1>
        <input type="text" id="pokemon">
        <button id="button" >Fetch</button>
        



        


    </div>
     



    <script src="index.js"></script> 
</body>
</html>

style.css:

#pokemon{
    font-size: 1rem;
    border-color: red;
}

button{
    font-size: 1.2rem;
    border-radius: 50px;
    border: none;
    color: red;
    background-color: hsla(0, 0%, 0%, 0.411);
}
.imgs{
    display: block;
    width: 250px;
    height: auto;
}