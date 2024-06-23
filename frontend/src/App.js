import const_data from "./config/constant";
// import Dashboard from "./pages/admin/Dashboard";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {

  let routerProvider = createBrowserRouter(const_data.REACT_ROUTER_PATH)

  return (
    <div >
      <RouterProvider router={routerProvider} />
    </div>
  );
}

export default App;
