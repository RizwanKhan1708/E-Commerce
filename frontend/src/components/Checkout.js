import logo from "../logo.svg";
import {Link} from "react-router-dom";
import {CartContext} from "../Context";
import {useContext, useState} from "react";

function Checkout(props){
    const {cartData,setCartData}=useContext(CartContext);
    const [cartButtonClickStatus,setCartButtonClickStatus]=useState(false);
    const [ProductData,setProductData]=useState([]);
    if (cartData == null || cartData.length==0){
        var cartitems=0
    }else {
        var cartitems=cartData.length
    }

    var sum=0
    cartData.map((item,index)=>{
        sum+=parseFloat(item.product.price)
    })

     const cartRemoveButtonHandler = (product_id) =>{
        var previousCart=localStorage.getItem('cartData');
        var cartJson=JSON.parse(previousCart);
        cartJson.map((cart,index)=>{
            if(cart!=null && cart.product.id == product_id){
                // delete cartJson[index];
                cartJson.splice(index,1)
            }
        });
        var cartString=JSON.stringify(cartJson);
        localStorage.setItem('cartData', cartString)
        setCartButtonClickStatus(false)
        setCartData(cartJson)
    }

    return(
        <div className='container mb-4'>
            <h3 className='mb-4'>All Items ({cartitems}) </h3>
            {cartitems!=0 &&
                <div className='row'>
                    <div className='col-12'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {cartitems &&
                                    cartData.map((item, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <Link><img src={item.product.image} className="img-thumbnail" width="80" alt={item.product.title}/></Link>
                                                    <Link><p>{item.product.title}</p></Link>
                                                </td>
                                                <td>{item.product.price}</td>
                                                <td>
                                                    <button title="Remove from cart" type="button" onClick={()=>cartRemoveButtonHandler(item.product.id)} className='btn btn-warning '><i className="fa-solid fa-cart-plus"></i> Remove from cart
                                                    </button>
                                               </td>
                                            </tr>
                                        )

                                    })
                                }

                                </tbody>

                            <tfoot>
                            <tr>
                                <th></th>
                                <th>Total</th>
                                <th>Rs: {sum}</th>

                            </tr>


                            <tr>
                                <td colSpan='4' align='center'>
                                    <Link to="/categories" className="btn btn-secondary">Continue Shopping</Link>
                                    <Link to="/confirm-order" className="btn btn-success ms-1">Proceed to
                                        Payment</Link>
                                </td>
                            </tr>

                            </tfoot>
                            </table>

                        </div>

                    </div>
                </div>
            }
            <br/>
            {cartitems==0 &&
                <Link to="/categories" className="btn btn-success">Continue Shopping</Link>
            }
        </div>

    )
}
export default Checkout;