import { useEffect } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { RxPencil2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailUser } from "../stores/actionCreator/userActionCreator";


const UserDetail = () => {
    const [loading, isLoading] = useState(true);
    const { id } = useParams()
    
    const { users } = useSelector((state) => state);
    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(fetchDetailUser(id));
        isLoading(false);
    }, []);


    if (loading && !users?.user?.company?.name) {
        return (
            <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" alt="" />
        )
    }

    return (
        <div className='container-fluid px-4'>
            <div className='d-flex flex-row align-items-center'>
                <h4 className="mt-0 col-lg-1 col-md-1">Profile</h4>
                <Link to={`/edit/${users.user.id}`}>
                    <button type="button" className="btn-edit  mb-3"><RxPencil2 /> Edit</button>
                </Link>
            </div>
            <div className='card p-4 d-flex flex-row'>
                <img src={users.user.image} alt='' className='me-4  object-fit-cover border rounded' />
                <Form className='col-4'>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Name</Form.Label>
                        <div>{`${users.user.firstName} ${users.user.lastName}`} </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Maiden Name</Form.Label>
                        <div>{users.user.maidenName} </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Age</Form.Label>
                        <div>{users.user.age} </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Gender</Form.Label>
                        <div>{users.user.gender} </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>BirthDate</Form.Label>
                        <div>{users.user.birthDate} </div>
                    </Form.Group>
                    {/* <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Address</Form.Label>
                        <div>{`${users.user.address.address} ${users.user.address.city}, ${users.user.address.postalCode}, ${users.user.address.state}`} </div>
                    </Form.Group> */}
                </Form>
                <Form className='col-3'>
                    <div className='card p-3'>
                        <Form.Group className="mb-3">
                            <Form.Label className='fw-bold'>Job</Form.Label>
                            <div>{users?.user?.company?.title}</div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='fw-bold'>Company</Form.Label>
                            <div>{users?.user?.company?.name} </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='fw-bold'>Department</Form.Label>
                            <div>{users?.user?.company?.department} </div>
                        </Form.Group>
                        {/* <Form.Group className="mb-3">
                            <Form.Label className='fw-bold'>Address</Form.Label>
                            <div>{`${users?.user?.company?.address?.address} ${users.user.company.address.city}, ${users.user.company.address.postalCode}, ${users.user.company.address.state}`} </div>
                        </Form.Group> */}
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default UserDetail