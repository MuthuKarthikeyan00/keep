import react from "react";
import './note.css';

const Note=(props)=>{

    const dlt=()=>{
        props.detNote(props.id);
    }
    
    console.log(props);
    return(
       <div  className='cont' >
          
       <div className='not'>
    
       <button className='btn-det' onClick={dlt}>+</button>
   
       <h3>{props.tit}</h3>
       <p  className='p'>{props.notes}</p>
      
        </div >
      
       </div>
    );
}


export default Note;