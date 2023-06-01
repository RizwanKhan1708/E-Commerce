import logo from "../logo.svg";
import {Link} from "react-router-dom";
import SingleProduct from "./SingleProduct";
import data from "bootstrap/js/src/dom/data";

//to fetch data from APi
import {useState,useEffect} from 'react'
function AllProducts(){
    const baseUrl="http://127.0.0.1:8000/api"
    const [products,setProducts]=useState([])
    const [totalResult,setTotalResults]=useState(0)
    useEffect(() => {
        fetchData(baseUrl+'/products');
    },[]);

    function fetchData(baseUrl){
        fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => {
            setProducts(data.results)
            setTotalResults(data.count)
        });
    }

    function changeUrl(baseUrl){
        fetchData(baseUrl);
    }

    var links=[];
    var limit=1;
    var totalLinks=totalResult/limit;
    for(let i=1; i<=totalLinks; i++){
        links.push(<li className="page-item"><Link onClick={()=>changeUrl(baseUrl+`/products?page=${i}`)} to={`/products?page=${i}`} className="page-link" >{i}</Link></li>)
    }

    return(
        <div className="container">
        {/* latest Products*/}
        <h3 className='mb-4 mt-4'><span className='text-success'>All </span>Products</h3>
            <div className='row mb-4'>
                {
                    products.map((product)=><SingleProduct product={product}/>)
                }

            </div>


            <nav aria-label="Page navigation example ">
                <ul className="pagination mt-4">
                    {links}
                </ul>
            </nav>

        </div>
    )
}
export default AllProducts;