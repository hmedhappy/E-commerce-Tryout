
  alert("heloooo");



function fetchProducts(){
    alert("temchi") ;
    var products =[
        {
            id ="1",
            source="img/product-img/product1.jpg",
            name="Tailored Jeans",
            price="$19.99",
            description="Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
        },
        {
            id ="1",
            source="img/product-img/product1.jpg",
            name="Tailored Jeans",
            price="$19.99",
            description="Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
        },
        {
            id ="1",
            source="img/product-img/product1.jpg",
            name="Tailored Jeans",
            price="$19.99",
            description="Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
        }
    ]
    var carddiv = document.getElementsByClassName("grid-container").innerHTML ;
    var newdiv = '';
    products.forEach(element => {
        carddiv += `
        <div class="card">
        <img src="${element.source}" alt="Denim Jeans" style="width:100%">
        <h1>${element.name}</h1>
        <p class="price">${element.price}</p>
        <p>${element.description}</p>
        <p><button onClick="add(${element.id})">Add to Cart</button></p>
        </div>
        
        `
        
    });

    console.log(newdiv);

        
}