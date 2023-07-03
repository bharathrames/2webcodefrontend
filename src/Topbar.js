import React from "react";
import { Link } from "react-router-dom";
import "bootstrap";


function Topbar() {
    return (
      <div className="containernav">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              id="navbut"
              onClick={() => {
                console.log("hello");
              }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            > 
            </button>
            <h1 className="companyname">{}<span class="material-symbols-outlined">photo_camera</span>24X rentals</h1>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li className="nav-item" style={{ textDecoration: "none" }}>
                  <Link id="link" to={"/"} className="nav-link">
                   <h4 ><span class="material-symbols-outlined">home</span>Home</h4> 
                  </Link>
                </li>
                <li className="nav-item" style={{ textDecoration: "none" }}>
                  <Link id="link" to={"/Products"} className="nav-link">
                  <h4>Products</h4> 
                  </Link>
                </li>
                <li className="nav-item" style={{ textDecoration: "none" }}>
                  <Link id="link" to={"/CartItems"} className="nav-link">
                  <h4>Cart Items<span class="material-symbols-outlined">shopping_bag</span></h4> 
                  </Link>
                </li>
                <li className="nav-item" style={{ textDecoration: "none" }}>
                  <Link id="link" to={"/login"} className="nav-link">
                  <h4>Admin<span class="material-symbols-outlined">admin_panel_settings</span></h4> 
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Topbar;