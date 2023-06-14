import { useState } from "react";
import axios from "axios";
function Register(props){
    const baseurl = "http://127.0.0.1:8000/api/";
    const [formError,setFormError]=useState(false)
    const [errorMsg,seterrorMsg]=useState('')
    const [successMsg,setSuccessMsg]=useState('')
    const [registerFormData, setRegisterFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        mobilenumber: "",
        password: "",
    });

    const inputHandler = (event) => {
        setRegisterFormData({
            ...registerFormData,
            [event.target.name]: event.target.value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // submit data as JSON
        axios
            .post(baseurl + "customer/register/", registerFormData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                if(response.data.bool==false){
                    setFormError(true)
                    seterrorMsg(response.data.msg)
                }else{
                    setRegisterFormData({
                        first_name: "",
                        last_name: "",
                        username: "",
                        email: "",
                        mobilenumber: "",
                        password: "",
                    })
                    setFormError(false)
                    setSuccessMsg(response.data.msg)
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    };


    const buttonEnable = registerFormData.first_name !== "" && registerFormData.last_name !== "" && registerFormData.username !== "" && registerFormData.email !== "" && registerFormData.mobilenumber !== "" && registerFormData.password !== "";

    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header'>Register</h4>
                        <div className='card-body'>
                            <p className='text-muted'>All fields are required</p>
                            {successMsg && <p className='text-success'>{successMsg}</p>}
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label">First Name</label>
                                    <input type="text"  name='first_name' onChange={inputHandler} value={registerFormData.first_name} className="form-control" id='firstname'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="2nd name" className="form-label">Second Name</label>
                                    <input type="text" name='last_name' onChange={inputHandler} value={registerFormData.last_name} className="form-control" id='2nd name'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">User Name</label>
                                    <input type="text" name='username' onChange={inputHandler} value={registerFormData.username} className="form-control" id='username'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name='email' onChange={inputHandler} value={registerFormData.email} className="form-control" id='email'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobilenumber" className="form-label">Mobile Number</label>
                                    <input type="number" name='mobilenumber' onChange={inputHandler} value={registerFormData.mobilenumber} className="form-control" id='email'/>
                                </div>
                                <div className="mb-3">
                                    <div className="mb-3">
                                        <label htmlFor="pwd" className="form-label">Password</label>
                                        <input type="password" name='password' onChange={inputHandler} value={registerFormData.password} className="form-control" id='pwd'/>
                                    </div>
                                </div>
                                <button  disabled={!buttonEnable} type="button" onClick={submitHandler} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Register;
