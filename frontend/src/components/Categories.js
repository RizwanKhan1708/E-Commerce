import logo from "../logo.svg";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import SingleProduct from "./SingleProduct";
function Categories(){
    const baseUrl="http://127.0.0.1:8000/api"
    const [categories,setcategories]=useState([])
    const [totalResult,setTotalResults]=useState(0)

    useEffect(() =>{
        fetchdata(baseUrl+'/categories');
    },[])

    function fetchdata(baseurl){
        fetch(baseurl)
        .then((response)=>response.json())
        .then((data) => {
            setcategories(data.results);
            setTotalResults(data.count);
        })

    }
    function changeUrl(baseurl ){
        fetchdata(baseurl)
    }
    var links=[];
    var limit=1
    var totalLinks=totalResult/limit;
    for (let i=1; i<=totalLinks; i++){
        links.push(<li className="page-item"><Link onClick={()=> changeUrl(baseUrl+`/categories?page=${i}`)} to={`/categories?page=${i}`}
        className="page-link">{i}</Link></li>)
    }
    return(
        <section className='container mt-4'>
            {/* Popular categories*/}
                <h3 className='mb-4'>All Categories</h3>
                <div className='row mb-2'>
                    {
                        categories.map((category) =>
                        <div className='col-12 col-md-3 mb-2'>
                        <div className="card shadow" >
                            <img src={logo} className="card-img-top" alt={category.title}/>
                            <div className="card-body">
                                <h4 className='card-title'><Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link></h4>
                            </div>
                            <div className='card-footer'>
                                Product Downloads: 2000
                            </div>
                        </div>
                        </div>
                    )
                    }
                </div>





            <nav aria-label="Page navigation example">
                <ul className="pagination mt-4">
                    {links}
                </ul>
            </nav>
        </section>
    )

}
export default Categories;