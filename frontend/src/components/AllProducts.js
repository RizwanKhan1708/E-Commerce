import logo from "../logo.svg";
import {Link} from "react-router-dom";
import SingleProduct from "./SingleProduct";
function AllProducts(){
    return(
        <div className="container">
        {/* latest Products*/}
        <h3 className='mb-4 mt-4'><span className='text-success'>All </span>Products</h3>
            <div className='row mb-4'>
                <SingleProduct title="Django Project1"/>
                <SingleProduct title="Django Project2"/>
                <SingleProduct title="Django Project3"/>
                <SingleProduct title="Django Project4"/>
                <SingleProduct title="Django Project5"/>
                <SingleProduct title="Django Project6"/>
                <SingleProduct title="Django Project7"/>
                <SingleProduct title="Django Project8"/>

            </div>


            <nav aria-label="Page navigation example ">
                <ul className="pagination mt-4">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
export default AllProducts;