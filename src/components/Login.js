import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <form>
                      <div className="form-group mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div className="form-group mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          required
                        />
                      </div>

                    

                      <button
                        className="btn btn-outline-light btn-lg px-5 mt-3"
                        type="submit"
                      >
                        Login
                      </button>
                    </form>

        
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link className="text-white-50 fw-bold" to={"/register"}>Sign up</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
