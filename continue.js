document.getElementById("addressForm").addEventListener("submit", function (event) {
	event.preventDefault();

	let name = document.getElementById("name").value;
	let mobile = document.getElementById("mobile").value;
	let address = document.getElementById("address").value;
	let city = document.getElementById("city").value;
	let state = document.getElementById("state").value;
	let pincode = document.getElementById("pincode").value;

	if (mobile.length !== 10 || isNaN(mobile)) {
		alert("Enter a valid 10-digit mobile number.");
		return;
	}

	if (pincode.length !== 6 || isNaN(pincode)) {
		alert("Enter a valid 6-digit pincode.");
		return;
	}

	let addressData = {
		name,
		mobile,
		address,
		city,
		state,
		pincode
	};

	console.log("Order Saved:", addressData);
	alert("Order Placed Successfully!");

	// You can also store the address in local storage or send it to a backend server
});
