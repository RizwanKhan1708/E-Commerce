import logo from "../logo.svg";
import {Link} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import SingleProduct from "./SingleProduct";
function ProductDetail(){
    return(
        <section className="container mt-4">
            <div className="row">
                <div className="col-4 ">
                    <Carousel variant="dark" >
                    <Carousel.Item>
                        <figure className="relatedProducts">
                            <blockquote className="blockquote">
                                <img src={logo} className="img-thumbnail mb-4" alt="..."/>
                            </blockquote>
                        </figure>
                        <br></br>
                        {/*<br></br>*/}
                    </Carousel.Item>
                    <Carousel.Item>
                        <figure className="relatedProducts">
                            <blockquote className="blockquote">
                                <img src={logo} className="img-thumbnail mb-4" alt="..."/>
                            </blockquote>
                        </figure>
                        <br></br>
                    </Carousel.Item>
                    <Carousel.Item>
                        <figure className="relatedProducts">
                            <blockquote className="blockquote">
                                <img src={logo} className="img-thumbnail mb-4" alt="..."/>
                            </blockquote>

                        </figure>
                        <br></br>

                    </Carousel.Item>
                </Carousel>
                </div>
                <div className="col-8">
                    <h3>Product Title</h3>
                    <br></br>
                    <h5 className="card-title">Price Rs. <span className="text-danger">500</span></h5>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
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
                                    <SingleProduct title="Python Project1"/>
                                    <SingleProduct title="Python Project1"/>
                                    <SingleProduct title="Python Project1"/>
                                    <SingleProduct title="Python Project1"/>
                                </div>
                            </blockquote>
                        </figure>
                        <br></br>
                        {/*<br></br>*/}
                    </Carousel.Item>
                    <Carousel.Item>
                        <figure className="relatedProducts">
                            <blockquote className="blockquote">
                                <div className="row">
                                    <SingleProduct title="Djanog Project1"/>
                                    <SingleProduct title="Djanog Project1"/>
                                    <SingleProduct title="Djanog Project1"/>
                                    <SingleProduct title="Djanog Project1"/>
                                </div>
                            </blockquote>
                        </figure>
                        <br></br>
                    </Carousel.Item>
                    <Carousel.Item>
                        <figure className="relatedProducts">
                            <blockquote className="blockquote">
                                <div className="row">
                                    <SingleProduct title="flutter Project1"/>
                                    <SingleProduct title="flutter Project1"/>
                                    <SingleProduct title="flutter Project1"/>
                                    <SingleProduct title="flutter Project1"/>
                                </div>
                            </blockquote>

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