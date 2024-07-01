import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";


const AdminDashboard = () => {
  const routing = useRoutes(Themeroutes);
  return <div className="dark"> 
    {routing}
    
    </div>;
};

export default AdminDashboard;
