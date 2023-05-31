import logo from "../../logo.svg";
import {Link} from "react-router-dom";
import SellerSidebar from "./SellerSidebar";

function SellerProducts(props){
    return(
        <div className='container mt-4'>
            <div className='row'>
               <div className="col-md-3 col-12 mb-2">
                    <SellerSidebar />
               </div>
                <div className="col-md-9 col-12 mb-2">
                    <h3><Link to='/seller/add-product' className='btn btn-primary mb-2'><i className='fa fa-plus-circle me-1'></i>Add Products</Link></h3>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Product Title</td>
                                <td>500</td>
                                <td>process</td>
                                <td>
                                    <a href="#" className="btn btn-info me-1">view</a>
                                    <a href="#" className="btn btn-primary me-1">Edit</a>
                                    <a href="#" className="btn btn-danger me-1">Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Product Title</td>
                                <td>500</td>
                                <td>process</td>
                                <td>
                                    <a href="#" className="btn btn-info me-1">view</a>
                                    <a href="#" className="btn btn-primary me-1">Edit</a>
                                    <a href="#" className="btn btn-danger me-1">Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Product Title</td>
                                <td>500</td>
                                <td>process</td>
                                <td>
                                    <a href="#" className="btn btn-info me-1">view</a>
                                    <a href="#" className="btn btn-primary me-1">Edit</a>
                                    <a href="#" className="btn btn-danger me-1">Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Product Title</td>
                                <td>500</td>
                                <td>process</td>
                                <td>
                                    <a href="#" className="btn btn-info me-1">view</a>
                                    <a href="#" className="btn btn-primary me-1">Edit</a>
                                    <a href="#" className="btn btn-danger me-1">Delete</a>
                                </td>
                            </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default SellerProducts;