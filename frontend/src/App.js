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
          <label htmlFor="batch" className="block text-sm  font-medium leading-6 text-slate-400">Batch</label>
          <div className="mt-2">
              <select as="select" id="batch" name="batch" autoComplete="batch-name" className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option className='text-base font-medium leading-6'>Select Batch</option>
                  {batch.batch.map((batch, index) => (
                      <option key={index} name='batch' id='batch' className='text-base  font-medium leading-6'>{batch}</option>
                  ))}
              </select>
          </div>
          <label for="batch" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Batch name</label>
          <input type="batch" id="batch" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BCE118" required />
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
