import { Link } from "react-router-dom";
import { RxDashboard } from 'react-icons/rx'
import { TbLogout } from 'react-icons/tb'
import { BsBoxSeam } from 'react-icons/bs'
import { BiNews, BiCartAlt } from 'react-icons/bi'
import { HiOutlineUsers } from 'react-icons/hi'

const SideBar = () => {
    return (

        <div className="sidebar" >
            <div className="sidebar-wrapper">
                <div className="logo">
                    <Link href="/" className="simple-text">
                        BNI PRE TEST
                    </Link>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>
                            <i className="nc-icon">
                                <RxDashboard />
                            </i>
                            <p>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to='/users'>
                            <i className="nc-icon">
                                <HiOutlineUsers />
                            </i>
                            <p>Users</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to='/carts'>
                            <i className="nc-icon">
                                <BiCartAlt />
                            </i>
                            <p>Carts</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to='/posts'>
                            <i className="nc-icon">
                                <BiNews />
                            </i>
                            <p>Posts</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to='/products'>
                            <i className="nc-icon">
                                <BsBoxSeam />
                            </i>
                            <p>Products</p>
                        </Link>
                    </li>
                    <li className="mt-5">
                        <div className="nav-link" >
                            <i className="nc-icon">
                                <TbLogout />
                            </i>
                            <p>Logout</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default SideBar;