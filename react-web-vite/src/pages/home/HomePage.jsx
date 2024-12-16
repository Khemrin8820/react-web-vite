import "./HomePage.css";
import dellList from "./DellList";
import Product from '../../components/page/Product';
const HomePage = () => {
  return (
    <>
      <Product arrItem={dellList} title="Sale Product" />
      <Product arrItem={dellList} title="Hot Product"/>
    </>
 
  );
}

export default HomePage;