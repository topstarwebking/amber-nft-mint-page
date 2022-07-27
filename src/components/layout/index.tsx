import * as React from "react"
// import "./layout.scss"
import Banner from "../banner"
import Navbar from "../nav"
import Footer from "../footer"
import styled from "styled-components"

const Layout: React.FC<{ style?: React.CSSProperties }> = ({
  style,
  children,
}) => {
  return (
    <div className="relative">
      <div>
        <Banner />
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout

const GradientBar = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.42) 0%,
    rgba(217, 217, 217, 0) 100%
  );
`
