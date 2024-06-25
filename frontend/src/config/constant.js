import { Outlet } from 'react-router-dom';
import Dashboard from '../pages/admin/Dashboard';
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
   
    BROTO_BATCH: ['BCE118', 'BCE146'],
    BROTO_HUB: ['Kochi','Calicut']
}
 

export default const_data 