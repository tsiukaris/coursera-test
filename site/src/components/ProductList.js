import React, {Component} from "react";
import axios from 'axios';
import {connect} from 'react-redux';
import * as object from '../reducers/objects'
import './style.css';
import {Link} from "react-router-dom";
import Store from "./Store";

class ProductList extends Component {

	state = {
		products: [
			{id: 1, name: 'iphone8', price: 1000},
			{id: 2, name: 'xiaomi-mix2s', price: 123123}]
	};

	componentDidMount() {
		axios.get('http://localhost:3000/store')
			.then(response => {
				this.props.saveAll(response);
			})
	}

	renderProducts() {
		if (this.props.products.length === 0) {
			return <p>There are no such products</p>;
		}
		return (
			<Store>
				{
					this.props.products.map(product =>
						<div key={product.id} className="product-cell col-lg-3 col-md-4">
							<Link to={{pathname: '/store/' + product.name}}>
								<img src={require("./../images/" + product.name + "-icon.jpg")} className="product-icon"
								     alt="product icon"/>
								<p> {product.name} <br/> Price: {product.price} RUB </p>
							</Link>
						</div>
					)}
			</Store>
		);
	}

	render() {
		console.log("render container");
		return this.renderProducts();
	}
}

const mapStateToProps = state => {
	return {
		products: state.objects.products
	}
}

const mapDispatchToProps = dispatch => {
	return {
		saveAll: (response) => dispatch({type: object.SAVE_ALL, val: response})
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

// onclick={
// 	React.createClass({
// 		getInitialState: function () {
// 			return {showMe: false};
// 		},
// 		onClick: function () {
// 			this.setState({showMe: true});
// 		},
// 		render: function () {
// 			if (this.state.showMe) {
// 				return (<div> one div </div>);
// 			} else {
// 				return (<a onClick={this.onClick}> press me </a>);
// 			}
// 		}
// 	})
// }