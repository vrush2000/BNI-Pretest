import { useEffect } from "react";
import { useState } from "react"
import Table from 'react-bootstrap/Table';

const ProductList = () => {
    const [products, setProducts] = useState()

    const fetchProducts = () => {
        fetch(`https://dummyjson.com/products`)
            .then(response => response.json())
            .then(data => setProducts(data.products));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container-fluid px-4">
            <h4 className="mt-0">Product List</h4>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td className="d-flex flex-column">
                                <img src={item.images[0]} className="rounded col-6 img-fluid img-product float-left" alt="..." />
                                <p className="text-style">{item.title}</p>
                            </td>
                            <td>{item.description}</td>
                            <td>${item.price}</td>
                            <td>{item.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ProductList