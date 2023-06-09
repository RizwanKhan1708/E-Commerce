import { useState } from "react";
import axios from "axios";

function Login(props) {
  const baseurl = "http://127.0.0.1:8000/api/";
  const [formError,setFormError]=useState(false)
  const [errorMsg,seterrorMsg]=useState('')
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const inputHandler = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // submit data as JSON
    axios
      .post(baseurl + "customer/login/", loginFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        if(response.data.bool==false){
          setFormError(true)
          seterrorMsg(response.data.msg)
        }else{
          localStorage.setItem('customer_id',response.data.id)
          localStorage.setItem('customer_login',true)
          localStorage.setItem('customer_username',response.data.user)
          setFormError(false)
          seterrorMsg('')
        }

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const checkCustomer=localStorage.getItem('customer_login')
  if(checkCustomer){
    window.location.href='dashboard'
  }

  const buttonEnable = loginFormData.username !== "" && loginFormData.password !== "";

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 col-12 offset-2">
          <div className="card">
            <h4 className="card-header">Login</h4>
            <div className="card-body">
              {formError &&
                    <p className='text-danger'>{errorMsg}</p>
                }
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={loginFormData.username}
                    onChange={inputHandler}
                    className="form-control"
                    id="username"
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={loginFormData.password}
                      onChange={inputHandler}
                      className="form-control"
                      id="pwd"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={submitHandler}
                  disabled={!buttonEnable}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
