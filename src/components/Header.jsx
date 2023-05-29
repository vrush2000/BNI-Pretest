import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    
    const date = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

    return (
        <>
            <nav className="z-10 sticky-top navbar navbar-expand-lg " >
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#pablo"> {location.pathname === "/" ? "Dashboard" : location.pathname === "/users" ? "Users" : location.pathname === "/carts" ? "Carts" : location.pathname === "/posts" ? "Posts" : location.pathname === "/products" ? "Products" : ""} </a>
                    <button href="" className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar burger-lines"></span>
                        <span className="navbar-toggler-bar burger-lines"></span>
                        <span className="navbar-toggler-bar burger-lines"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navigation">
                        <ul className="ml-auto navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#pablo">
                                    <span className="no-icon">{date}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header