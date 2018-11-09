import React from 'react';
import {Link} from "react-router-dom";
import App from "../App";
import './style.css';
import xiaomi2s from '../images/xiaomi-mix2s.png';
import sales from '../images/sales.jpg';
import iphone8 from '../images/iphone8.jpg';
import ProductListContainer from "./ProductList";

const Home = () => {
	return (
		<App>
			<div id="carousel-content" className="container-fluid">
				<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<Link to="/store/smarthones/mi2s">
								<img className="mx-auto d-block carousel-image" src={xiaomi2s} alt="First slide"/>
							</Link>
							<div className="carousel-caption caption-text carousel-text">
								<h3>Xiaomi Mi MIX 2S<br/>available from 500$</h3>
							</div>
						</div>
						<div className="carousel-item">
							<Link to="/store">
								<img className="mx-auto d-block carousel-image" src={sales} alt="Second slide"/>
								<div className="carousel-caption caption-text">
									<h3>Summer Sales!</h3>
								</div>
							</Link>
						</div>
						<div id="carousel-img1" className="carousel-item">
							<Link to="/store/smartphones/iphone8">
								<img className="mx-auto d-block carousel-image active" src={iphone8} alt="Third slide"/>
							</Link>
							<div className="carousel-caption caption-text carousel-text">
								<h3>New Iphone 8</h3>
								<p>Check it out!</p>
							</div>
						</div>
					</div>
					<a className="carousel-control-prev" href={"#carouselExampleIndicators"} role="button"
					   data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"/>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href={"#carouselExampleIndicators"} role="button"
					   data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"/>
						<span className="sr-only">Next</span>
					</a>
					<hr/>
				</div>
			</div>
			<div className="container text-center">
				<button className="btn btn-outline-success visit-btn">
					<Link to="/store" loadComponent={ProductListContainer}>GO TO STORE!</Link>
				</button>
			</div>
		</App>
	)
}

export default (Home);