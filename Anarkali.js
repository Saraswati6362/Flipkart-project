let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
	cart.push({ name, price, size });
	totalPrice += price;
	updateCart();
}

function updateCart() {
	let cartList = document.getElementById("cart-items");
	let totalElement = document.getElementById("total-price");

	cartList.innerHTML = "";
	cart.forEach((item, index) => {
		let li = document.createElement("li");
		li.innerHTML = `${item.name} - ₹${item.price} 
            <button onclick="removeFromCart(${index})">❌</button>`;
		cartList.appendChild(li);
	});

	totalElement.innerText = totalPrice;
}

function removeFromCart(index) {
	totalPrice -= cart[index].price;
	cart.splice(index, 1);
	updateCart();
}
