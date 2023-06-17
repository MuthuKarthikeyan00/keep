import react from "react";
import './footer.css';

const Footer=()=>{
    const date=new Date().getFullYear();

    return(

        
        <div className="center">
       
<p className="pp">copyrighte&copy; {date} Design by karthik;</p>
        </div>
    );
}


export default Footer;
