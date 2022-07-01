import { useState } from "react";
import Sidebar from "./components/sidebar/SideBar";
const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
     <Sidebar sidebarOpen={sidebarOpen} closeSideBar={closeSidebar} />
    </div>
  );
}

export default App;
