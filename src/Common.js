import React from 'react';
import './Home.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from 'react-router-dom';

function Coommon(props) {
	return (
		<>
			<section id="header" className="d-flex align-items-center">
				<div className="container-fluid" >
					<div className="row">
						<div className="col-10 mx-auto">
							<div className="row">
								<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
									<h2>{props.start} <strong className="brand-name"> {props.name}</strong></h2>
									<h3 className="my-3">{props.des}</h3>
									<div className="mt-3">
										<NavLink className="btn-get-started" to="/about">{props.btn}</NavLink>
									</div>
								</div>
								<div className="col-lg-6 order-1 order-lg-2 header-img">
									<img src={props.img} className="img-fluid animated" alt="sorry" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>

	)
}

export default Coommon;
