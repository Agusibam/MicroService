import {
    BrowserRouter as Router,
    Route,
    Routes,
   
  } from "react-router-dom";
  import {AuthProvider} from "../Providers/AuthProvider";
  import NavBarExample from "../components/Navbar"; 
  import CategoriesPage from "../pages/CategoriesPage";
  import FormEstr from "../pages/ContactPage";
  import LoginPage from "../pages/LoginPage";
  import RegisterPage from "../pages/RegisterPage";
  import DashboardPage from "../pages/DashboardPage";
  import RecoveryPage from "../pages/RecoveryPage";
  import ProfilePage from "../Pages/ProfilePage";
  import { LoginRoute } from "./LoginRoute";
  import { DashboardRoute } from "./DashboardRoute";




export default function AppRouters() {




  return (
    <AuthProvider>
    <Router >
      <NavBarExample/>
       <Routes>
        <Route exact path="/Profile" element={<ProfilePage/>} />
        <Route exact path="/contact" element={<FormEstr/>} />
        <Route exact path="/categories" element={<CategoriesPage/>} />
        <Route exact path="/Register" element={<RegisterPage/>} />
        <Route exact path="/Recovery" element={<RecoveryPage/>} />
        
        
       
        <Route exact path="/Login" element={
        <LoginRoute><LoginPage/></LoginRoute>
        } />
        <Route exact path="/Dashboard" element={
        <DashboardRoute><DashboardPage/></DashboardRoute>
        } />
      </Routes>
    </Router>
    </AuthProvider>
  )
}
