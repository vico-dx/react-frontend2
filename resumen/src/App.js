import './App.css';
import Job from './components/Job.jsx';
import {User} from './components/User';
import {Planet} from './components/Planet';
import {useState} from 'react';
import {Task } from './components/Task';

/*age>=18 ? console.log("text") : console.log("text") 
? means if
: means else*
&& if something is true, then do this*/

function App() {
  {/*State tiene como argumentos variable, funcion y en el usestate
el valor inicial de la variable (age) */}
 const [age,setAge] = useState(0)
 const increaseAge = () => {
  setAge(age+1);
 };

 const [inputValue,setInputValue] = useState("");
 const handleInputChange = (event) => {
  setInputValue(event.target.value);
 };

 const [showText,setShowText] = useState(true);
 const [textColor,setTextColor] = useState("Black");

 const [count, setCount] = useState(0);
 const increaseCount = () => {
    setCount(count+1);
 };
 const decreaseCount = () => {
  setCount(count-1);
};
const zeroCount = () => {
  setCount(0);
};




 const isGreen = true;
 const names = ["Lemusa", "Alex", "Alex Bravo"];
 const users = [
  {name:"Lemusa",age:18},
  {name:"Michelle",age:18},
  {name:"Elvis",age:18}
 ]
 const isGasPlanet=true;
 const planets = [
  {name:"Mars",isGasPlanet:false},
  {name:"Earth",isGasPlanet:false},
  {name:"Jupiter",isGasPlanet:true},
  {name:"Venus",isGasPlanet:false},
  {name:"Neptune",isGasPlanet:true},
  {name:"Uranus",isGasPlanet:true}
 ]

 //To do tasks
 const [todoList, setTodoList] = useState([]);
 const [newTask, setNewTask] = useState("");

 const handleChange = (event) => {
  setNewTask(event.target.value);

 };
  const addTask = () => {
    {/*... significa todo 3 puntos significa que voy a 
  hacer un array que está compuesto por toda la lista 
mas el valor de newTask */}
    //const newTodoList = [...todoList,newTask];
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1,
      taskName: newTask,
      completed: false,
      
    };

    setTodoList([...todoList,task]);
   };

  const deleteTask = (id) => {
   // const newTodoList = todoList.filter((task) => task !== taskName);
    
      //return task !== taskName;
      /*
      if (task === taskName) {
        return false;

      }else {
        return true;
      }
    */
    

    setTodoList(todoList.filter((task) => task.id !== id));


  };

  const completeTask = (id) => {
    setTodoList (
      todoList.map((task)=>{
        if (task.id === id) {
          return {...task, completed: true};
        }else {
          return task;
        }
        
      })
    );
  };

  return (
    <div className="App">

      {/*Condicional if compacto */}
      {age>=18 ? <h1>Over Age</h1> : <h1> Under Age</h1>}
      <h1 style={{color: isGreen ? "cyan" : "red"}}>THIS HAS COLOR</h1>
      {isGreen && <button>THIS IS A BUTTOM</button>}
    
    
    {/*Asi se llama a un componente */}
      <User name="Lemusa" age={22} email="lemusa@gmail.com" />  
      <User name="Michelle" age={21} email="mishu@gmail.com" />  
      <User name="buele" age={22} email="buela@gmail.com" />
      <Job salary={9000} position="Mathematician" company="Huawei" />     
      <Job salary={7000} position="Hacking" company="Electrical" />     
      
     {/*lISTAS 
     utilizo .map porque puedo editar cada uno de los elementos
     callback function es una funcion anonima que tiene una accion
     y despues de llamar a la accion se guarda un valor y una llave
      En este caso Value (primer argumento de .map) es name
      */}
      {names.map((name, key) => {
        return <h1 key={key}> {name} </h1>

      })}

      {/*Lista de objetos */}

      {users.map((user, key) => {
        return <User key={key} name={user.name} age={user.age} />;
          /*
        <div key={key}> 
          {user.name} {user.age} 
        </div>
        */
          
      })}

      {/*Ejercicio practica, mostrar planetas que son
      gaseosos */}

{planets.map((planet, key) => 
         
        planet.isGasPlanet && <h1> {planet.name}</h1>
      )}



{/*Use States hooks */}
      {age} 
      <button onClick={increaseAge}>Increase age</button>

  
      <input type="text" onChange={handleInputChange}/>
      {inputValue}
         {/*With anonymous function */}
      <button onClick={() => {
        setShowText(!showText);
      }}
        > Show/Hide
        </button>
      {showText && <h1>Hi my name is Lemusa</h1>}

      <button
        onClick={() =>{
          setTextColor(textColor === "black" ? "red" : "black");
        }}
      >
        show/Hide
      </button>
      <h1 style={{color: textColor}}> Hi my name is Lemusa</h1>

     
    {/*Ejercicio usando UseState increase decrease zero buttoms */}

    <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount}>Decrease count</button>
    <button onClick={zeroCount}>Zero count</button>
    {count}
    
    {/*CRUD in react, to do list tutorial 
    To do list*/}
        <div className='addTask'>

          <input onChange={handleChange}/>
          <button onClick={addTask}>Add Task</button>

         
          
        </div>

        <div className='list'>
            {todoList.map((task)=>{
              return ( 
              <Task 
              taskName={task.taskName} 
              id={task.id} 
              completed = {task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
              /> 
              );
              
            })}
        </div>
    </div>
  );    
}

/*Props represents all the data we might want to pass into 
this component */

/*States -> son solamente variables */




export default App;
