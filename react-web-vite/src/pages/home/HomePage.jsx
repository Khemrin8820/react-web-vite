import { Row} from 'antd';
import "./HomePage.css";
import ProductCard from '../../components/product card/ProductCard';
import dellList from './DellList';
// import { useState } from 'react';
const HomePage = () => {
  /*MacBook Product List*/
  // const [indexDellItem,setIndexDellItem]=useState(0);
  // const prevDellItem=()=>{
  //   if(indexDellItem >0){
  //     setIndexDellItem(indexDellItem-1);
  //   } else if (indexDellItem <= 0) {
  //     setIndexDellItem(dellList.length-1)
  //   }
  // }
  // const nextDellItem = () => {
  //   if (indexDellItem < dellList.length - 1) {
  //     setIndexDellItem(indexDellItem + 1);
  //   } else if (indexDellItem >= dellList.length - 1) {
  //     setIndexDellItem(0);
  //   }
  // }
  return (
    <>
      <h1 style={{ fontWeight: "bold", marginBottom: 10 }}>MacBook</h1>
      <Row gutter={[12, 12]}>{dellList.map((prod, ind) => (<ProductCard key={ind + 1} Img={prod.img} Name={prod.name} Desc={prod.desc} price={prod.price} discount={prod.discount} />))}</Row>
    </>
 
  );
}

export default HomePage;