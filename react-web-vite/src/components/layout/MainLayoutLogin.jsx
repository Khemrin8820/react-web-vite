import logoImg from '../../assets/images/logo.png';
import { Outlet } from 'react-router-dom';
const MainLayoutLogin = () => {
  return (<div>
    <div style={{ marginBottom: "50px", backgroundColor: "yellow", display: "flex", justifyContent: "center", height: "100px" }}>
      <img src={logoImg} width={70} height={70} />
      <h2>This is Header</h2>
    </div>
    <Outlet />
    <div style={{ marginTop: "50px", backgroundColor: "yellow", display: "flex", justifyContent: "center", height: "100px" }}>
      <h3>This is Footer</h3>
    </div>
  </div>);
}
export default MainLayoutLogin;