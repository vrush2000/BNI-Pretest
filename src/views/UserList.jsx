import { useEffect } from "react";
import { useState } from "react"
import Table from 'react-bootstrap/Table';
import { RxFilePlus } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchAllUser } from "../stores/actionCreator/userActionCreator";

const UserList = () => {
    const [loading, isLoading] = useState(true);
    const { users } = useSelector((state) => state);

    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(fetchAllUser());
        isLoading(false);
    }, []);

    if (loading) {
        return (
            <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" alt="" />
        )
    }

    return (
        <div className="container-fluid px-4">

            <div className='d-flex flex-row align-items-center'>
                <h4 className="mt-0 col-lg-2 col-md-2">User List</h4>
                <Link to={`/users/add`}>
                    <button type="button" className="btn btn-det  mb-3"><RxFilePlus /> Add</button>
                </Link>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Company</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.users?.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{`${user.firstName} ${user.lastName}`}</td>
                            <td>{user.gender}</td>
                            <td>{user.company.name}</td>
                            <td className="d-flex flex-row">
                                <Link to={`/users/${user.id}`}>
                                    <button type="button" className="btn-det">Detail</button>
                                </Link>
                                <Link to={`/edit/${user.id}`}>
                                    <button type="button" className="btn-edit">Edit</button>
                                </Link>
                                <button type="button" onClick={() => dispatcher(deleteUser(user.id))} className="btn-del">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default UserList