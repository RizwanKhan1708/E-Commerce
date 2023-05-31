import logo from "../../logo.svg";
import {Link} from "react-router-dom";
import SellerSidebar from "./SellerSidebar";

function SellerAddProducts(props){
    return(
        <div className='container mt-4'>
            <div className='row'>
                 <div className='col-md-3 col-12 mb-2'>
                    <SellerSidebar/>
                </div>
                <div className='col-md-8 col-12'>
                    <div className='card'>
                        <h4 className='card-header'>Add Product</h4>
                        <div className='card-body'>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <select className='form-control'>
                                        <option>python</option>
                                        <option>Django</option>
                                        <option>Flutter</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label">Product Title</label>
                                    <input type="text" className="form-control" id='firstname'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input type="number" className="form-control" id='price'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label">Description</label>
                                    <textarea className="form-control" rows='6' id='desc'/>
                                </div>
                                <div className="mb-3">
                                    <label For="productimg" className="form-label">Product Images</label>
                                    <input className="form-control" type="file" id="productimg"/>
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
export default SellerAddProducts;
