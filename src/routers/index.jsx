import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../views/Home";
import EditUser from "../views/EditUser";
import PostList from "../views/PostList";
import ProductList from "../views/ProductList";
import CartList from "../views/CartList";
import UserList from "../views/UserList";
import UserDetail from "../views/UserDetail";
import AddUser from "../views/AddUser";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <ProductList />
            },
            {
                path: '/posts',
                element: <PostList />
            },
            {
                path: '/carts',
                element: <CartList />
            },
            {
                path: '/users',
                element: <UserList />
            },
            {
                path: '/users/add',
                element: <AddUser />
            },
            {
                path: '/edit/:id',
                element: <EditUser />
            },
            {
                path: '/users/:id',
                element: <UserDetail />
            }
        ]
    }
])


export default router