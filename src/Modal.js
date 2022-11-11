import React,{useState} from 'react'

import Modal from 'react-bootstrap/Modal'


function Model(){

    const [name,setname]=useState("");

      const [email,setemail]=useState("")
      const [password,setpassword]=useState("")

    const [show,setshow]=useState(false)
     
 
    const handleshow=()=>{
             
     setshow(true)
   };
   const handleClose=()=>(setshow(false))


    return(
       
       <div>

        <Modal show={show} >
        <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
    
        <Modal.Body>
         <div >
    
            
        <input className="form-control" type="text" placeholder="name"  value={name}
         onChange={(e)=>{setname(e.target.value)}} ></input><br/>
    
          
         <input  className="form-control" type="email" placeholder="email" value={email}   
            onChange={(e)=>{setemail(e.target.value)}}></input><br/>
    
         <input  className="form-control" type ="text"  placeholder="password"  value={password} 
          onChange={(e)=>{setpassword(e.target.value)}}></input><br/>
         
         </div>
         
        </Modal.Body>
    
        <Modal.Footer>
            <button  className="btn"  >create</button>
           
        </Modal.Footer>
    </Modal>
    
    
    
    
            </div>  



    )
}




export default Model