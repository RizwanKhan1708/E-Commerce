import {UserContext} from "../Context";
import {useContext} from "react";
import axios from "axios";
function ConfirmOrder() {
    const baseurl = "http://127.0.0.1:8000/api";
    const userContext=useContext(UserContext)
    console.log(userContext)
    if (!userContext || userContext.login === null) {
        window.location.href = "/customer/login";
        return null; // Return null or a loading spinner if redirecting
    }else{
        console.log(userContext)
    }

    function addOrderInTable(){

        const customerId=localStorage.getItem('customer_id')
        console.log(customerId)
        const formData=new FormData()
        formData.append('customer',customerId)

    //    submit data
        axios.post(baseurl+'/orders/',formData)
            .then(function (response){
                console.log(response.data)
            })
            .catch(function (error){
                console.log(error)
            })

    }

    return(
        <h1 className="text-center">Order Confirmed</h1>
    )

}

export default ConfirmOrder