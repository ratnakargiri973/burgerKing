let checkboxes = document.getElementsByName("foodItem");
let orderBtn = document.getElementById("orderButton");
let foodImage = document.getElementById("foodImage");
let orderId = document.getElementById("orderId");
let orderIdVal = document.getElementById("orderIdValue");

function getRandomTime(){
    return Math.floor(Math.random() * 5000) + 2000 //random time between 2 to 7 sec
}

function getRandomOrderId(){
    return Math.floor(Math.random() * 1000) + 100;  //random ID between 100 to 1099
}

orderBtn.addEventListener("click", function(){
    const selectedItems = [];
     
    

checkboxes.forEach(function(checkbox){
    if(checkbox.checked){
        selectedItems.push(checkbox.value);
    }
});

if(selectedItems.length == 0){
    alert("Please select atleast one item!!!");
    return;
}

orderBtn.disabled = true;

orderId.style.display = "none";
foodImage.style.display = "none";

const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve();
    }, getRandomTime())
});

promise.then(function(){
    orderIdVal.textContent = getRandomOrderId();
    orderId.style.display='block';

    const foodToShow = selectedItems[Math.floor(Math.random() * selectedItems.length)];

    switch(foodToShow){
        case 'Burger':
            foodImage.src= 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
            break;
        case 'Fries':
            foodImage.src = 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
            break;
        case 'Sandwich':
                foodImage.src= './sandwich.jpg'
                break;
        case 'Cheesy_tots':
                foodImage.src = 'cheesyTots.jpg'
                break;
        case 'Nugeets':
                foodImage.src = 'nugeets.jpg'
                break;
        case 'Drink':
            foodImage.src = 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
            break;
        default:
            foodImage.src = 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
    }
    foodImage.style.display = 'block';
    orderBtn.disabled = false;
})
})