
console.log("hii");
let total=0;

const initializedCart=()=>{
    localStorage.clear();
    const cartData=[
    
    
        { id: 1, name: 'Laptop', price: 1200.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Premium+Leather+Bag" },
    
        { id: 2, name: 'Headphones', price: 150.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Premium+Leather+Bag" },
    
        { id: 3, name: 'Mouse', price: 25.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Premium+Leather+Bag" },
    
        { id: 4, name: 'Airpods', price: 120.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Premium+Leather+Bag" },
        { id: 5, name: 'Cable', price: 10.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Premium+Leather+Bag" },
    
        { id: 6, name: 'Keyboard', price: 50.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Premium+Leather+Bag" },
    
        { id: 7, name: 'Cable', price: 10.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Premium+Leather+Bag" },
    
        { id: 8, name: 'Keyboard', price: 50.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Premium+Leather+Bag" }
    
    ]
    if(!localStorage.getItem('cart')){
        localStorage.setItem("cart",JSON.stringify(cartData));
    }

}

const cartItemContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const CheckoutBtn=document.getElementById("checkout-btn");


function updatecartControl(){
    let total=0;
    const cart=JSON.parse(localStorage.getItem('cart'))||[];
    cart.forEach(item=>{
        total+=item.price*item.quantity;
    })
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function loadcart(){


    const items = JSON.parse(localStorage.getItem("cart")); 
    console.log(items); // Fetching the cart items from localStorage
    if(items.length>0){
        cartItemContainer.innerHTML='';
        items.forEach((item,index) => {
            // Create a new div for the cart item
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item' ,'col-lg-3', 'col-md-4', 'col-sm-6', 'mb-4' );  // You can style it with this class
            cartItem.innerHTML = `
                <img  class="item-image" src="${item.image}" alt="${item.name}">
                <div class='cart-item-details'>
                    <div class="cart-item-title">${item.name}</div>
                    <p id="price">$${item.price}</p>
                    <div class="cart-item-actions">
                        <input type="number" value="${item.quantity}" min="1" class="quantity-input"></input>
                        <button class="remove-button">Remove</button>


                    </div>
                </div>
            `;
            cartItemContainer.appendChild(cartItem);
            total += item.price * item.quantity;

            //add event listener
            const removeButton=cartItem.querySelector('.remove-button');
            const quantityInput=cartItem.querySelector(".quantity-input");

            removeButton.addEventListener("click",()=>{
                items.splice(index,1);
                localStorage.setItem('cart',JSON.stringify(items));
                loadcart();

            })

            quantityInput.addEventListener("change",(event)=>{
                item.quantity=parseInt(event.target.value);
                localStorage.setItem('cart',JSON.stringify(items));
               updatecartControl();

            })
        });
        updatecartControl()
        }
        else{
            updatecartControl();
            cartItemContainer.innerHTML="<p> Your cart is Empty</p>"

        }
    }



window.onload=async()=>{
    initializedCart();
    loadcart();
    CheckoutBtn.addEventListener('click', () => {
        alert('Proceeding to checkout');
    });


   
}

