import React from 'react';




function Navbar(){


    return( 
      <>
              <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded " >
        <div className="container-fluid" >
 
   <div>
     <a className="navbar-brand" href="#" style={{fontFamily:"Pacifico,cursive"}}>
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
           <button className='btn1 btn-default nav-link '> Get In touch</button>
           </li>
        
         </ul>
     </div>
     </div>
     </nav>
     
 
     </>
    )
}

export default Navbar

