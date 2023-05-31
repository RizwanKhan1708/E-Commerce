import logo from "../../logo.svg";
import {Link} from "react-router-dom";
import SellerSidebar from "./SellerSidebar";

function PrfileUpdate(props){
    return(
        <div className='container mt-4'>
            <div className='row'>
                 <div className='col-md-3 col-12 mb-2'>
                    <SellerSidebar/>
                </div>
                <div className='col-md-8 col-12'>
                    <div className='card'>
                        <h4 className='card-header'>Profile Update</h4>
                        <div className='card-body'>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id='firstname'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="2nd name" className="form-label">Second Name</label>
                                    <input type="text" className="form-control" id='2nd name'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">User Name</label>
                                    <input type="text" className="form-control" id='username'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id='email'/>
                                </div>
                                <div className="mb-3">
                                    <div className="mb-3">
                                        <label htmlFor="pwd" className="form-label">Password</label>
                                        <input type="password" className="form-control" id='pwd'/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Default file input example</label>
                                    <input className="form-control" type="file" id="formFile"/>
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
export default PrfileUpdate;
