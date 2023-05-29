import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { addUser } from "../stores/actionCreator/userActionCreator";

const AddUser = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        maidenName: '',
        age: '',
        gender: '',
        birthDate: '',
        address: { address: '', city: '', postalCode: '', state: '' },
        image: ''
    });

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isFormComplete = () => {
        return Object.values(user && user.address).every((value) => value !== "");
    };

    const handleSubmit = (e) => {
        if (isFormComplete) {
            e.preventDefault();
            dispatch(addUser(user));
        }
    };


    useEffect(() => {
    }, [user]);

    return (
        <div className='container-fluid px-4'>
            <h4 className="mt-0">Add User</h4>
            <div className='card p-4 d-flex flex-row'>
                <img src={user.image} alt='' className='me-4 col-3 object-fit-fill border rounded' />
                <Form className='col-8 me-4' onSubmit={handleSubmit}>
                    <Form.Group className="mb-1">
                        <Form.Label className='fw-bold'>Name</Form.Label>
                        <div className='d-flex flex-row'>
                            <Form.Control type="text" placeholder="First Name" value={user.firstName} onChange={(e) => { setUser({ ...user, firstName: e.target.value }) }} />
                            <Form.Control type="mask" placeholder="Last Name" value={user.lastName} onChange={(e) => { setUser({ ...user, lastName: e.target.value }) }} />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className='fw-bold'>Maiden Name</Form.Label>
                        <Form.Control type="text" placeholder="Maiden Name..." value={user.maidenName} onChange={(e) => { setUser({ ...user, maidenName: e.target.value }) }} />
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className='fw-bold'>Image Url</Form.Label>
                        <Form.Control type="url" placeholder="http://example.com/image.jpg" value={user.image} onChange={(e) => { setUser({ ...user, image: e.target.value }) }} />
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className='fw-bold'>Age</Form.Label>
                        <Form.Control type="number" min={1} placeholder="Age..." value={user.age} onChange={(e) => { setUser({ ...user, age: e.target.value }) }} />
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className='fw-bold'>Gender</Form.Label>
                        <Form.Select defaultValue={user.gender} aria-label="Default select" onChange={(e) => { setUser({ ...user, gender: e.target.value }) }} >
                            <option disabled value={user.gender}>- Select -</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className='fw-bold'>BirthDate</Form.Label>
                        <Form.Control type="date" placeholder="..." value={user.birthDate} onChange={(e) => { setUser({ ...user, birthDate: e.target.value }) }} />
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className='fw-bold'>Address</Form.Label>
                        <Form.Control type="text" placeholder="address..." value={user.address.address} onChange={(e) => { setUser({ ...user, address: { ...user.address, address: e.target.value } }) }} />
                        <Form.Control type="text" placeholder="city..." value={user.address.city} onChange={(e) => { setUser({ ...user, address: { ...user.address, city: e.target.value } }) }} />
                        <div className='d-flex flex-row'>
                            <Form.Control type="number" min={1} placeholder="postalCode..." value={user.address.postalCode} onChange={(e) => { setUser({ ...user, address: { ...user.address, postalCode: e.target.value } }) }} />
                            <Form.Control type="text" placeholder="state..." value={user.address.state} onChange={(e) => { setUser({ ...user, address: { ...user.address, state: e.target.value } }) }} />
                        </div>
                    </Form.Group>
                    <div className='d-flex flex-row align-items-center'>
                        <Button className='btn-edit' disabled={!isFormComplete()} type='submit' onClick={handleShow} >Save</Button>
                        {!isFormComplete() ? <p className='text-danger mt-3 ms-2'>Please complete all required fields</p> : ""}
                    </div>
                </Form>

                <Modal show={show} onHide={handleClose} className='mt-0'>
                    <Modal.Body>
                        <p className='bg-success p-2 rounded fw-bold text-white'>Added Success</p>
                        <Form >
                            <Form.Group className="mb-1">
                                <Form.Label className='fw-bold'>Name</Form.Label>
                                <div>{`${user.firstName} ${user.lastName}`} </div>
                            </Form.Group>
                            <Form.Group className="mb-1">
                                <Form.Label className='fw-bold'>Maiden Name</Form.Label>
                                <div>{user.maidenName} </div>
                            </Form.Group>
                            <Form.Group className="mb-1">
                                <Form.Label className='fw-bold'>Age</Form.Label>
                                <div>{user.age} </div>
                            </Form.Group>
                            <Form.Group className="mb-1">
                                <Form.Label className='fw-bold'>Gender</Form.Label>
                                <div>{user.gender} </div>
                            </Form.Group>
                            <Form.Group className="mb-1">
                                <Form.Label className='fw-bold'>BirthDate</Form.Label>
                                <div>{user.birthDate} </div>
                            </Form.Group>

                            <Form.Group className="mb-1">
                                <Form.Label className='fw-bold'>Address</Form.Label>
                                <div>{`${user.address.address} ${user.address.city}, ${user.address.postalCode}, ${user.address.state}`} </div>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>

        </div>
    )
}

export default AddUser