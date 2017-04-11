const BUY_STOCK = "BUY_STOCK";
// const BASE_URL = "https://whatever.com";

const initialState = {
	  balance: 1000
	, stocks: []
};

export default function stocks( state = initialState, action ) {
	console.log( action );
	switch ( action.type ) {
		case BUY_STOCK:
			return {
				  balance: state.balance - action.price
				, stocks: [ action.stock, ...state.stocks ]
			};
			// return {
			// 	foo: 1
			// 	, bar: 4
			// }
		default: return state;
	}
}

export function buyStock( price, stock ) {
	return { type: BUY_STOCK, price, stock };
	// return { type: BUY_STOCK, price: price, stock: stock };
}
