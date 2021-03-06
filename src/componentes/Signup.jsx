import React from "react";

const Signup = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <form>
          <div className="row mb-4">
            <h3 className="mb-3 fw-bold text-white">Registro de Cuentas</h3>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form6Example1"
                  className="form-control"
                />
                <label className="form-label text-white" for="form6Example1">
                  First name
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form6Example2"
                  className="form-control"
                />
                <label className="form-label text-white" for="form6Example2">
                  Last name
                </label>
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input type="text" id="form6Example3" className="form-control" />
            <label className="form-label text-white" for="form6Example3">
              Company name
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="text" id="form6Example4" className="form-control" />
            <label className="form-label text-white" for="form6Example4">
              Address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="form6Example5" className="form-control" />
            <label className="form-label text-white" for="form6Example5">
              Email
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="number" id="form6Example6" className="form-control" />
            <label className="form-label text-white" for="form6Example6">
              Phone
            </label>
          </div>

          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id="form6Example7"
              rows="4"
            ></textarea>
            <label className="form-label text-white" for="form6Example7">
              Additional information
            </label>
          </div>

          <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form6Example8"
              checked
            />
            <label className="form-check-label text-white" for="form6Example8">
              {" "}
              Create an account?{" "}
            </label>
          </div>

          <button type="submit" className="noselect button">
            Place order
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
