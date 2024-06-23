import { Outlet } from 'react-router-dom';
import Dashboard from '../pages/admin/Dashboard';
import UserRegisterForm from '../sections/forms/UserRegisterForm';
import AddStudent from '../pages/admin/AddStudent';
import Container from '../components/utils/Container';

let const_data = {

    FB_STUDENT_COLLECTION_NAME: "students",
    REACT_ROUTER_PATH: [
        {
            path: "/",
            element: <></>
        },
        {
            path: "/admin",
            element: <Dashboard/>
        },
        {
            path: "/registration-success",
            element: <></>
        },
        {
            path: "/admin/student",
            element: <><Container><Outlet/></Container></>,
            children:[
                {
                    path:"/admin/student/add",
                    element:<AddStudent/>
                }
            ]
        }
    ],
}

export default const_data;