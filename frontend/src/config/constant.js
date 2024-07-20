import { Outlet } from 'react-router-dom';
import Dashboard from '../pages/admin/Dashboard/Dashboard';
import AddStudent from '../pages/admin/AddStudent';
import Container from '../components/utils/Container';
import Home from '../pages/user/Home';
import AdminLogin from '../pages/admin/AdminLogin';

let const_data = {

    FB_STUDENT_COLLECTION_NAME: "students",
    REACT_ROUTER_PATH: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/login",
            element: <></>
        },
        {
            path: "/admin",
            element: <Dashboard />
        },
        {
            path: "/admin/login",
            element: <AdminLogin/>
        },
        {
            path: "/registration-success",
            element: <></>
        },
        {
            path: "/admin/student",
            element: <><Container><Outlet /></Container></>,
            children: [
                {
                    path: "/admin/student/add",
                    element: <AddStudent />
                }
            ]
        }
    ],

}


export default const_data 