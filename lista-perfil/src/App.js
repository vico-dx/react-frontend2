import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import PersonCard from './Component/PersonCard'
import Menu from './Component/Menu'

function App() {
  const data = [
    {img: "https://estaticos.smoda.elpais.com/wp-content/uploads/2022/02/laurapausini1-1200x631.png", name:'Laura', city: 'Cuenca', country: 'Ecuador', address: 'García Moreno y Venezuela', edad:15},
    {img: "https://i.ytimg.com/vi/JoqmHAr3fu8/maxresdefault.jpg", name:'Elvis', city: 'Loja', country: 'Ecuador', address: 'Pichincha y Venezuela',edad:16},
    {img: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/EHPMKZIZOFC4RCIT3ZI7ENSNN4.png", name:'Luis', city: 'Guayaquil', country: 'Ecuador', address: 'Alonso de Angulo 23232',edad:17},
    {img: "https://pbs.twimg.com/profile_images/753703360784658432/reSy9oNv_400x400.jpg", name:'Génesis', city: 'Guayaquil', country: 'Ecuador', address: 'Alonso de Angulo 23232',edad:18},
    {img: "https://es.web.img3.acsta.net/pictures/20/11/27/06/28/4034475.jpg", name:'Joseph', city: 'Guayaquil', country: 'Ecuador', address: 'Alonso de Angulo 23232',edad:19}
  ];

  //Estado de una variable
  const [estado, setEstado] = useState({nombre: '', foto: 'https://play-lh.googleusercontent.com/gXJLTDIvxXTK6uKl2e3Od_zmrlEul1CbkgxWxjbGeDzLl4EMFsdfER2VEgqAue2v1TE'});
  //Paso de proppiedades a los hijos
  return(
    <div className='App'>
      <Menu name={estado.nombre} img={estado.foto}/>
      {data.map((person,index) =>(
        <PersonCard key={index} img={person.img} name={person.name} city={person.city} country={person.country} address={person.address} edad={person.edad} setEstado={setEstado}>
          <button onClick={()=>alert(`Contactando a ${person.name}`)}>{`Contactar a ${person.name}`}</button>
        </PersonCard>
      )
      )}
    </div>
  );
}

export default App;