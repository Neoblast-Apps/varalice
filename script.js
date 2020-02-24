class Prodaja{
    constructor() {
        this.NizProdaja = [];
        this.dodajProizvod = function(proizvod){
            this.NizProdaja.push(proizvod)
        }
    }
}

class Proizvod{
    id = 0;
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
  
    loadShopItemsForRow()
}


var array_id = [];
loadShopItemsForRow = function (){
    
    this.sendHttpRequest()
}

sendHttpRequest = function(){
    var array = []

    var xhr = new XMLHttpRequest();
    var object = {
        key: "2",
        array_id: array_id
    }
    var object_string = JSON.stringify(object)
    xhr.open('POST', "https://graco-varalice.com/functions/get_artikls.php", true);// link servera
    xhr.onload = function () {
        //console.log(this.response)
        if (this.response.includes("broj") && this.response.includes("opis")) {
            var answer = this.response
            for(let i = 0;i < 3;i++){
                var start = answer.indexOf('{"broj',5)
                var json = answer.slice(0,start);
                answer = answer.slice(start,answer.length);
                var object = JSON.parse(json);
                array_id.push(object.id)
                array.push(object)
            }
            var object = JSON.parse(answer);
            array_id.push(object.id)
            array.push(object)
            console.log(array)


            var item = document.getElementById("main-container")
            var html = item.innerHTML +  '<div class="row">';
            for(let i = 0;i < 4;i++){
                html = html + '<div class="col-sm-12 col-md-6 col-lg-3"> <div class="sale"><div class="sale-image"><img src=' + array[i].broj + '.jpg> </div><div class="arrows"><div class="arrows-left"></div><div class="arrows-mid"></div><div class="arrows-right"></div></div>';
                html = html + '<h2>' + array[i].naslov + '</h2><p style="color:blue">';
                html = html + array[i].cijena + ' kn</p><p>Stanje: '
                html = html + array[i].stanje  + '</p><p>Opis: Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti, beatae vel voluptatum eveniet asperiores veniam, possimus doloremque maiores consectetur, dolores voluptatibus? Esse deserunt magnam qui deleniti ipsa a tempora.</p></div></div>';


            }
            html = html + "</div></div></div>"
            item.innerHTML = html;

        } else if(this.response.includes("error")){

        }else{

        }
    };
    xhr.send(object_string);
}

openCart = function (){
    if(document.getElementById("cart_main").style.display === "none"){
        document.getElementById("cart_main").style.display = "block"
    }else{
        document.getElementById("cart_main").style.display = "none"
    }

}

showNextImage = function(element){

    if(document.getElementById(element + "a")){
        document.getElementById(element + "a").setAttribute("src", element + "b.jpg")
        document.getElementById( element + "a").id =  element + "b"
        document.getElementById(element + "r").style.opacity = "0.3"
        document.getElementById(element + "l").style.opacity = "1"
        document.getElementById("1h").innerHTML = "2 / 2"
    }

}
showPrevImage = function(element){

    if(document.getElementById(element + "b")){
        document.getElementById(element + "b").setAttribute("src", element + "a.jpg")
        document.getElementById( element + "b").id =  element + "a"
        document.getElementById(element + "l").style.opacity = "0.3"
        document.getElementById(element + "r").style.opacity = "1"
        document.getElementById("1h").innerHTML = "1 / 2"
    }
}
