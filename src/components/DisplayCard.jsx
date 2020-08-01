import React from "react";
import { Card } from "antd";

const { Meta } = Card;

function DisplayCard({ img, className, price, address, homeowner }) {
  return (
    <div>
      <Card
        hoverable
        className={className}
        style={{ width: 320 }}
        cover={<img alt="example" src={img} style={{ height: "120px" }} />}
      >
        <div className="card-details">
          <Meta title={address} description={homeowner} />
          <div className="card-price">${price}</div>
        </div>
      </Card>
      ,
    </div>
  );
}

export default DisplayCard;
