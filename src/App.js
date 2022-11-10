
import './App.css';
import 'bootstrap' ;
import React from 'react';
import Navbar from './Navbar';
import {GiFishingBoat,GiCommercialAirplane} from 'react-icons/gi'
import Footer from './Footer';
import Contact from './Contactus';
import Admin from './Admin';
import {
  BrowserRouter,
  Routes,
  Route,
  
  
} from 'react-router-dom'
function App() {








  return (
    <div className='App'>


    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App></App>}></Route>
        <Route path="/Admin" exact element={<Admin></Admin>}></Route>
      </Routes>
    
    
    </BrowserRouter>








       
  <Navbar></Navbar>


  
       <div className='container-fluid'>

            <div className='row'>
           <div className='d-flex ' style={{justifyContent:"space-around"}} >


       <div  style={{marginLeft:"-10"}}>
       <img src="Side.png " alt='name'  ></img>
     </div>

     <div >
       <p style={{fontSize:"15px",fontWeight:"bold"}}>ALL FREIGHT SOLUTIONS</p>
       
       <p style={{fontWeight:"bold",fontSize:"40px",fontFamily:"sanserif"}}>Providing Full Range<br/>
       
        Of Tranformation</p>

      <p style={{color:"Red" ,fontSize:"40px",marginTop:"-10px"}}> Worldwide</p>

       
       <button className='btn-default' style={{backgroundColor:"black",color:"white"}}>GET SOLUTION</button>
     </div>
 
     <div >
       <img src="boy.png" alt='name' width="250px"></img>
     </div>
           </div>



            </div>


 
        





        </div>



<div className='container mt-5 mb-2'>
<div className='row'>
<div className='d-flex ' style={{justifyContent:"space-around"}} >



       <div >
       <img src="worker.png" alt='name' width="250px"></img>
     </div>

     <div >
       <p style={{fontSize:"15px",fontWeight:"bold" ,color:"red"}}>Providing Logistic Services Worldwide</p>
       
       <p style={{fontWeight:"bold",fontSize:"30px",fontFamily:"serif"}}>About Lapstic Solutions<br/>

      Trasport And Logistic</p>
      <p style={{fontWeight:"bold",fontSize:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/> 
        sed do eiusmod tempor incididunt ut labore et dolore</p>


       <p style={{fontSize:"20px",margin:"10px"}}> <GiFishingBoat></GiFishingBoat> ocen Freight   <span>      <GiCommercialAirplane/>  Air Freight   </span> </p>




     
     </div>
 
     

</div>
</div>
</div>


<div className='container mt-5 mb-2'>
<div className='row'>
      <h3>Transport And Logistic<span style={{color:"red"}}> Solutions</span></h3>
     <div>
     </div>
<div className='d-flex mt-1 ' style={{justifyContent:"space-around"}} >




       <div >
        <h4>Air</h4>
        <img src="14523569.jpg"  alt="name" width="100px"></img>
     </div>

     <div className='active1'>
        <h4>Ocen</h4>
        <img src="25992532.jpg"  alt='name' width="100px"></img>
     </div>


     <div>
        <h4>Road</h4>
        <img src="26134196.jpg"  alt="name" width="100px"></img>
     </div>
    
  </div>
  </div>
  </div>



  <div className='container mt-5 mb-2 p-2'>
<div className='row'>
<div className='d-flex ' style={{justifyContent:"space-between"}} >

      <div>
        <h4>Why Best <span style={{color:"red"}}> Logistics?</span></h4>
          <h4>Go Golbal With Ease</h4>
       <desc>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
        sed do eiusmod tempor incididunt ut lorem ipsum<br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
       </desc>
      
      </div>
 
         
      <div >
        
        <img src="boy2.png" alt="name"  width="400px" height="300px"></img>
     </div>



</div>
</div>
</div>



<div className='container mt-5 mb-2 p-2 back'  >
<div className='row'>
<div className='d-flex ' style={{justifyContent:"space-around"}} >

<div class="card" style={{width:"12rem",height:"20rem"}}>
  <div style={{display:"flex",margin:"5px"}}>
  <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className="card-img-top" alt="name"
  
   ></img>
     <h6 className='h'>Sachin T <br/> <span style={{color:"gray"}}>software dev</span> </h6>
   
  </div>
    <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style={{width:"12rem",height:"20rem"}}>
  <div style={{display:"flex",margin:"5px"}}>
  <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className="card-img-top" alt="name"
  
   ></img>
   <h6 className='h'>Virat K <br/> <span style={{color:"gray"}}>software Eng</span> </h6>
   
  </div>
    <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card" style={{width:"12rem",height:"20rem"}}>
  <div style={{display:"flex",margin:"5px"}}>
  <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className="card-img-top" alt="name"
  
   ></img>
   <h6 className='h'>Ms D <br/> <span style={{color:"gray"}}>Full stack Dev</span> </h6>
   
  </div>
    <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

</div>
</div>
</div>

<Contact></Contact>

 



  <Footer></Footer>
     </div>
  );
}

export default App;
