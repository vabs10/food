import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css";

function Card(props) {
    return (
        <>
            <div className="col-md-2 col-10 mx-auto card_custom">
                <div className="card">
                    <img class="card-img-top" src={props.imgsrc} alt="Card cap" />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{props.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/" class="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
