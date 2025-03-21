// console.log("Hello World");
// FETCH API => performs asynchronous operation returning promise => promise can be fulfilled or rejected

// syntax
// fetch() => returns a Promise
// .then() => convert it from json into JavaScript object using json() method
// .then() => we display converted data to our webpage
// .catch() => we display error message if the request was rejected

// fetch("http://localhost:3000/articles")
// .then(function (response) {
//     return response.json();
    
// })

// .then(function(data) {
//     console.log(data);
    
// })

// .catch(function(err){
//     console.log(err);
    
// })

let base_url = "http://localhost:3000/products"

function displayProducts(products) {

    let product_catalog = document.getElementById('product-catalog')

    products.forEach(product => {
        let html = ` <div class="single-product">
            <h5>${product.title.substring(1, 20)}</h5>
            <img src="${product.image}" alt="${product.title}">
            <p>${product.description.substring(1, 20)}...</p>
            <div>${product.category}</div>
            <div>$ ${product.price}</div>
            <div id= "buttons">
            <button class= " one update">Update</button>
            <button id="delete-button" class= "one delete" onclick= "deleteProduct(${product.id})">Delete</button>
            </div>
        </div>`

        
        product_catalog.innerHTML += html
        
    });
    
}

// fetch("https://fakestoreapi.com/products/")
// .then(res => res.json())
// .then(data => console.log(data[0])
// )
// .catch(err => console.log(err)
// )

// fetch(url, {})
// .then(response object)
// .then(data)
// .catch(display error message if it is there)

function deleteProduct(product_id) {
    
    fetch(`${base_url}/${product_id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))


  
}

function updateProduct(product) {
    
}


    let form = document.getElementById('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let product_title = document.getElementById('title').value
        let product_image = document.getElementById('image').value
        let product_price = document.getElementById('price').value
        let product_description = document.getElementById('description').value
        let product_category = document.getElementById('category').value
    
        let product_object = {
            title: product_title,
            image: product_image,
            price: product_price,
            description: product_description,
            category: product_category
        }

        fetch(base_url, {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(product_object)
        })
        .then(res => res.json())
        .then(data => console.log(data)
        )
        .catch(err => console.log(err)
        )
        
    })


function deleteProduct(product_id) {
    fetch(`${base_url}/${product_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data)
    )
    .catch(err => console.log(err)
    )
}






// GET method

fetch(base_url)
.then(res => res.json()
)
.then(data => displayProducts(data))
.catch(err => console.log(err)
)
// POST method

fetch(base_url, {
     method: "POST",
     headers : {
        "Content-Type" : "application/json"
     },
     body: JSON.stringify ({key : value})
    })
.then(res => res.json())
.then(data => console.log(data)
.catch(err => console.log(err)
)

)
// DELETE method
fetch(`${base_url}/${id}`, {
    method: "DELETE"
})
.then(res => res.json())
.then(data => console.log("Product deleted successfully")
)
.catch(err => console.log(err)
)
// PATCH method

fetch(`${base_url}/${id}`, {
    method: "PATCH",
    header : {"Content-Type" : application/json},
    body: JSON.stringify
})
.then(res => res.json())
.then(data => console.log("Product deleted successfully")
)
.catch(err => console.log(err)
)

// CRUD => 
//     CREATE(post)
//     READ(get)
//     UPDATE(patch)
//     DELETE

// post && patch
// fetch(url, {method: "post",
//      headers: {
//         "Content-Type": "application/json"}, 
//         body: JSON.stringify()})

// .then(res => res.json())

// .then(data => displayProducts(data))

// fetch(url, {method: "patch",
//      headers: {"Content-Type": "application/json"},
//       body: JSON.stringify()})
