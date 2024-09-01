import Header from "../header";
import Footer from "../footer";

interface LayoutProps {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="">
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout