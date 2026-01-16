import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

const App = () => {
     return (
          <>
               <div className="border-b border-[#242424] shadow-[1px_1px_10px_white]/5">
                    <Navigation />
               </div>
               <div>
                    <Outlet />
               </div>
          </>
     );
};

export default App;
