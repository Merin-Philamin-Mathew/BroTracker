import { useContext, useEffect } from "react";
import const_data from "./config/constant";
// import Dashboard from "./pages/admin/Dashboard";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BatchContext } from "./components/context/BatchContext";
import { getBatch } from "./apis/firebase/batch_details";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  let routerProvider = createBrowserRouter(const_data.REACT_ROUTER_PATH)
  const batch = useContext(BatchContext)
  useEffect(async () => {
    try {
      let batchesArray = await getBatch()
      batch.setBatch(batchesArray)
    } catch (e) {
      console.log("Batches unavailable: ", e)
    }
  }, [])
  return (

    <div className="bg-gray-800">
      <ToastContainer />

      <RouterProvider router={routerProvider} />
    </div>
  );
}

export default App;
