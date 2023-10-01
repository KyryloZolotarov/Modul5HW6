// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import User from "./pages/User";
import Resources from "./pages/Resources";
import SingleResource from "./pages/SingleResource";

// other
import {FC} from "react";
import UserDataUpdate from "./pages/UserDataUpdate/UserDataUpdate";
import UserCreate from "./pages/UserCreate/UserCreate";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'products-route',
        title: 'Products',
        path: '/products',
        enabled: true,
        component: Products
    },
    {
        key: 'user-route',
        title: 'User',
        path: '/user/:id',
        enabled: false,
        component: User
    },
    {
        key: 'resources-route',
        title: 'Resources',
        path: 'resources',
        enabled: true,
        component: Resources
    },
    {
        key: 'resource-route',
        title: 'Resource',
        path: '/resource/:id',
        enabled: false,
        component: SingleResource
    },
    {
        key: 'userUpdate-route',
        title: 'User Updated',
        path: '/user-updated/:id',
        enabled: false,
        component: UserDataUpdate
    },
    {
        key: 'userCreate-route',
        title: 'User Created',
        path: '/user-created',
        enabled: false,
        component: UserCreate
    }
]