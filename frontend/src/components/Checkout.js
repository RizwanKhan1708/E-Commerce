import logo from "../logo.svg";
import {Link} from "react-router-dom";

function Checkout(props){
    return(
        <div className='container mb-4'>
            <h3 className='mb-4'>All Items(4)</h3>
            <div className='row'>
                <div className='col-md-8 col-12'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link><img src={logo} className="img-thumbnail" width='80' alt="..."/></Link>
                                    <Link><p>Django</p></Link>
                                </td>
                                <td>Rs: 500</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <Link><img src={logo} className="img-thumbnail" width='80' alt="..."/></Link>
                                    <Link><p>Python</p></Link>
                                </td>
                                <td>Rs: 500</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <Link><img src={logo} className="img-thumbnail" width='80' alt="..."/></Link>
                                    <Link><p>Flask</p></Link>
                                </td>
                                <td>Rs: 500</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <Link><img src={logo} className="img-thumbnail" width='80' alt="..."/></Link>
                                    <Link><p>Flutter</p></Link>
                                </td>
                                <td>Rs: 500</td>
                            </tr>
                            </tbody>

                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Total</th>
                                    <th>Rs: 2000</th>
                                </tr>

                                <tr>
                                    <td colSpan='3' align='right'>
                                        <Link to="/categories" className="btn btn-secondary">Continue Shopping</Link>
                                        <Link className="btn btn-success ms-1">Proceed to Payment</Link>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                    </div>

                </div>
            </div>

        </div>

    )
}
export default Checkout;