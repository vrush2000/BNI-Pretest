import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';

const EditUser = () => {
    const [user, setUser] = useState()
    const { id } = useParams()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchUser = async () => {
        await axios.get(`https://dummyjson.com/users/${id}`)
            .then((response) => {
                setUser(response.data)
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.patch(`https://dummyjson.com/users/${id}`, user)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    useEffect(() => {
        fetchUser();
    }, []);


    if (!user || !user.address || !user.company) {
        return (
            <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" alt="" />
        )
    }

    return (
        <div className='container-fluid px-4'>
            <h4 className="mt-0">Edit Profile</h4>
            <div className='card p-4 d-flex flex-row'>
                <img src={user.image} alt='' className='me-4 col-3 object-fit-cover border rounded' />
                <Form className='col-4 me-4' onSubmit={handleSubmit}>
                    <Form.Group className="mb-1">
                        <Form.Label className='fw-bold'>Name</Form.Label>
                        <div className='d-flex flex-row'>
                            <Form.Control type="text" placeholder="First Name" value={user.firstName} onChange={(e) => { setUser({ ...user, firstName: e.target.value }) }} />
                            <Form.Control type="text" placeholder="Last Name" value={user.lastName} onChange={(e) => { setUser({ ...user, lastName: e.target.value }) }} />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className='fw-bold'>Maiden Name</Form.Label>
                        <Form.Control type="text" placeholder="..." value={user.maidenName} onChange={(e) => { setUser({ ...user, maidenName: e.target.value }) }} />
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className='fw-bold'>Image Url</Form.Label>
                        <Form.Control type="url" placeholder="http://example.com/image.jpg" value={user.image} onChange={(e) => { setUser({ ...user, image: e.target.value }) }} />
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className='fw-bold'>Age</Form.Label>
                        <Form.Control type="number" min={1} placeholder="..." value={user.age} onChange={(e) => { setUser({ ...user, age: e.target.value }) }} />
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className='fw-bold'>Gender</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e) => { setUser({ ...user, gender: e.target.value }) }} >
                            <option disabled >- Select -</option>
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
                            <Form.Control type="numb" placeholder="postalCode..." value={user.address.postalCode} onChange={(e) => { setUser({ ...user, address: { ...user.address, postalCode: e.target.value } }) }} />
                            <Form.Control type="text" placeholder="state..." value={user.address.state} onChange={(e) => { setUser({ ...user, address: { ...user.address, state: e.target.value } }) }} />
                        </div>
                    </Form.Group>
                    <Button type='submit' className='btn-edit' onClick={handleShow} >Save</Button>
                </Form>
                <Form className='col-3'>
                    <div className='card p-3'>
                        <Form.Group className="mb-3">
                            <Form.Label className='fw-bold'>Job</Form.Label>
                            <div>{user.company.title}</div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='fw-bold'>Company</Form.Label>
                            <div>{user.company.name} </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='fw-bold'>Department</Form.Label>
                            <div>{user.company.department} </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='fw-bold'>Address</Form.Label>
                            <div>{`${user.company.address.address} ${user.company.address.city}, ${user.company.address.postalCode}, ${user.company.address.state}`} </div>
                        </Form.Group>
                    </div>
                </Form>
                <Modal show={show} onHide={handleClose} className='mt-0'>
                    <Modal.Body>
                        <p className='bg-success p-2 rounded fw-bold text-white'>Update Success</p>
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

export default EditUser