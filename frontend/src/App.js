import { getProfileStatus } from "./apis/firebase/student_details";
import const_data from "./config/constant";
// import Dashboard from "./pages/admin/Dashboard";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {

  let routerProvider = createBrowserRouter(const_data.REACT_ROUTER_PATH)
  async function call() {
    getProfileStatus().then((data) => {
      console.log("Merin Data");
      console.log(data);
    })
    getProfileStatus("muhammedjavadksd").then((data) => {
      console.log("Javad Data");
      console.log(data);
    })
  }


  call();

  return (
    <div className="bg-gray-800">
      <RouterProvider router={routerProvider} />
    </div>
  );
}

export default App;
