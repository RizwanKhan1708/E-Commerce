import logo from "../logo.svg";
import {Link} from "react-router-dom";
function Categories(){
    return(
        <section className='container mt-4'>
            {/* Popular categories*/}
                <h3 className='mb-4'>All Categories</h3>
                <div className='row'>
                    {/* Category Box */}
                    <div className='col-12 col-md-3 mb-2'>
                        <div className="card shadow" >
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title"><Link to='/category/python/1'>Python</Link></h4>
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
                                <h4 className="card-title"><Link to='/category/python/1'>Category title</Link></h4>
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
                                <h4 className="card-title"><Link to='/category/python/1'>Category title</Link></h4>
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
                                <h4 className="card-title"><Link to='/category/python/1'>Category title</Link></h4>
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
                                <h4 className="card-title"><Link to='/category/python/1'>Category title</Link></h4>
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
                                <h4 className="card-title"><Link to='/category/python/1'>Category title</Link></h4>
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
                                <h4 className="card-title"><Link to='/category/python/1'>Category title</Link></h4>
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
                                <h4 className="card-title"><Link to='/category/python/1'>Category title</Link></h4>
                            </div>
                            <div className='card-footer'>
                                Product Downloads: 2000
                            </div>
                        </div>


                    </div>
                    {/* Category Box End*/}
                </div>
                {/* Popular categories End*/}

            <nav aria-label="Page navigation example">
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
        </section>
    )

}
export default Categories;