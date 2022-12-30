import { Navigate } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";


export function DashboardRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading){
    console.log(loading)
    return <h1>Loading</h1>;
  } 
  if(!user){
   return <Navigate to="/Home"/>;
  }

  return <>{children}</>;
}