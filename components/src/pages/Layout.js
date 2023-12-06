import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ display: 'grid', justifyContent:'center' }}>
      <nav style={{ marginRight: '20px' }}>

        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/blogs" style={{ marginRight: '20px' }}>Blogs</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Outlet/>
    </div>
  )
};

export default Layout;
