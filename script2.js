fetch('https://dummyjson.com/users')
.then((res) => res.json())
.then((data) =>{
  let usersDiv = document.getElementById('users')

  data.users.forEach((users) => {

    let userDiv = document.createElement('a')
    userDiv.href = "ViewUsers/users.html?userId=" + users.id

    let image = document.createElement('img')
    image.className = "image"
    image.src = users.image

    let firstName = document.createElement('div')
    firstName.className = "fname"
    firstName.innerText = users.firstName

    let lastName = document.createElement('div')
    lastName.className = "lname"
    lastName.innerText = users.lastName

    let email = document.createElement('div')
    email.className = "email"
    email.innerText = users.email

    // let descriptionDiv = document.createElement('div')
    // descriptionDiv.className = "description"
    // descriptionDiv.innerText = product.description

    // let priceDiv = document.createElement('div')
    // priceDiv.className = "price"
    // priceDiv.innerText = `₱${product.price}`

    userDiv.append(image)

    userDiv.append(firstName)

    userDiv.append(lastName)

    userDiv.append(email)

    // userDiv.append(descriptionDiv)
    
    // userDiv.append(priceDiv)   
    
    usersDiv.append(userDiv)


  })

  
})