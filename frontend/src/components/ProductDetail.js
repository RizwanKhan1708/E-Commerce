import logo from "../logo.svg";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import SingleProduct from "./SingleProduct";
import RelatedSingleProduct from "./RelatedSingleProduct";
import {useState, useEffect, useContext} from "react";
import {UserContext,CartContext} from "../Context";


function ProductDetail(){
    const baseUrl="http://127.0.0.1:8000/api";
    const [ProductData,setProductData]=useState([]);
    const [cartButtonClickStatus,setCartButtonClickStatus]=useState(false);
    const {cartData,setCartData}=useContext(CartContext);
    const [product_imgs,setProductImags]=useState([]);
    const [productTags,setproductTags]=useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const {product_slug,product_id} = useParams();


    useEffect(() =>{
        fetchData(baseUrl+'/product/'+product_id);
        fetchRelatedData(baseUrl+'/related_products/'+product_id);
        checkProductInCart(product_id)
        localStorage.removeItem(cartData)
    },[]);

    function checkProductInCart(product_id){
        var previuosCart=localStorage.getItem('cartData')
        var cartJson=JSON.parse(previuosCart);
        if(cartJson != null){
            cartJson.map((cart) =>{
                if (cart != null && cart.product.id == product_id){
                    setCartButtonClickStatus(true)
                }
                }
            )
        }
    }

    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setProductData(data);
                setProductImags(data.product_imgs);
                setproductTags(data.tag_list);
            })
    }

    function fetchRelatedData(baseurl){
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
            setRelatedProducts(data.results); // Corrected state update

        })
    }

    const tagsLinks=[]
    for(let i=0; i<productTags.length; i++){
        let tag=productTags[i].trim();
        tagsLinks.push(<Link className='badge bg-secondary text-white me-1' to={`/products/${tag}`}>{tag}</Link>)
    }


    const cartAddButtonHandler = () =>{
        var previousCart=localStorage.getItem('cartData')
        var cartJson=JSON.parse(previousCart)
        var cartData={
                'product': {
                    'id': ProductData.id,
                    'title':ProductData.title,
                    'price':ProductData.price,
                    'image':ProductData.image
                },
                user:{
                    'id':1
                }
            }
        if(cartJson!=null){
            cartJson.push(cartData)
            var cartString=JSON.stringify(cartJson)
            localStorage.setItem('cartData',cartString)
            setCartData(cartJson)
        }else {
            var newCartList=[];
            newCartList.push(cartData)
            var cartstring=JSON.stringify(newCartList)
            localStorage.setItem('cartData',cartstring)
        }

        setCartButtonClickStatus(true)

    }

    const cartRemoveButtonHandler = () =>{
        var previousCart=localStorage.getItem('cartData');
        var cartJson=JSON.parse(previousCart);
        cartJson.map((cart,index)=>{
            if(cart!=null && cart.product.id == ProductData.id){
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
        <section className="container mt-4">
            <div className="row">
                <div className="col-4 ">
                    <Carousel>
                        {product_imgs.map((img, index) => (
                            <Carousel.Item key={index}>
                                <img src={img.image} alt={`Image ${index}`} className="d-block w-100" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <div className="col-8">
                    <h3>{ProductData.title}</h3>
                    <br></br>
                    <h5 className="card-title">Price Rs. <span className="text-danger">{ProductData.price}</span></h5>
                    <p>{ProductData.detail}</p>
                    {!cartButtonClickStatus &&
                        <button title="Add to cart" type="button" onClick={cartAddButtonHandler} className='btn btn-primary '><i className="fa-solid fa-cart-plus"></i> Add to Cart
                        </button>
                    }
                    {cartButtonClickStatus &&
                        <button title="Remove from cart" type="button" onClick={cartRemoveButtonHandler} className='btn btn-warning '><i className="fa-solid fa-cart-plus"></i> Remove from cart
                        </button>
                    }
                    <button title="Buy Now" className='btn btn-success  ms-1'><i
                        className="fa-solid fa-bag-shopping"></i> Buy Now
                    </button>

                    <button title="Add to Wishlist" className='btn btn-danger  ms-1'><i className="fa fa-heart"></i> Wishlist
                    </button>
                    <hr/>
                    <div className="productstags">
                        <h5 className='mt-3'>Tags</h5>
                        <p>
                            {tagsLinks}
                        </p>
                    </div>

                </div>

            </div>
            <br/>

            {/*related Products*/}
            <div>
                <h5 className="text-center">Related Products</h5>
                <Carousel>
                    {relatedProducts.map((product, index) => (
                        <Carousel.Item key={index}>
                            <RelatedSingleProduct product={product} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default ProductDetail;
