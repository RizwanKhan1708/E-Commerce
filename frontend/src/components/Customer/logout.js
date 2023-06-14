

function Logout(props) {
    localStorage.removeItem('customer_login')
    localStorage.removeItem('customer_username')
    window.location.href='login'
}
export default Logout;