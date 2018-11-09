import React, {Component} from 'react';
import App from "../App";
import './style.css';
import Toolbar from "./Toolbar";

const Store = (props) => {
	// componentDidMount() {
	// 	fetch("http://localhost:3000/store")
	// }
		const children = props.children;
		return (
			<App>
				<div className="container">
					<div className="row">
						<Toolbar/>
						<div className="store-content col-9">
							{children}
						</div>
					</div>
				</div>
			</App>
		)
};


export default Store;