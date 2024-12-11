import { Button, Col, Row } from 'antd';
import "./HomePage.css";
import dellList from './DellList';
import macbookList from './MacBooklist';
import { useState } from 'react';
const HomePage = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  }
  return (
    <>
      <h1 onClick={increaseCount} style={{padding:"10px 15px",backgroundColor:"skyblue",display:"inline-block",borderRadius:"5px",cursor:"pointer"}}>Count: {count}</h1>
      <h1 style={{fontWeight:"bold",marginBottom:10}}>MacBook</h1>
      <Row gutter={[12,12]}>
        {macbookList.map((item, ind) => (
          <Col key={ind + 1} xs={24} sm={12} md={8} lg={6} className="colStyle">
            <div  className="card">
              <img src={item.img} alt={item.name} style={{ width:"300px"}}/>
              <h3>{item.name.slice(0,10)}</h3>
              <p>{item.desc.slice(0,25)}</p>
              <div>${item.price}</div>
              <Button type="primary" style={{marginTop:"15px;"}}>Add to Cart</Button>
            </div>
          </Col>
        ))}
      </Row>
      <h1 style={{fontWeight:"bold",marginBottom:10}}>Dell</h1>
      <Row gutter={[12,12]}>
        {dellList.map((item, ind) => (
          <Col key={ind + 1} xs={24} sm={12} md={8} lg={6} className="colStyle">
            <div  className="card">
              <img src={item.img} alt={item.name} style={{ width:"300px"}}/>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomePage;