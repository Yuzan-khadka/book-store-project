function Register(){

    return(
    <div className="row d-flex justify-content-center align-items-center mt-4">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white">
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                <p className="text-white-50 mb-5">
                  Please fill in the following information to create an account.
                </p>

                <form>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      id="fullName"
                      className="form-control form-control-lg"
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div className="form-group mb-4">
                    <input
                      type="email"
                      id="signupEmail"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="form-group mb-4">
                    <input
                      type="password"
                      id="signupPassword"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <button
                    className="btn btn-outline-light btn-lg px-5 mt-3"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
          );
 
}

export default Register;