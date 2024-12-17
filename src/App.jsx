import { Route, Routes } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import Error from "./Error";
import CreateCategory from "./pages/dashboard/category/Index";
import CreateProduct from "./pages/dashboard/product/Index";
import HomeDashboard from "./pages/dashboard/home/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Private from "./pages/auth/Private";

function App() {
  return (
    <Routes>
      {/* auth login */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<Private />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<HomeDashboard />}></Route>
          <Route path="create-product" element={<CreateCategory />}></Route>
          <Route path="edit-category/:id" element={<CreateCategory />}></Route>
          <Route path="edit-products/:id" element={<CreateProduct />}></Route>
          <Route path="create-category" element={<CreateProduct />}></Route>
          {/* Error Route */}
          <Route path="*" element={<Error />} />
        </Route>
      </Route>
      
    </Routes>
  );
}

export default App;
