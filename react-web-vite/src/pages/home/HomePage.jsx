import "./HomePage.css";
import dellList from "./DellList";
import { arrItem,pi } from "./MacBooklist";
import Product from '../../components/page/Product';
const HomePage = () => {
  return (
    <>
      <h1>{arrItem[0]} & {pi}</h1>
      <Product arrItem={dellList} title="Sale Product" />
    </>
 
  );
}

export default HomePage;