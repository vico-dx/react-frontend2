import React from "react";
import './Menu.css';

function Menu(props){
    const {name,img} = props; //Desestructuración (Propiedad de un componente)
    return(
        <div className="menu">
            <div className="navegador">
                <a href="#" className="link">Home</a>
                <a href="#" className="link">Person Cards</a>
                <a href="#" className="link">Contact Us</a>
            </div>
            <div className="usuario">
                <p style={{color:"white", fontWeight:"bold"}}>{name}</p>
                <img src={img} alt={name} className="imagen"/>
                {props.children}
            </div>    
        </div>
    );
}

export default Menu;