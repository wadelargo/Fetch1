fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then((data) => {

    let productsDiv = document.getElementById('products')
    let titleH1 = document.getElementById('title')

    // titleH1.innerText = data.total + "Products"

    data.products.forEach((product) => {
        let productDiv = document.createElement('a')
        productDiv.href="viewProducts/products.html?product=" + product.id
        productDiv.className = "product"

        let titleH4 = document.createElement('h4')
        titleH4.className = "title"

        let descriptionDiv = document.createElement('div')
        descriptionDiv.className = "description"

        let brandDiv = document.createElement('div')
        brandDiv.className = "brand"

        let image = document.createElement('img');
        image.className = "image";
        image.src = product.images[0];

        // let priceDiv = document.createElement('div')
        // priceDiv.className = "price"
        // priceDiv.innerText = `$${product.price}`


    
        brandDiv.innerText = product.brand
        descriptionDiv.innerText = product.description
        titleH4.innerText = product.title
        
        productDiv.append(titleH4)
        productDiv.append(descriptionDiv)
        productDiv.append(brandDiv)
        productDiv.append(image)
        // productDiv.append(priceDiv)


        productsDiv.append(productDiv)
    })

})