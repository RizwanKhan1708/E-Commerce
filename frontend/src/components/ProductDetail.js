import logo from "../logo.svg";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import SingleProduct from "./SingleProduct";
import RelatedSingleProduct from "./RelatedSingleProduct";
import {useState,useEffect} from "react";


function ProductDetail(){
    const baseUrl="http://127.0.0.1:8000/api";
    const [ProductData,setProductData]=useState([]);
    const [product_imgs,setProductImags]=useState([]);
    const [productTags,setproductTags]=useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const {product_slug,product_id} = useParams();


    useEffect(() =>{
        fetchData(baseUrl+'/product/'+product_id);
        fetchRelatedData(baseUrl+'/related_products/'+product_id);
    },[]);


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
                    <button title="Add to cart" className='btn btn-primary '><i className="fa-solid fa-cart-plus"></i> Add to Cart
                    </button>

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
