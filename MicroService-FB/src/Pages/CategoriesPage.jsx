import { useLocation, useNavigate} from 'react-router-dom'

export default function CategoriesPage() {

    const location = useLocation();
    const navigate = useNavigate();
   
    
    let myStyles = {
        backgroundColor: "#001f36",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      };
    
    const query = new URLSearchParams(location.search)
    const skip = parseInt(query.get("skip")) || 0
    const limit = parseInt(query.get("limit")) || 15
    
    const handleNext = () => {
    
    query.set("skip", skip + limit)
    query.set("limit", limit)
    console.log(skip)

    navigate("?" + query.toString())
    //query.set("limit", limit)
    //navigate( query.toString())
    //navigate(params)
    
     }

    return (
        <div >
            <h1 style={myStyles}>CategoriesPage</h1>
            <h2>Skip: {skip}</h2>
            <h2>Limit: {limit}</h2>

             <button onClick={handleNext}>
                Next
            </button> 
        </div>
    )
}
