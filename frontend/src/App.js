import { getProfileStatus } from "./apis/firebase/student_details";
import CustomeModal from "./components/utils/CustomeModal";
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
