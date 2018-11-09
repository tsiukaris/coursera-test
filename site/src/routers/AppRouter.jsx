import React from 'react';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Home from "../components/Home";
import ProductPage from "../components/ProductPage";
import ProductList from "../components/ProductList";
import AddNewProduct from "../components/AddNewProduct"

const AppRouter = () => {


	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/store" component={ProductList}/>
				<Route exact path="/store/smartphones" component={ProductList}/>
				<Route exact path="/store/laptops" component={ProductList}/>
				<Route exact path="/store/other" component={ProductList}/>
				<Route exact path="/store/addDbProduct" component={AddNewProduct}/>
				<Route path="/store/:id" component={ProductPage}/>
			</Switch>
		</BrowserRouter>
	)


};



export default AppRouter;