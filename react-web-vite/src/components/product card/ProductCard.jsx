import { Col, Button } from 'antd';
import styles from './ProductCard.module.css';
import { FaHeart } from "react-icons/fa";
import { useState } from 'react';
const ProductCard = (prop) => {
  var priceDiscount = prop.price - (prop.price * prop.discount / 100);
  const [wishList, setWishList] = useState(false);
  const isWishList = () => {
    if (wishList === false) {
      setWishList(true);
    } else
      setWishList(false);
  }
  return (
    <>
          <Col key={0} xs={24} sm={12} md={8} lg={6}>
            <div  className={styles.card}>
              <div className={styles.image}>
                <img src={prop.Img} alt="Error Image" />
              </div>
              <div className={styles.desc}>
              <div className={styles.titleIcon}>
                <h3>{prop.Name}</h3>
              <FaHeart style={wishList?{ fontSize: "20px", cursor: "pointer",color:"red" }:{ fontSize: "20px", cursor: "pointer" }} onClick={isWishList} /> 
            </div>         
                <p>{prop.Desc}</p>
              </div>
              <div className={styles.prices}>
                {(prop.discount) ?
                  <>
                    <p>{prop.price}</p>
                    <h5>{prop.discount}%</h5>
                    <h4>{priceDiscount}$</h4>
                  </>
                  :
                    <p>{prop.price}</p>
                }
              </div>   
              <Button type="primary" style={{marginTop:"15px"}} className={styles.btnAddCard} onClick={prop.onAddCart}>Add to Cart</Button> 
            </div>
          </Col>
    </>
  )
}

export default ProductCard;