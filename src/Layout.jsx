import { Outlet, Link } from "react-router-dom";
import './index.css'

const Layout = () => {
  return (
    <>
        <Link to="/"></Link>
        <Link to="product"></Link>   
        <Outlet />
    </>
  )
};

export default Layout;