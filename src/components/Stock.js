import React from "react";

export default function Stock( { buyStock, company, price } ) {
	return (
		<li>
			{ company } - { price }
			<button onClick={ buyStock }>Buy!</button>
		</li>
	);
}
