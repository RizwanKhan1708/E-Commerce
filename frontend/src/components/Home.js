import {Link} from "react-router-dom";
import SingleProduct from "./SingleProduct";
import logo from "../logo.svg";
import Carousel from "react-bootstrap/Carousel";
import AllProducts from "./AllProducts";
function Home(){
    return(
        <main className='mt-4'>
            <div className='container'>
                {/* latest Products*/}
                <h3 className='mb-4'>New Products <Link to="/products" className='float-end btn btn-sm btn-success'>View All Products <i
                    className="fa-solid fa-arrow-right-long"></i></Link> </h3>
                <div className='row'>
                    {/* Product Box */}
                    <SingleProduct title="Django Project1"/>
                    <SingleProduct title="Django Project1"/>
                    <SingleProduct title="Django Project1"/>
                    <SingleProduct title="Django Project1"/>
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>

                </div>
                {/*end Latest products */}
                {/* Popular categories*/}
                <h3 className='mb-4 mt-4'>Popular Categories <Link to="categories" className='float-end btn btn-sm btn-success'>View All Categories <i
                    className="fa-solid fa-arrow-right-long"></i></Link> </h3>
                <div className='row'>
                    {/* Category Box */}
                    <div className='col-12 col-md-3 mb-2'>
                        <div className="card shadow" >
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Category title</h4>
                            </div>
                            <div className='card-footer'>
                                Product Downloads: 2000
                            </div>
                        </div>


                    </div>
                    {/* Category Box End*/}
                    {/* Category Box */}
                    <div className='col-12 col-md-3 mb-2'>
                        <div className="card shadow" >
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Category title</h4>
                            </div>
                            <div className='card-footer'>
                                Product Downloads: 2000
                            </div>
                        </div>


                    </div>
                    {/* Category Box End*/}
                    {/* Category Box */}
                    <div className='col-12 col-md-3 mb-2'>
                        <div className="card shadow" >
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Category title</h4>
                            </div>
                            <div className='card-footer'>
                                Product Downloads: 2000
                            </div>
                        </div>


                    </div>
                    {/* Category Box End*/}
                    {/* Category Box */}
                    <div className='col-12 col-md-3 mb-2'>
                        <div className="card shadow" >
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Category title</h4>
                            </div>
                            <div className='card-footer'>
                                Product Downloads: 2000
                            </div>
                        </div>


                    </div>
                    {/* Category Box End*/}
                </div>
                {/* Popular categories End*/}

                {/* popular Products */}
                <h3 className='mb-4 mt-4'>Popular Products <a href="#" className='float-end btn btn-sm btn-success'>View All Popular Products <i
                    className="fa-solid fa-arrow-right-long"></i></a> </h3>

                <div className='row'>
                    {/* popular Products Box */}
                    <div className='col-12 col-md-3 mb-2'>
                        <div className="card shadow" >
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Product title</h4>
                                <h5 className="card-title text-muted">Price Rs. 500</h5>
                            </div>
                            <div className='card-footer'>
                                <button title="Add to cart" className='btn btn-success btn-sm m-2'><i className="fa-solid fa-cart-plus"></i>
                                </button>

                                <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i>
                                </button>

                            </div>
                        </div>


                    </div>
                    {/* popular Products Box End*/}
                    {/* popular Products Box */}
                    <div className='col-12 col-md-3 mb-2'>
                        <div className="card shadow" >
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Product title</h4>
                                <h5 className="card-title text-muted">Price Rs. 500</h5>
                            </div>
                            <div className='card-footer'>
                                <button title="Add to cart" className='btn btn-success btn-sm m-2'><i className="fa-solid fa-cart-plus"></i>
                                </button>

                                <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i>
                                </button>

                            </div>
                        </div>


                    </div>
                    {/* popular Products Box End*/}
                    {/* popular Products Box */}
                    <div className='col-12 col-md-3 mb-2'>
                        <div className="card shadow" >
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Product title</h4>
                                <h5 className="card-title text-muted">Price Rs. 500</h5>
                            </div>
                            <div className='card-footer'>
                                <button title="Add to cart" className='btn btn-success btn-sm m-2'><i className="fa-solid fa-cart-plus"></i>
                                </button>

                                <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i>
                                </button>

                            </div>
                        </div>


                    </div>
                    {/* popular Products Box End*/}
                    {/* popular Products Box */}
                    <div className='col-12 col-md-3 mb-2'>
                        <div className="card shadow" >
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Product title</h4>
                                <h5 className="card-title text-muted">Price Rs. 500</h5>
                            </div>
                            <div className='card-footer'>
                                <button title="Add to cart" className='btn btn-success btn-sm m-2'><i className="fa-solid fa-cart-plus"></i>
                                </button>

                                <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i>
                                </button>

                            </div>
                        </div>


                    </div>
                    {/* popular Products Box End*/}
                </div>
                {/*popular products end */}

                {/* Popular Sellers */}
                <h3 className='mb-4 mt-4'>Popular Sellers <a href="#" className='float-end btn btn-sm btn-success'>View All Sellers <i
                    className="fa-solid fa-arrow-right-long"></i></a> </h3>
                <div className='row'>
                    {/* popular Seller */}
                    <div className='col-12 col-md-3 mb-2'>
                        <div className="card shadow" >
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Seller Name</h4>
                            </div>
                            <div className='card-footer'>
                                Average Business: 2000$ per week
                                <br/>
                                Categoris: <a href="#">Electronics</a>
                            </div>
                        </div>
                    </div>
                    {/* popular Seller  End*/}
                    {/* popular Seller */}
                    <div className='col-12 col-md-3 mb-2'>
                        <div className="card shadow" >
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Seller Name</h4>
                            </div>
                            <div className='card-footer'>
                                Average Business: 2000$ per week
                                <br/>
                                Categoris: <a href="#">foods</a>
                            </div>
                        </div>
                    </div>
                    {/* popular Seller End*/}
                    {/* popular Seller */}

                    <div className='col-12 col-md-3 mb-2'>
                        <div className="card shadow" >
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Seller Name</h4>
                            </div>
                            <div className='card-footer'>
                                Average Business: 2000$ per week
                                <br/>
                                Categoris: <a href="#">Fashion</a>,<a href="#">footwear</a>
                            </div>
                        </div>
                    </div>
                    {/* popular Seller End*/}
                    {/* popular Seller */}

                    <div className='col-12 col-md-3 mb-2'>
                        <div className="card shadow" >
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Seller Name</h4>
                            </div>
                            <div className='card-footer'>
                                Average Business: 2000$ per week
                                <br/>
                                Categoris: <a href="#">watches</a>,<a href="#">smartbands</a>
                            </div>
                        </div>
                    </div>
                    {/* popular Seller End*/}
                </div>

                {/* Rating and review */}
                <div id="carouselExample" className="carousel slide my-3 border bg-dark text-white p-5">
                    <Carousel>
                        <Carousel.Item>
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                    {/*<i className="fa-solid fa-star"></i>*/}
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <cite title="Source Title">Customer Name</cite>
                                </figcaption>
                            </figure>
                            <br></br>
                            {/*<br></br>*/}
                        </Carousel.Item>
                        <Carousel.Item>
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <cite title="Source Title">Customer Name</cite>
                                </figcaption>
                            </figure>
                            <br></br>
                            {/*<br></br>*/}
                        </Carousel.Item>
                        <Carousel.Item>
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <cite title="Source Title">Customer Name</cite>
                                </figcaption>
                            </figure>
                            <br></br>
                            {/*<br></br>*/}

                        </Carousel.Item>
                    </Carousel>
                </div>

                {/* Rating and review End */}




            </div>
        </main>
         )

}
export default Home;