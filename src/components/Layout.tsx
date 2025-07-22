import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Container from "./Container";

interface ILayoutProps {
   children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
   return (
      <div>
         <Container>
            <Navbar />
            {children}
         </Container>
         <Footer />
      </div>
   );
}

export default Layout;
