import React, { Component } from 'react';
import { connect } from "react-redux";

import './App.css';

import stocks from "./stocks";
import { buyStock } from "./ducks/stocks";

import Stock from "./components/Stock";

class App extends Component {
	render() {
		console.log( this.props );
		const stockElements = stocks.map( stock => (
			<Stock
				key={ stock._id }
				company={ stock.company }
				buyStock={ () => this.props.buyStock( stock.price, stock ) }
				price={ stock.price }
			/>
		) );
		const ownedStocks = this.props.stocks.map( stock => (
			<Stock
				key={ stock._id }
				company={ stock.company }
				price={ stock.price }
			/>
		) );
		return (
			<div className="app">
				{ this.props.balance }
				<ul>
					{ stockElements }
				</ul>
				<h3>Owned Stocks</h3>
				{ ownedStocks }
			</div>
		);
	}

}

function mapStateToProps( state ) {
	// return { balance: state.balance / 2 };
	return state;
}

const decorator = connect( mapStateToProps, { buyStock } );
const decoratedComponent = decorator( App );
// React.createElement( App, state );
export default decoratedComponent;

// export default connect( state => state )( App );
