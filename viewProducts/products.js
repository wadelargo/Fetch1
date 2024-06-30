let searchQuery = window.location.search
let urlParams = new URLSearchParams(searchQuery)

let product = urlParams.get('product')

fetch('https://dummyjson.com/products/' + product)
.then((res) => res.json())
.then((data) =>{

  document.getElementById('title').innerText = data.title

  document.getElementById('thumbnail').setAttribute('src', data.thumbnail)

  document.getElementById('description').innerText = data.description

  document.getElementById('price').innerText = `$ ${data.price}` 

  document.getElementById('stock').innerText =  data.stock 

  let imagesDiv = document.getElementById('image')

  data.images.forEach((imageSrc) => {
    let image = document.createElement('img');
    image.className = 'image';
    image.src = imageSrc;

    imagesDiv.appendChild(image)
    console.log('gana')
  });


})