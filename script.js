let cart=[];

function addToCart(name,price){cart.push({name,price});updateCartCount();alert(name+" added to cart!");}
function openCart(){const cartModal=document.getElementById('cart');const cartItems=document.getElementById('cart-items');cartItems.innerHTML='';cart.forEach((item,index)=>{cartItems.innerHTML+=`<p>${item.name} - $${item.price} <button onclick="removeItem(${index})">Remove</button></p>`});cartModal.style.display='block';}
function closeCart(){document.getElementById('cart').style.display='none';}
function removeItem(index){cart.splice(index,1);openCart();updateCartCount();}
function checkout(){if(cart.length===0){alert("Empty cart!");return;}alert("Order placed!");cart=[];updateCartCount();closeCart();}
function updateCartCount(){document.getElementById('cartCount').innerText=cart.length;}
function scrollToSection(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});}
function searchProducts(){const input=document.getElementById('searchBar').value.toLowerCase();document.querySelectorAll('.product-card').forEach(product=>{product.style.display=product.querySelector('h3').innerText.toLowerCase().includes(input)?'block':'none';});}
function filterCategory(category){document.querySelectorAll('.product-card').forEach(product=>{product.style.display=(category==='all'||product.dataset.category===category)?'block':'none';});}
