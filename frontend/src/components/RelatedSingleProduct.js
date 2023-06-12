import logo from "../logo.svg";
import {Link} from "react-router-dom";

function RelatedSingleProduct(props){
    return(
        <div className='col-12 col-md-3 offset-md-4 col-sm-4 offset-sm-4 mb-4'>
            <div className="card shadow" >
                <Link to={`/product/${props.product.title}/${props.product.id}`}>
                    <img src={props.product.image} className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                    <h5 className="card-title"><Link to={`/product/${props.product.title}/${props.product.id}`}>{props.product.title}</Link></h5>
                    <h5 className="card-title text-muted">Price Rs. {props.product.price}</h5>
                </div>
                <div className='card-footer'>
                    <button title="Add to cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i>
                    </button>

                    <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i>
                    </button>

                </div>
            </div>

        </div>


    )
}
export default RelatedSingleProduct;