import logo from "../logo.svg";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import SingleProduct from "./SingleProduct";
import {useState,useEffect} from "react";


function ProductDetail(){
    const baseUrl="http://127.0.0.1:8000/api";
    const [ProductData,setProductData]=useState([]);
    const [product_imgs,setProductImags]=useState([]);
    const {product_slug,product_id} = useParams();

    useEffect(() =>{
        fetchData(baseUrl+'/product/'+product_id);
    },[]);


    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setProductData(data);
                setProductImags(data.product_imgs);
            })
    }
    return(
        <section className="container mt-4">
            <div className="row">
                <div className="col-4 ">
                    {/*<Carousel variant="dark" >*/}
                    {/*    /!*<div className='carousel-indicators'>*!/*/}
                    {/*        {*/}
                    {/*            ProductImags.map((img,index)=>{*/}
                    {/*                if(index === 0){*/}
                    {/*                    return <button type='button' data-bs-target="#productThumbnailSlider"*/}
                    {/*                                   data-bs-slide-to={index} className="active" aria-current="true"*/}
                    {/*                                   aria-label="Slide 1"></button>*/}
                    {/*                }else {*/}
                    {/*                    return <button type='button' className="active" data-bs-target="#productThumbnailSlider"*/}
                    {/*                                   data-bs-slide-to={index} aria-current="true"*/}
                    {/*                                   aria-label="Slide 1"></button>*/}
                    {/*                }*/}
                    {/*            })}*/}
                    {/*    /!*</div>*!/*/}
                    {/*    /!*<Carousel.Item>*!/*/}
                    {/*    /!*    <figure className="relatedProducts">*!/*/}
                    {/*    /!*        <blockquote className="blockquote">*!/*/}
                    {/*    /!*            *!/*/}
                    {/*    /!*        </blockquote>*!/*/}
                    {/*    /!*    </figure>*!/*/}
                    {/*    /!*    <br></br>*!/*/}
                    {/*    /!*    /!*<br></br>*!/*!/*/}
                    {/*    /!*</Carousel.Item>*!/*/}
                    {/*    <Carousel.Item>*/}
                    {/*        <figure className="relatedProducts">*/}
                    {/*            <blockquote className="blockquote">*/}
                    {/*                {*/}
                    {/*                    ProductImags.map((img,index)=>{*/}
                    {/*                        if(index === 0){*/}
                    {/*                            return <div className="carousel-item active">*/}
                    {/*                                <img src={img.image} className='img-thumbnail mb-5' alt={index}/>*/}
                    {/*                            </div>*/}
                    {/*                        }else {*/}
                    {/*                            return <div className="carousel-item ">*/}
                    {/*                                <img src={img.image} className='img-thumbnail mb-5' alt={index}/>*/}
                    {/*                            </div>*/}

                    {/*                    }*/}
                    {/*                })}*/}
                    {/*            </blockquote>*/}
                    {/*        </figure>*/}
                    {/*        <br></br>*/}
                    {/*        /!*<br></br>*!/*/}
                    {/*    </Carousel.Item>*/}
                    {/*</Carousel>*/}

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
                            <Link to="#" className='badge bg-secondary text-white me-1'>Python</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Django</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Web Scripts</Link>
                        </p>
                    </div>

                </div>

            </div>

            {/*related Products */}
            <h3 className="mt-5 mb-3">Related Products</h3>
            <div id="relatedProductsSlider" className="carousel slide">
                <Carousel variant="dark" controls={false} indicators={false} >
                    <Carousel.Item>
                        <figure className="relatedProducts">
                            <blockquote className="blockquote">
                                <div className="row">

                            {/*        /!*<SingleProduct title="Python Project1"/>*!/*/}
                            {/*        /!*<SingleProduct title="Python Project1"/>*!/*/}
                            {/*        /!*<SingleProduct title="Python Project1"/>*!/*/}
                            {/*        /!*<SingleProduct title="Python Project1"/>*!/*/}
                                </div>
                            </blockquote>
                        </figure>
                        <br></br>
                        {/*<br></br>*/}
                    </Carousel.Item>
                    <Carousel.Item>
                        <figure className="relatedProducts">
                            {/*<blockquote className="blockquote">*/}
                            {/*    <div className="row">*/}
                            {/*        <SingleProduct title="Djanog Project1"/>*/}
                            {/*        <SingleProduct title="Djanog Project1"/>*/}
                            {/*        <SingleProduct title="Djanog Project1"/>*/}
                            {/*        <SingleProduct title="Djanog Project1"/>*/}
                            {/*    </div>*/}
                            {/*</blockquote>*/}
                        </figure>
                        <br></br>
                    </Carousel.Item>
                    <Carousel.Item>
                        <figure className="relatedProducts">
                            {/*<blockquote className="blockquote">*/}
                            {/*    <div className="row">*/}
                            {/*        <SingleProduct title="flutter Project1"/>*/}
                            {/*        <SingleProduct title="flutter Project1"/>*/}
                            {/*        <SingleProduct title="flutter Project1"/>*/}
                            {/*        <SingleProduct title="flutter Project1"/>*/}
                            {/*    </div>*/}
                            {/*</blockquote>*/}

                        </figure>
                        <br></br>

                    </Carousel.Item>
                </Carousel>
            </div>
            {/*End related Products */}
        </section>
    )
}

export default ProductDetail;
