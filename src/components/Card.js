import React from "react";
import  ReactDOM  from "react-dom";
import '../cards.css';
const size={ width: "15rem"};

function Card(props) {
    return(
    <>
   
    <div className="card" style={size}>
        <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>

    </div>
    
    </>
    )
}
export default Card;