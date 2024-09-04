import Header from "../header";
import Footer from "../footer";

interface LayoutProps {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="main-layout">
      <Header/>
      <div className="children-container">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout