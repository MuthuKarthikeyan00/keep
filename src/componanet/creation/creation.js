import react, { useState } from "react";
import './creation.css';

const Creation=(props)=>{

    const [isExpanted,setIsExpanted]=useState(false);
    const [text,setText]=useState({
        title:"",
        note:"",
    })

    const Clr=()=>{
        setText({
            title:"",
            note:"",
        })
    }

    const clk=()=>{
        setIsExpanted(true);
    }

    const valueChange=(event)=>{
        const {name,value}=event.target;

        setText((prev)=>{
            return {
                ...prev, [name]:value,
            }
        }
           
        )
    }

    
    return(
        <div>
            { !isExpanted && <div onClick={clk} className="main1">
                <div  className="main">
                <p>Take a note. . .</p>
                </div>
                </div>
                }
         {isExpanted &&
              <div className="frame">
              <form>
                 <div  className="form">
                 <input name="title" onChange={valueChange} placeholder="<title/>"></input><br></br>
                  <textarea name="note" onChange={valueChange} required placeholder="Take a note"></textarea>
                <button className="btn"  type="submit"
                onClick={(event)=>{

                    Clr();
                     event.preventDefault();
                     setIsExpanted(false);
                    
                     props.getValue(text);
                }

                }><span>+</span></button>

                 </div>
              </form>
    
              </div>
         }
        </div>
    );
}


export default Creation;