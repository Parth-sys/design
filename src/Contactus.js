import React from "react";


function Contact(){
    return(
<>

<div className='container mt-5 mb-2 p-2 '  >
<div className='row'>
<div className='d-flex col-10' style={{justifyContent:"space-around"}} >

 <div>
    <h3>Contact Us</h3>
    <p>Lorem Ipsum lorem Lorem</p>

     <h3>
        Want to say hello
     </h3>
     <p>Logistics@123.co.in</p>
     <p>+112 009394333</p>
   
    <h4>Over<span className="s"> 50,000</span> Client<br/> All Over the World</h4>
      <img src="contact us.png" alt="name" width="300px"></img>    

 </div>


<div>
    <h6 className="s">Contact Us</h6>
    <h2>Lets Create Greate Somthing<br/> Together!</h2>
    <form>
        <div style={{display:"flex" ,flexDirection:"column"}}>
        <label >FullName</label> 
       <input type="text" className="form-control"></input>
       <label>Name</label>
       <input  type="text"  className="form-control"></input> 
       <label>Address</label>
       <input type="text" className="form-control"></input>
       </div>
        <button type="submit" className="btn btn-danger mt-1" >Send </button>

    </form>
</div>






</div>
</div>
</div>


<div className='container mt-5 mb-2  active2'  >
<div className='row ml-2'>
<div className='d-flex col-12 p-1' style={{justifyContent:"space-around"}} >

 <div>
  <h4 style={{fontWeight:"bold"}}>Lets Co-create the Logistic<br/> Solution For your Business</h4>
  <button className="btn btn-default bg-dark" style={{color:"white"}}> Lets go</button>

 </div>

<div >
    <img src="last.png" alt="name" width="300px"></img>
</div>

</div>
</div>
</div>




   </>
   
   
    )


}
export default Contact;