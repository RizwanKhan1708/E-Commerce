import {Link} from "react-router-dom";
function Sidebar(){
    return(
        <div className="list-group">
            <Link to="/seller/dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
            <Link to="/seller/products" className="list-group-item list-group-item-action">Products</Link>
            <Link to="/seller/add-product" className="list-group-item list-group-item-action">Add-Products</Link>
            <Link to="/seller/orders" className="list-group-item list-group-item-action">Orders</Link>
            <Link to="/seller/customer" className="list-group-item list-group-item-action">Customers</Link>
            <Link to="/seller/reports" className="list-group-item list-group-item-action">Reports</Link>
            <Link to="/seller/update-profile" className="list-group-item list-group-item-action">profile</Link>
            <Link to="/seller/change-password" className="list-group-item list-group-item-action">Change-password</Link>
            <Link to="/seller/logout" className="list-group-item list-group-item-action text-danger ">Logout</Link>
        </div>
    )

}
export default Sidebar;