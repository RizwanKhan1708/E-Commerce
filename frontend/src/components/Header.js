import {Link} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header(){
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
            <Link className="navbar-brand" to="/">PR Market place</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="categories">Categories</Link>
                    </li>

                    <NavDropdown title="My Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"><Link to="/customer/register">Register</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"><Link to="/customer/login">Login</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4"><Link to="/customer/dashboard">Dashboard</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Logout</NavDropdown.Item>
                    </NavDropdown>

                    <li className="nav-item">
                        <Link className="nav-link" to="checkout">My cart(4)</Link>
                    </li>



                </ul>
            </div>
        </div>
    </nav>
    )

}
export default Header;