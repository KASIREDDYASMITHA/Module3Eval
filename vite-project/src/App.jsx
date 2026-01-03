import { Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdateRestaurant from "./pages/UpdateRestaurant"
import ProctectedRoute from "./components/ProtectedRoute"




function App() {
  

  return (
    <Routes>
      <Route path="/"
      element={<Login/>}/>
      <Route
         path="/admin/dashboard"
         element={
          <ProtectedRoute allowedRole="admin">
             <AdminDasboard/>
          </ProtectedRoute>
         }
     />
     <Route 
     path="/admin/restaurants/update"
     element={
      <ProtectedRoute allowedRole="admin">
        <UpdateRestaurant/>
      </ProtectedRoute>
     }
     />
     <Route 
     path="/customers/dashboard"
     element={
      <ProtectedRoute 
      allowedRole="customer">
        <CustomerDashboard/>
      </ProtectedRoute>
     }
     />
     


    </Routes>

  );
  }

export default App;
