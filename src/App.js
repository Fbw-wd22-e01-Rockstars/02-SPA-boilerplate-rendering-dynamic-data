import React from "react";

const customer = {
	first_name: "Bob",
	last_name: "Dylan"
};

//              your code inside these <div> tags
const Output = () => (
	<div>
		<h1>My name is {customer.first_name}</h1>
		<h2>My last name is {customer.last_name}</h2>
	</div>
)

export default Output;
