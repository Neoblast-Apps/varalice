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


    var txt = document.createTextNode(" This text was added to the DIV.");
    var item = this.document.getElementById("main-container")
    console.log(item)

    var html = '<div class="row"><div class="col-sm-12 col-md-6 col-lg-3"> <div class="sale"><div class="sale-image"><img src="1b87323a-d93c-44af-81a1-f06b4f06e5c8.jpg"> </div><div class="arrows"><div class="arrows-left"></div><div class="arrows-mid"></div><div class="arrows-right"></div></div><h2>addidas X233p</h2><p style="color:blue">88.72 kn</p><p>Stanje: 3</p><p>Opis: Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti, beatae vel voluptatum eveniet asperiores veniam, possimus doloremque maiores consectetur, dolores voluptatibus? Esse deserunt magnam qui deleniti ipsa a tempora.</p></div></div><div class="col-sm-12 col-md-6 col-lg-3"><div class="sale"></div></div><div class="col-sm-12 col-md-6 col-lg-3"><div class="sale"></div></div><div class="col-sm-12 col-md-6 col-lg-3"><div class="sale"></div></div></div></div>'
    item.innerHTML = html;
    item.innerHTML += html;   
}

loadShopItemsForRow = function (){
    var data = new FormData();
    data.append("key","2");// argument za poslat serveru

    var xhr = new XMLHttpRequest();
    xhr.open('POST', "https://www.spotted.com.hr/api/index.php", true);// link servera
    xhr.onload = function () {
        var res = JSON.parse(this.response);
        if (res) {
            console.log(res)
            //alert(res.message);// napravi nes
        } else {
            console.log(data)
            //alert(res.message);
        }
    };
    xhr.send(data);
}

openCart = function (){
    if(document.getElementById("cart_main").style.display === "none"){
        document.getElementById("cart_main").style.display = "block"
    }else{
        document.getElementById("cart_main").style.display = "none"
    }

}