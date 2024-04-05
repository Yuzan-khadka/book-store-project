import "bootstrap/js/src/collapse.js";
import { Link } from "react-router-dom";

function Navbar() {
  const titleStyle = {
    fontWeight: 900,
  };
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <div className="container">
    //     <a className="navbar-brand" style={titleStyle} href="#">
    //       BookStore
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarToggleExternalContent"
    //       aria-controls="navbarToggleExternalContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div
    //       className="collapse navbar-collapse"
    //       id="navbarToggleExternalContent"
    //     >
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Features
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Pricing
    //           </a>
    //         </li>
    //       </ul>
    //       <p>
    //         <i className="fa fa-solid fa-book"></i>
    //       </p>
    //       <button className="btn btn-primary">Login</button>
    //     </div>
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" style={titleStyle} href="#">
        Bookstore
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse align-left justify-content-lg-between" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
        </ul>
        
        <div className="d-flex gap-4 align-items-center">
        <a href="#!" class="text-white"><i class="fa fa-book fa-lg"></i> <i class="fa fa-caret-down"></i></a>
        <Link className="btn btn-primary" to={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  </nav>

    







  );
}

export default Navbar;
