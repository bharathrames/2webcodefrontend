import React from "react";
import Contact from "../Contact";
import Topbar from "../Topbar";

export function Home() {
  return (
    <div className="home">
    <Topbar/>
      <div className="col-lg-12 align-middle">
        <h1 className="text-center" style={{ color: "Black", marginTop: "40px" }}>
          EQUIPMENT RENTAL APPLICATION
        </h1>
        <h4 className="text-center">
          <b>You can Experience the new world by low cost</b>
        </h4>
        <h6 className="text-center">
          <h3>Rental Products we provide</h3>
          <br />
         <h2>Light,tripod,Cameras,Speaker,monitor,Etc...</h2> 
        </h6>
      </div>
      <div className="col-lg-12 text-center mt-5">
      <img className="equip" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFRa7EfeGx166DyGfQFQ5_jeL7Cim1FmoMA&usqp=CAU" alt="equip"/>   
      </div>
      <div className="col-lg-12" style={{ marginTop: "50px" , marginBottom:"50px" }}>
        <Contact />
      </div>
    </div>
  );
}

export default Home;