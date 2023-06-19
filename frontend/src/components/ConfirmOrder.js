import {UserContext} from "../Context";
import {useContext} from "react";
function ConfirmOrder() {
    const userContext=useContext(UserContext)
    console.log(userContext)
    if (!userContext || userContext.login === null) {
        window.location.href = "/customer/login";
        return null; // Return null or a loading spinner if redirecting
    }
    return(
        <h1 className="text-center">Order Confirmed</h1>
    )

}

export default ConfirmOrder