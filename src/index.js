import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





/*

  function Time() {
    const ele =<h1>the time is {new Date().toLocaleTimeString()}</h1>

    ReactDOM.render(ele,document.getElementById('root'));
  }

setInterval(Time,1000) ;
  







var mystyle ={
  color:'blue',textAlign:'center'
}

const myele=<div style={mystyle}>
  <h1 className='mk'>karthik</h1>
  <p>hello hi </p>
</div>
ReactDOM.render(myele,document.getElementById('root'));



function Header(){
 return<div>
   <h1>karthik</h1><p>i am nkn</p>
 </div>
}

function Sec(){
  return<p>khhbwbkhsd wkjbdkjb</p>
}

function Th(){
  return<p>kh wkjbdkjb</p>
}
function Call(){
  return<div>
<Header />
 <Sec />
 <Th />
</div>
}

class Karthik extends React.Component{
  render(){
    return<div>
      <Muthu/>
      <h1>karthi</h1>
    </div>
  }
  
  } 

  ReactDOM.render(<Karthik/>,document.getElementById('root'));

ReactDOM.render(<Call/>,document.getElementById('root'));

class Muthu extends React.Component{
  render(){
    return<h1>kkkkaswkj </h1>
  }
  
  }


export default Muthu;

class Fbutton extends React.Component{

     constructor(){
       super();
       this.state={name:'karthik',age:'22'};
     }
     changevalue=()=>{
       this.setState({name:'muthu'});
     }
     render(){
       return<div>
         <h1>{this.state.name}</h1><br>
         </br>
         <button type='button' onClick={this.changevalue}>exit</button>
       </div>
     }
     
}

ReactDOM.render(<Fbutton/>,document.getElementById('root'));


class Lifecycle extends React.Component{

  constructor(){
    super();
    this.state={name:'karthik'}
  }
  componentWillMount(){
    alert('welllcome');
  }

  render(){
    return<h1>{this.state.name}</h1>
  }

  componentDidMount()
  {
    setTimeout(()=>{
      this.setState({name:'muthu'})},1000) 
  }

}
ReactDOM.render(<Lifecycle/>,document.getElementById('root'));

***********************************************************************************************************************************************
class Reactform extends React.Component{
  constructor(){
    super();
    this.state={username:"",age:null,err:""};

  }
  uservalue=(event) => {
   let n=event.target.name;
   let v=event.target.value
     
    this.setState({[n]:v});

  }

  render(){
    return(
    <form>
      <h1>hi {this.state.username}</h1>
      <h1>hi {this.state.age}</h1>
      Enter your name:<input type='text' name='username' onChange={this.uservalue}/><br></br>
      Enter your age:<input type='text' name='age' onChange={this.uservalue}/>


    </form>
    )
  } 


}
ReactDOM.render(<Reactform/>,document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals <React.StrictMode><App /></React.StrictMode>
reportWebVitals();
*/