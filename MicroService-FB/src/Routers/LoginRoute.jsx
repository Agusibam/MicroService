import { Navigate } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";


export function LoginRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading){
    console.log(loading)
    return <h1>Loading</h1>;
  } 
  if(user){
    console.log(user)
   return <Navigate to="/Home"/>;
  }

  return <>{children}</>;
}