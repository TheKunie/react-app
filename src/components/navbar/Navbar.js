import React from "react";


function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <form className="container-fluid justify-content-start">
            <a className="navbar-brand" href="#">Equation Solver</a>
          </form>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Help</a>
            </li>
          </ul>
          </div>

        </nav>
      </div>
    );
  }


export default Navbar;
