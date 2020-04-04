class Prodaja{
    constructor() {
        this.NizProdaja = [];
        this.dodajProizvod = function(proizvod){
            this.NizProdaja.push(proizvod)
        }
    }
}

class Proizvod{
    broj = 0;
    cijena = 0;
    opis_kratki = "";
    opis_cijeli = "";
    stanje = 0;

    constructor(id,cijena,opis_cijeli,stanje){
        this.id = id;
        this.cijena = cijena;
        this.opis_cijeli = opis_cijeli;
        this.stanje = stanje;
        this.napraviOpisKratki = function (){
            if(this.opis_cijeli.length > 50){
                this.opis_kratki = str1.slice(0, 48) + "   Pročitaj više...";
            }else{
                this.opis_kratki = this.opis_cijeli;
            }
        }
    }
}

window.onload = function(){
    Prodaja = new Prodaja();
    Proizvod = new Proizvod(1,1,"add",12);
    Proizvod.napraviOpisKratki();
    Prodaja.dodajProizvod(Proizvod)
    getSaleBlock();
    setTimeout(()=>{

        getSaleBlock()
    },1500)
    
}


var array_id = [];
var items_id = [];
var cart_array = [];

openCart = function (){
    if(document.getElementById("cart_main").style.display === "block"){
        document.getElementById("cart_main").style.display = "none"
    }else{
        document.getElementById("cart_main").style.display = "block"
    }

}

addItemToCart = function(id){
    json = getItemFromArray(id);
    cart_array.push(json);
    item = document.getElementById(id + "b_dodaj")

    item.innerHTML = "Dodano";
    item.style.opacity = 0;

}

getItemFromArray  = function(id){
    for(let i = 0; i < items_id.length;i++){
        if(items_id[i].broj === id.toString())
            return items_id[i];
    }
}

showNextImage = function(element){

    if(document.getElementById(element + "a")){
        document.getElementById(element + "a").setAttribute("src","images/" + element + "b.jpeg")
        document.getElementById( element + "a").id =  element + "b"
        document.getElementById(element + "r").style.opacity = "0.3"
        document.getElementById(element + "l").style.opacity = "1"
        document.getElementById(element + "h").innerHTML = "2 / 2"
    }

}

showPrevImage = function(element){

    if(document.getElementById(element + "b")){
        document.getElementById(element + "b").setAttribute("src","images/" + element + "a.jpeg")
        document.getElementById( element + "b").id =  element + "a"
        document.getElementById(element + "l").style.opacity = "0.3"
        document.getElementById(element + "r").style.opacity = "1"
        document.getElementById(element +"h").innerHTML = "1 / 2"
    }
}

getSaleBlock = function(){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "https://graco-varalice.com/functions/get_artikls.php", true);
    xhr.onload = function () {
        var json = JSON.parse(this.response);
        console.log(json);
        for(let i = 0; i < json.length;i++){
            array_id.push(json[i].broj);
            items_id.push(json[i])
        }
        createHTML(json);
    }

    var object = {
        key: 2,
        array_id: array_id

    }
    xhr.send(JSON.stringify(object));

}

createHTML = function(json){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "https://graco-varalice.com/functions/createHTML.php", true);
    xhr.onload = function () {
        //console.log(this.response)
        var item = document.getElementById("main-container")
        var html = item.innerHTML +  this.response;
        item.innerHTML = html;
    }
    var object = {
        key: 2,
        _array: json,
    }
    xhr.send(JSON.stringify(object));
}
