import { Row } from 'antd'; 
import ProductCard from '../product card/ProductCard'; 
const Product = (prop) => {
  const onAddCart = (prod)=>{
    alert(prod.id);
  }
  return (
    <>
      <h1 style={{ fontWeight: "bold", marginBottom: 10 }}>{prop.title}</h1>
      <Row gutter={[12, 12]}>{prop.arrItem?.map((prod, ind) => (<ProductCard onAddCart={() => onAddCart(prod)}
        key={ind + 1} Img={prod.img} Name={prod.name} Desc={prod.desc} price={prod.price} discount={prod.discount} />))}</Row>
    </>
  );
}

export default Product