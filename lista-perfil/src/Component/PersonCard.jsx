import React, {useState} from "react";
import "./PersonCard.css";

//Componente funcional
function PersonCard(props){
    
    const {setEstado,edad,name,city,country,address,img} = props; //Desestructuración (Propiedad de un componente)
    
    function aceptarHandler(e){
        e.stopPropagation();
        console.log('Ejecutando componente hijo');
    }

    function containerHandler(){
        console.log('Ejecutando componente padre');
    }

    //Configuración del estado
    const [estado_edad, setEdad] = useState(edad);
    
    //Configuración del estado
    function aumentaEdad(){
        setEdad(estado_edad+1);
    }

    //Seleccionar usuario
    function seleccionarUsuario(){
        setEstado({nombre:props.name, foto:props.img});
    }
    
    console.log("Props de PersonCard", props);
    
    return(
        <div onClick={containerHandler} className="container">
            <img src={img} alt={name} class="img"/>
            <h1>{name}</h1>
            <h3>{city}</h3>
            <h3>{country}</h3>
            <h5>{address}</h5>
            <h5>{estado_edad}</h5>
            <button onClick={aceptarHandler}>Aceptar</button>
            <button onClick={aumentaEdad}>Aumentar edad</button>
            <button onClick={seleccionarUsuario}>Seleccionar</button>
            {/*Pasa los elementos directamente al resultado del padre al hijo*/}
            {props.children}
            <hr/>
        </div>
    );
}

export default PersonCard;