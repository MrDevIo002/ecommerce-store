import React from "react";
import Navbar from "./navbar/Navbar";

interface ILayoutProps {
   children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
   return (
      <>
         <div className="flex flex-col justify-between min-h-screen">
         <Navbar />
            {children}
         </div>
      </>
   );
}

export default Layout;
