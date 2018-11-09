import React, {Component} from "react"
import Store from "./Store";
import axios from "axios";

class AddNewProduct extends Component {
	constructor() {
		super();
		this.state = {
			product: {
				name: "",
				category: "",
				description: "",
				price: 0,
				quantity: 0
			},
			error: false,
			errorMsg: ""
		}
	}

	handleProdName(event) {
		this.setState({
			product: {
				name: event.target.value
			}
		})
	}

	handleCategory(event) {
		this.setState({
			product: {
				category: event.target.value
			}
		})
	}

	handleDescription(event) {
		this.setState({
			product: {
				description: event.target.value
			}
		})
	};

	handlePrice(event) {
		this.setState({
			product: {
				price: event.target.value
			}
		})
	}

	handleQuantity(event) {
		this.setState({
			product: {
				quantity: event.target.value
			}
		})
	}


	postProductHandler = ()=> {
		const product = this.state.product;
		axios.post('http://localhost:3000/store/addDbProduct#/', product)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error);
				this.setState({error: true})
				this.setState({errorMsg: error.message})
			});
	};


	render() {

		let errorMsg = <p style={{margin: '50px'}}>Something went wrong! Error msg: {this.state.errorMsg}</p>
		return (
			<Store>
				<div className="container">
					<p>Add new product to the DB:</p>
					<br/>
					<br/>
					Name: <input type="text" onfocusout={(event) => this.handleProdName(event)}/><br/>
					Category: <input type="text" onChange={(event) => this.handleCategory(event)}/><br/>
					Description: <input type="text" onChange={(event) => this.handleDescription(event)}/><br/>
					Price: <input type="text" onChange={(event) => this.handlePrice(event)}/><br/>
					Quantity: <input type="text" onChange={(event) => this.handleQuantity(event)}/><br/>
					<br/>
					<button className="btn btn-primary" onClick={this.postProductHandler.bind(this)}>Submit new product object to the server</button>
					<p>Go back to Store page to see if new product was created</p>
					{this.state.error? errorMsg: ""}
				</div>
			</Store>
		)
	}
}

export default AddNewProduct
