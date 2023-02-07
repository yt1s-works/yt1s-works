import React from "react"
import Header from "./header"
import Footer from "./footer";
import "../styles/layout.css"

const Layout = ({children}) => (
  <>
    <Header/>
    <div className="layout">
      <main>{children}</main>
    </div>
    <Footer/>
  </>
);

export default Layout