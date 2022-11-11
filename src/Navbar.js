import React from 'react';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'

function Navbar(){



  const [name,setname]=useState("");

  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

const [show,setshow]=useState(false)
 

const handleshow=()=>{
         
 setshow(true)
};
const handleClose=()=>(setshow(false))










   

    return( 
      <>
              <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded " >
        <div className="container-fluid" >
 
   <div>
     <a className="navbar-brand" href="/" style={{fontFamily:"Pacifico,cursive"}}>
       <img src="logo.png" alt="logo" width="30" height="24" ></img>
       Opic
     </a>
   </div>
   
    
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
 
     <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
 
       <ul className="navbar-nav ml-auto ">
 
         
                     <ul className="navbar-nav">          
                 
                 <li className="nav-item active " style={{borderBottom: "3px solid red"}}><a className="nav-link"  href="/Orders" > Home </a></li>
                 <li className="nav-item"><button className=" btn nav-link"    >Services</button></li>
                 <li className="nav-item"><button className=" btn nav-link"    >About</button></li>
                 <li className="nav-item"><button className=" btn nav-link"    >Page</button></li>
 
                </ul>
 
 

         
 
 
 
       </ul>
     
         <ul className='navbar-nav  justify-content-end' >
         <li className='nav-item'>
           <button className='btn1 btn-default nav-link '   onClick={()=>handleshow()}> Get In touch</button>
           </li>
        
         </ul>
     </div>
     </div>
     </nav>
     
 



     <div>

<Modal show={show} >
<Modal.Header closeButton onClick={handleClose}>
    <Modal.Title>Get In Touch</Modal.Title>
</Modal.Header>

<Modal.Body>
 <div >

    
<input className="form-control"  placeholder="name"  value={name}
 onChange={(e)=>{setname(e.target.value)}} ></input><br/>

  
 <input  className="form-control" type="email" placeholder="email" value={email}   
    onChange={(e)=>{setemail(e.target.value)}}></input><br/>

 <input  className="form-control"   placeholder="password"  value={password} 
  onChange={(e)=>{setpassword(e.target.value)}}></input><br/>
 
 </div>
 
</Modal.Body>

<Modal.Footer>
    <button  className="btn btn-primary"   >send</button>
   
</Modal.Footer>
</Modal>




    </div>  








     </>
    )
}

export default Navbar

