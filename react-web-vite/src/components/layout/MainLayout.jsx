import { Outlet } from "react-router-dom";
import logoImg from "../../assets/images/Logo.png";

const MainLayout = ()=>{
  return (<div> 
    <div style={{ marginBottom: "50px", backgroundColor: "red", display: "flex", justifyContent: "center", height: "100px" }}>
      <img src={logoImg} width={70} height={70} />
      <h2>This is Header</h2>
    </div>
    <Outlet />
    <div style={{ marginTop:"50px",backgroundColor: "yellow", display: "flex", justifyContent: "center", height: "100px"}}>
      <h3>This is Header</h3>
    </div>
  </div>);
}
export default MainLayout;