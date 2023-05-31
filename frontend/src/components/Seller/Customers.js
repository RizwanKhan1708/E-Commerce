import logo from "../../logo.svg";
import {Link} from "react-router-dom";
import SellerSidebar from "./SellerSidebar";

function Customers(props){
    return(
        <div className='container mt-4'>
            <div className='row'>
               <div className="col-md-3 col-12 mb-2">
                    <SellerSidebar />
               </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className='row'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    Adeel
                                </td>
                                <td>adeel@gmail.com</td>
                                <td><span className='text-success'>0312345678</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm ms-1">Orders</button>
                                    <button className="btn btn-danger btn-sm ms-1">Remove from List</button>

                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    bilal
                                </td>
                                <td>bilal@gmail.com</td>
                                <td><span className='text-success'>0312345678</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm ms-1">Orders</button>
                                    <button className="btn btn-danger btn-sm ms-1">Remove from List</button>

                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    Ahmad cheema
                                </td>
                                <td>cheema@gmail.com</td>
                                <td><span className='text-success'>0312345678</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm ms-1">Orders</button>
                                    <button className="btn btn-danger btn-sm ms-1">Remove from List</button>

                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    fahad
                                </td>
                                <td>fahad@gmail.com</td>
                                <td><span className='text-success'>0312345678</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm ms-1">Orders</button>
                                    <button className="btn btn-danger btn-sm ms-1">Remove from List</button>

                                </td>
                            </tr>
                            </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Customers;