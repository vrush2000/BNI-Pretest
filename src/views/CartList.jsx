import { useEffect } from "react";
import { useState } from "react"
import Table from 'react-bootstrap/Table';

const CartList = () => {
  const [carts, setCarts] = useState()

  const fetchPost = () => {
    fetch(`https://dummyjson.com/carts`)
      .then(response => response.json())
      .then(data => setCarts(data.carts));
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="container-fluid px-4">
      <h4 className="mt-0">Cart List</h4>
      {carts?.map((cart) => (
        <div key={cart.id} className="card col-12">
          <div className="card-body">
            <h4 className="card-title">#{cart.id}</h4>
            <Table bordered>
              <thead>
                <tr>
                  <td className="fw-bold">Title</td>
                  <td className="fw-bold">Price</td>
                  <td className="fw-bold">Quantity</td>
                </tr>
              </thead>
              <tbody>
                {cart.products?.map((item) => (
                  <tr key={item.id}>
                    <td className="col-8">{item.title}</td>
                    <td className="">${item.price}</td>
                    <td className="col-12">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <table>
              <tr>
                <td className="fw-bold">Total</td>
                <td className="fw-bold">:</td>
                <td className="fw-bold">${cart.total}</td>
              </tr>
              <tr>
                <td className="fw-bold">Total Products</td>
                <td className="fw-bold">:</td>
                <td className="fw-bold">{cart.totalProducts}</td>
              </tr>
              <tr>
                <td className="fw-bold">Total Quantity</td>
                <td className="fw-bold">:</td>
                <td className="fw-bold">{cart.totalQuantity}</td>
              </tr>
            </table>

          </div>
        </div>
      ))}
    </div>
  )
}

export default CartList