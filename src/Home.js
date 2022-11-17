import React from 'react'
import Navbar from './Navbar'
import Contact from './Contactus'
import { GiFishingBoat, GiCommercialAirplane } from 'react-icons/gi'
import './App.css';
import 'bootstrap';
import Footer from './Footer';

function Home() {


  return (

    <>
      <header>

        <Navbar></Navbar>
      </header>


      <main>
        <div className='container-fluid'>

          <div className='row  justify-content-center'>
            <div className='d-flex col-12 ' style={{justifyContent:"space-between"}}>


              <div>
                <img src="Side.png " alt='name' ></img>
              </div>

              <div  style={{float:"left"}}>
                <p className="text" style={{ fontSize: "0.5rem", fontWeight: "bold" }}>ALL FREIGHT SOLUTIONS</p>

                <p className='text' style={{ fontWeight: "bold", fontSize: "1rem", fontFamily: "sanserif" }}>Providing Full Range<br />

                  Of Tranformation</p>

                <p style={{ color: "Red", fontSize: "1rem", marginTop: "-10px" }}> Worldwide</p>


                <button className='btn-default' style={{ backgroundColor: "black", color: "white" }} >GET SOLUTION</button>
              </div>

              <div >
                <img src="boy.png" className='img' alt='name' style={{ width: "13rem" }}></img>
              </div>
            </div>



          </div>









        </div>



        <div className='container mt-5 mb-2'>
          <div className='row'>
            <div className='d-flex  col-12' style={{ justifyContent: "space-between" }} >



              <div >
                <img src="worker.png" alt='name' width="250px"></img>
              </div>

              <div >
                <p style={{ fontSize: "1rem", fontWeight: "bold", color: "red" }}>Providing Logistic Services Worldwide</p>

                <p style={{ fontWeight: "bold", fontSize: "1.5rem", fontFamily: "serif" }}>About Lapstic Solutions<br />

                  Trasport And Logistic</p>
                <p style={{ fontWeight: "bold", fontSize: "1rem" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit<br />
                  sed do eiusmod tempor incididunt ut labore et dolore</p>


                <p style={{ fontSize: "20px", margin: "10px" }}> <GiFishingBoat></GiFishingBoat> ocen Freight   <span>      <GiCommercialAirplane />  Air Freight   </span> </p>





              </div>



            </div>
          </div>
        </div>


        <div className='container mt-5 mb-2'>
          <div className='row '>
            <h3>Transport And Logistic<span style={{ color: "red" }}> Solutions</span></h3>
            <div>
            </div>
            <div className='d-flex mt-1 col-12  ' style={{ justifyContent: "space-around" }} >




              <div >
                <h4>Air</h4>
                <img src="14523569.jpg" alt="name" width="100px"></img>
              </div>

              <div className='active1'>
                <h4>Ocen</h4>
                <img src="25992532.jpg" alt='name' width="100px"></img>
              </div>


              <div>
                <h4>Road</h4>
                <img src="26134196.jpg" alt="name" width="100px"></img>
              </div>

            </div>
          </div>
        </div>



        <div className='container mt-5 mb-2 p-1'>
          <div className='row'>
            <div className='d-flex  col-10' style={{ justifyContent: "space-between" }} >

              <div>
                <h4>Why Best <span style={{ color: "red" }}> Logistics?</span></h4>
                <h4>Go Golbal With Ease</h4>
                <desc>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit<br />
                  sed do eiusmod tempor incididunt ut lorem ipsum<br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit<br />
                </desc>

              </div>


              <div >

                <img  id="man" src="boy2.png" alt="name" width="400px" height="300px"></img>
              </div>



            </div>
          </div>
        </div>



        <div className='container mt-5 mb-2 p-2 back'  >
          <div className='row'>
            <div className='d-flex col-12 ' style={{ justifyContent: "space-between" }} >

              <div className="card " style={{ width: "12rem", height: "20rem" }}>

                <div style={{ display: "flex", margin: "5px" }}>
                  <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="name"

                  ></img>
                  <h6 className='h'>Sachin T <br /> <span style={{ color: "gray" }}>software dev</span> </h6>

                </div>
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>

              <div className="card" style={{ width: "12rem", height: "20rem" }}>
                <div style={{ display: "flex", margin: "5px" }}>
                  <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="name"

                  ></img>
                  <h6 className='h'>Virat K <br /> <span style={{ color: "gray" }}>software Eng</span> </h6>

                </div>
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div className="card" style={{ width: "12rem", height: "20rem" }}>
                <div style={{ display: "flex", margin: "5px" }}>
                  <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="name"

                  ></img>
                  <h6 className='h'>Ms D <br /> <span style={{ color: "gray" }}>Full stack Dev</span> </h6>

                </div>
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Contact></Contact>

      </main>



      <Footer></Footer>

    </>
  )
}
export default Home;