import logo from "../logo.svg";
import {Link} from "react-router-dom";
import SingleProduct from "./SingleProduct";
import data from "bootstrap/js/src/dom/data";
import {useState,useEffect} from 'react'
import { Routes, Route, useParams } from 'react-router-dom';


function CategoryProducts(){
    const baseUrl="http://127.0.0.1:8000/api"
    const [Products,setProducts]=useState([])
    const [totalResult,setTotalResults]=useState(0)
    const {category_slug,category_id} = useParams()

    console.log('category_id');
    console.log(category_id);


    useEffect(() =>{
        fetchdata(baseUrl+'/products/?category='+category_id);
    },[])

    function fetchdata(baseurl){
        fetch(baseurl)
        .then((response)=>response.json())
        .then((data) => {
            setProducts(data.results);
            setTotalResults(data.count);
        })

    }
    function changeUrl(baseurl){
        fetchdata(baseurl)
    }
    var links=[];
    var limit=1;
    var totalLinks=totalResult/limit;
    for (let i=1; i<=totalLinks; i++){
        links.push(<li className="page-item"><Link onClick={()=> changeUrl(baseUrl+`/products/?category=${category_id}&page=${i}`)} to={`/category/${category_slug}/${category_id}/?page=${i}`}
        className="page-link">{i}</Link></li>)
    }

    return(
        <div className="container">
        {/* latest Products*/}
        <h3 className='mb-4 mt-4'><span className='text-success'>All </span>Products</h3>
            <div className='row mb-4'>
                {
                Products.map((product) => <SingleProduct product={product}/>)
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
export default CategoryProducts;