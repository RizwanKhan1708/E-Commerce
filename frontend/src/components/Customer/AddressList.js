import logo from "../../logo.svg";
import {Link} from "react-router-dom";
import Sidebar from "./Sidebar";

function AddressList(props){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar/>
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link to="/customer/add_address" className='btn btn-outline-success mb-4 float-end'><i className='fa fa-plus-circle'></i> Add Address</Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 mb-4'>
                            <div className='card bg-success text-white shadow '>
                                <div className='card-body '>
                                    <h6>
                                        <p><i className='fa fa-check-circle fa-1x'></i></p>
                                        St#3,rasheedabad jhang road FSD,Punjab, Pakistan
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 mb-4'>
                            <div className='card shadow'>
                                <div className='card-body text-muted'>
                                    <h6>
                                        <span className='badge bg-dark mb-2'>Mark as Default</span><br/>
                                        St#3,rasheedabad jhang road FSD,Punjab, Pakistan
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 mb-4'>
                            <div className='card shadow'>
                                <div className='card-body text-muted'>
                                    <h6>
                                        <span className='badge bg-dark mb-2'>Mark as Default</span><br/>
                                        St#3,rasheedabad jhang road FSD,Punjab, Pakistan
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 mb-4'>
                            <div className='card shadow'>
                                <div className='card-body text-muted'>
                                    <h6>
                                        <span className='badge bg-dark mb-2'>Mark as Default</span><br/>
                                        St#3,rasheedabad jhang road FSD,Punjab, Pakistan
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 mb-4'>
                            <div className='card shadow'>
                                <div className='card-body text-muted'>
                                    <h6>
                                        <span className='badge bg-dark mb-2'>Mark as Default</span><br/>
                                        St#3,rasheedabad jhang road FSD,Punjab, Pakistan
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 mb-4'>
                            <div className='card shadow'>
                                <div className='card-body text-muted'>
                                    <h6>
                                        <span className='badge bg-dark mb-2'>Mark as Default</span><br/>
                                        St#3,rasheedabad jhang road FSD,Punjab, Pakistan
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default AddressList;
