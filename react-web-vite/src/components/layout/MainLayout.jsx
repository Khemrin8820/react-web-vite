import { Outlet,Link } from "react-router-dom";
import logoImg from "../../assets/images/Logo.png";

const MainLayout = () => {
  return (<div> 
    <div style={{ marginBottom: "50px", backgroundColor: "red", display: "flex",alignItems:"center",justifyContent:"space-around", height: "100px" }}>
      <img src={logoImg} width={70} height={70} style={{width:"5%"}}/>
      <div style={{ width:"50%",display:"flex",gap:"3%"}}> 
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About us</Link>
      </div>
    </div>
    <Outlet/>
    <div style={{ marginTop:"50px",backgroundColor: "red", display: "flex", justifyContent: "center", height: "100px"}}>
      <h3>This is Footer</h3>
    </div>
  </div>);
}
export default MainLayout;