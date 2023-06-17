
import './App.css';
import React, { useState } from 'react';
import Creation from "./componanet/creation/creation";
import Footer from "./componanet/footer/footer";
import Header from "./componanet/header/header";
import Note from "./componanet/note/note";

function App() {
 
  const [note,setNote]=useState([]);

  const getValue=(text)=>{
      setNote((prevItem)=>{
         return[...prevItem,text]
      });
  }

  const detNote=(id)=>{
    setNote((prevItem)=>{
     return note.filter((noteItem,index)=>{
             return(index!==id);
      });
    })
  }


  console.log(note);
  return (
   <div>
     <Header/>
     <Creation getValue={getValue}/>
     {
       note.map((e,index)=>{
        return <Note  detNote={detNote} tit={e.title} notes={e.note} id={index}  />
       })
     }
     <Footer/>
   </div>
  );
}
export default App;
