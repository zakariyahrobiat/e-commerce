images =[
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"

]
let count = 0
hamburger = document.getElementById("hamburger")
menu = document.querySelector(".menu-container")
closeBtn = document.querySelector(".close-btn")
nextBtn = document.querySelector(".next-btn")
previousBtn = document.querySelector(".previous-btn")
displayImage = document.querySelector(".display-img")
itemNumber= document.querySelector(".item-number")
plusBtn = document.querySelector(".plus-btn")
minusBtn = document.querySelector(".minus-btn")
cart = document.getElementById("cart")
cartWrapper= document.querySelector(".cart-wrapper")
number = document.getElementById("number")
total = document.getElementById("total")
addCartBtn = document.querySelector(".add-cart-btn")
cartItem = document.querySelector(".cart-item")
cartContent = document.querySelector(".cart-content")
previous = document.querySelector(".previous")
largeImage= document.querySelector(".show-img")
next = document.querySelector(".next")
lightBox= document.querySelector(".light-box")
close = document.querySelector(".close")
firstImage = document.querySelector(".image1")
secondImage = document.querySelector(".image2")
thirdImage = document.querySelector(".image3")
fourthImage = document.querySelector(".image4")
container = document.querySelector(".container")
hamburger.addEventListener("click", ()=>{
    menu.classList.add("menu-container2")
   
})
closeBtn.addEventListener("click",()=>{
    menu.classList.remove("menu-container2")
})
nextBtn.addEventListener("click", ()=>{
    count++
    if(count > images.length -1){
        count = 0
    }
    imageData= images[count]
     displayImage.src = imageData
    
})
previousBtn.addEventListener("click",()=>{
    count--
    if(count < 0){
       count = images.length - 1
    }
    imageData = images[count]
    displayImage.src = imageData
})
function plus(){
   
    count++
    itemNumber.innerHTML = count
    number.innerHTML = count
    mutiply =Math.floor( 125.00 * count)
    total.innerHTML = `<span>$</span>${mutiply}.00`
}
plus()
function subtract(){
    
    count--
    if(count < 0){
        count = 0
    }
    itemNumber.innerHTML=count
    number.innerHTML = count
    mutiply = Math.floor( 125.00 * count)
    total.innerHTML = `<span>$</span>${mutiply}.00`
    cartContent.style.display="block"
}
subtract()
cart.addEventListener("click",()=>{
    cartWrapper.classList.toggle("active")
})
addCartBtn.addEventListener("click",()=>{
    cartWrapper.classList.toggle("active")
})
function deleteBtn(){
    cartContent.innerHTML = `<p class="empty-cart">your cart is empty.</p>`
}
previous.addEventListener("click",()=>{
    count--
    if(count < 0){
       count = images.length -1
    }
    imageData= images[count]
    console.log(imageData)
    largeImage.src = imageData
    
})
next.addEventListener("click", ()=>{
    count++
    if (count > images.length-1){
        count = 0
    }
    imageData= images[count]
    console.log(imageData)
    largeImage.src = imageData

})
displayImage.addEventListener("click",()=>{
    lightBox.classList.add("light-box-active")
    
})
close.addEventListener("click",()=>{
    lightBox.classList.remove("light-box-active")
})
firstImage.addEventListener("click",()=>{
    largeImage.src = images[0]
})
secondImage.addEventListener("click",()=>{
    largeImage.src = images[1]
})
thirdImage.addEventListener("click",()=>{
    largeImage.src = images[2]
})
fourthImage.addEventListener("click",()=>{
    largeImage.src = images[3]
})

 console.log(largeImage)