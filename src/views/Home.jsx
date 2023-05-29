import { Link } from "react-router-dom"
import { BsBoxSeam } from 'react-icons/bs'
import { BiNews, BiCartAlt } from 'react-icons/bi'
import { HiOutlineUsers } from 'react-icons/hi'

const Home = () => {
    return (
        <>
            <div className="container-fluid px-4">
                <div className="row">
                    <Link to="/users" className="col-md-6">
                        <div className="card ">
                            <div className="card-header ">
                                <h4 className="card-title"><span><HiOutlineUsers /></span> User List</h4>
                            </div>
                            <div className="card-body ">
                                <div className="stats">
                                    <i className="fa fa-clock-o"></i> Detail
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/carts" className="col-md-6">
                        <div className="card ">
                            <div className="card-header ">
                                <h4 className="card-title"><span><BiCartAlt /></span> Cart List</h4>
                            </div>
                            <div className="card-body ">
                                <div className="stats">
                                    <i className="fa fa-clock-o"></i> Detail
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/posts" className="col-md-6">
                        <div className="card ">
                            <div className="card-header ">
                                <h4 className="card-title"><span><BiNews /></span> Post List</h4>
                            </div>
                            <div className="card-body ">
                                <div className="stats">
                                    <i className="fa fa-clock-o"></i> Detail
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/products" className="col-md-6">
                        <div className="card ">
                            <div className="card-header ">
                                <h4 className="card-title"><span><BsBoxSeam /></span> Product List</h4>
                            </div>
                            <div className="card-body ">
                                <div className="stats">
                                    <i className="fa fa-clock-o"></i> Detail
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Home