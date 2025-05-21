import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return(
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div
          id="main-content"
          className="flex-1 p-4 flex flex-col overflow-y-auto">
          <Header />
          
          <Outlet />
        </div>
      </div>
    </div>
  )
}
