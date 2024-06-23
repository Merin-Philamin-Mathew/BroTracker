import Dashboard from '../pages/admin/Dashboard';

let const_data = {

    FB_STUDENT_COLLECTION_NAME: "students",
    REACT_ROUTER_PATH: [
        {
            path: "/",
            element: <></>
        },
        {
            path: "/admin",
            element: <Dashboard></Dashboard>
        },
        {
            path: "/registration-success",
            element: <></>
        }
    ],
    BROTO_BATCH: ['BCE118', 'BCE146'],
    BROTO_HUB: ['Kochi','Calicut']
}

export default const_data;