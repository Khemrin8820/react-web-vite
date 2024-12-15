import { Col, Button } from 'antd';
import styles from './ProductCard.module.css';
const ProductCard = (prop) => {
  var priceDiscount = prop.price - (prop.price * prop.discount / 100);
  return (
    <>
          <Col key={0} xs={24} sm={12} md={8} lg={6}>
            <div  className={styles.card}>
              <div className={styles.image}>
                <img src={prop.Img} alt="Error Image" />
              </div>
              <div className={styles.desc}>
                <h3>{prop.Name}</h3>
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
              <Button type="primary" style={{marginTop:"15px"}} className={styles.btnAddCard}>Add to Cart</Button> 
            </div>
          </Col>
    </>
  )
}

export default ProductCard;