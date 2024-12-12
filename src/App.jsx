import { Route, Routes } from "react-router"
import DashboardLayout from './layout/DashboardLayout';
import HomeDashboard from "./pages/HomeDashboard";
import Error from "./Error";
import CreateCategory from "./pages/CreateCategory";
import CreateProduct from './pages/CreateProduct';

function App() {

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout/>}>
        <Route index element={<HomeDashboard/>}></Route>
        <Route path="/create-product" element={<CreateCategory/>}></Route>
        <Route path="/edit-category/:id" element={<CreateCategory/>}></Route>
        <Route path="/create-category" element={<CreateProduct/>}></Route>

        {/* Error Route */}
        <Route path="/*" element={<Error/>}/>
      </Route>
    </Routes>
  )
}

export default App
