
  var products =[
    {
        id : "1",
        source:"img/product-img/product1.jpg",
        name:"Chaise Jeans XS",
        price:19.99,
        kind:"decoration",
        description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
    },
    {
        id : "2",
        source:"img/product-img/pro-big-2.jpg",
        name:"Chaise Mamy",
        price:79.99,
        kind:"decoration",
        description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
    },
    {
        id : "3",
        source:"img/product-img/product6.jpg",
        name:"Lampe Accorche",
        price:69.99,
        kind:"decoration",
        description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
    },
    {
        id : "4",
        source:"img/product-img/product2.jpg",
        name:"Vase Polik 1",
        price:9.99,
        kind:"decoration",
        description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
    },
    {
        id : "5",
        source:"img/product-img/product1.jpg",
        name:"Chaise Jeans ",
        price:19.99,
        kind:"salon",
        description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
    },
    {
        id : "6",
        source:"img/product-img/product4.jpg",
        name:"Table Italien",
        price:59.99,
        kind:"decoration",
        description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
    },
    {
        id : "7",
        source:"Products/cuisine/model1/3.jpg",
        name:"Cuisine Rouge ",
        price:219.99,
        kind:"cuisine",
        description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
    },
    {
        id : "8",
        source:"Products/cuisine/model2/1.jpg",
        name:"Cuisine Simple ",
        price:379.99,
        kind:"cuisine",
        description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
    },
    {
        id : "9",
        source:"Products/cuisine/model3/1.jpg",
        name:"Cuisine Ete Americain",
        price:669.99,
        kind:"cuisine",
        description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
    },
    {
        id : "10",
        source:"Products/cuisine/model4/1.jpg",
        name:"Cuisine Sombre",
        price:629.99,
        kind:"cuisine",
        description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
    },
    {
        id : "11",
        source:"Products/cuisine/model5/1.jpg",
        name:"Cuisine Foret ",
        price:619.99,
        kind:"cuisine",
        description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
    },
    {
        id : "12",
        source:"Products/cuisine/model6/1.jpg",
        name:"Cuisne Soiree",
        price:459.99,
        kind:"cuisine",
        description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
    }

  
] 

function showProducts(){
    products.forEach(element => {
     var carddiv = document.getElementById("inject") ; 
     carddiv.innerHTML += `
     <div class="card">
     <img src="${element.source}" alt="Denim Jeans" style="width:100%">
     <h1>${element.name}</h1>
     <p class="price">$${element.price}</p>
     <p>${element.description}</p>
     <p><button onClick="panier(${element.id})">Add to Cart</button></p>
     </div>
     
     `
     });
}
function del() {

    var carddiv = document.getElementById("inject") ; 
     carddiv.innerHTML= '';
    
}
function filtrer(p){
    del();
    var carddiv = document.getElementById("inject"); 
    products.forEach(element => {
        if (element.kind === p) {
            
            carddiv.innerHTML += `
            <div class="card">
            <img src="${element.source}" alt="Denim Jeans" style="width:100%">
            <h1>${element.name}</h1>
            <p class="price">${element.price}</p>
            <p>${element.description}</p>
            <p><button onClick="panier(${element.id})">Add to Cart</button></p>
            </div>
            `

           }
        });    
}


var total = 0 ;
function panier(p) {
    var divPanier = document.getElementById("panier"); 
    var divPrix = document.getElementById("prix"); 
            divPanier.innerHTML +=`
            <tr>
            <td>${products[p-1].name}</td>
            <td><img src="${products[p-1].source}" width: 50;height: 50;></td>
            <td>$${products[p-1].price}</td>
            <td><a onclick="remove(this,${products[p-1].price})">❌</a></td>
            </tr>
            `
    total += products[p-1].price;
    divPrix.innerHTML = `${total}` ;// Pour afficher le prix
    
       
   }
function remove(el,prixx) {
    var element = el.parentElement.parentElement; 
    var divPrix = document.getElementById("prix"); 
    element.remove(); //Enlever la <tr></tr> 

    total -= prixx ;
    divPrix.innerHTML = `${total}` ; // Mettre A jour Prix

  }


