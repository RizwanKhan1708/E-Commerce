import logo from "../../logo.svg";
import {Link} from "react-router-dom";
import Sidebar from "./Sidebar";

function ChangePassword(props){
    return(
        <div className='container mt-4'>
            <div className='row'>
                 <div className='col-md-3 col-12 mb-2'>
                    <Sidebar/>
                </div>
                <div className='col-md-8 col-12'>
                    <div className='card'>
                        <h4 className='card-header'>Change Password</h4>
                        <div className='card-body'>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="pwd" className="form-label">New Password</label>
                                    <input type="password" className="form-control" id='pwd'/>
                                </div>
                                <div className="mb-3">
                                    <div className="mb-3">
                                        <label htmlFor="cpwd" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" id='cpwd'/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default ChangePassword;