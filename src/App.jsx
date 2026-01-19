import { Outlet } from "react-router";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
     return (
          <>
               <div className="border-b border-[#242424] sticky top-0 z-99 backdrop-blur-[20px] shadow-[1px_1px_10px_white]/5">
                    <Navigation />
               </div>
               <div>
                    <Outlet />
               </div>
               <div>
                    <Footer />
               </div>
          </>
     );
};

export default App;
