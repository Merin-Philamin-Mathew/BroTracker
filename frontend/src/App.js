import { useContext, useEffect } from "react";
import CustomeModal from "./components/utils/CustomeModal";
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
      <CustomeModal isOpen={false} title={"Add new batch"}>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Batch name</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BCE118" required />
        </div>
        <div className='flex justify-end'>
          <button className='bg-gray-700 text-white p-3 rounded-lg px-10'>Add batch</button>
        </div>
      </CustomeModal>

      <RouterProvider router={routerProvider} />
    </div>
  );
}

export default App;
