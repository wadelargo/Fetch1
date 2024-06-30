let searchQuery = window.location.search;
let urlParams = new URLSearchParams(searchQuery)

let userId = urlParams.get('userId')

fetch('https://dummyjson.com/users/' + userId)
.then((res) => res.json())
.then((data) =>{

    document.getElementById('img').src = data.image

    document.getElementById('fname').innerText = data.lastName
    document.getElementById('lname').innerText = data.firstName
    document.getElementById('lname').innerText = data.email

    document.getElementById('maidenName').innerText = data.maidenName
    document.getElementById('age').innerText = data.age
    document.getElementById('gender').innerText = data.gender
    document.getElementById('phone').innerText = data.phone 
    document.getElementById('username').innerText = data.username
    document.getElementById('password').innerText = data.password
    document.getElementById('birthDate').innerText = data.birthDate
    document.getElementById('bloodGroup').innerText = data.bloodGroup
    document.getElementById('height').innerText = data.height
    document.getElementById('weight').innerText = data.weight 
    document.getElementById('eyeColor').innerText = data.eyeColor
    document.getElementById('hair').innerText = data.hair
    document.getElementById('address').innerText = data.address
    document.getElementById('city').innerText = data.city
    document.getElementById('university').innerText = data.university



})




























// fetch('https://dummyjson.com/users')
// .then((res) => res.json())
// .then((data) =>{
//   let usersDiv = document.getElementById('users')

//   data.users.forEach((users) => {

//     let userDiv = document.createElement('a')
//     userDiv.href = "usersInfo/index.html?userId=" + users.id

//     let image = document.createElement('img')
//     image.className = "image"
//     image.src = users.image

//     let firstName = document.createElement('div')
//     firstName.className = "fname"
//     firstName.innerText = users.firstName

//     let lastName = document.createElement('div')
//     lastName.className = "lname"
//     lastName.innerText = users.lastName

//     let email = document.createElement('div')
//     email.className = "email"
//     email.innerText = users.email

//     // let descriptionDiv = document.createElement('div')
//     // descriptionDiv.className = "description"
//     // descriptionDiv.innerText = product.description

//     // let priceDiv = document.createElement('div')
//     // priceDiv.className = "price"
//     // priceDiv.innerText = `₱${product.price}`

//     userDiv.append(image)

//     userDiv.append(firstName)

//     userDiv.append(lastName)

//     userDiv.append(email)

//     // userDiv.append(descriptionDiv)
    
//     // userDiv.append(priceDiv)   
    
//     usersDiv.append(userDiv)


//   })

  
// })