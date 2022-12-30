import { useAuth } from "../Providers/AuthProvider";


export function ProtectedRoute({ children }) {
  const { loading } = useAuth();

  if (loading){
    console.log ("se ejecutó el Protected")
    return <h1>Loading</h1>;
  } 
  

  return <>{children}</>;
}