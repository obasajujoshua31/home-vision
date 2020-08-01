import React, { useEffect, Fragment, useContext } from "react";
import { Row, Col } from "antd";
import "../assets/styles/houseDisplay.scss";
import DisplayCard from "./DisplayCard";
import Loader from "./Loader";
import ErrorReload from "./ErrorReload";
import getHousesAction from "../store/action";
import { globalContext } from "../store/context";

function HouseDisplay({}) {
  const { store, dispatch } = useContext(globalContext);

  useEffect(() => {
    getHousesAction({}, dispatch);
  }, [dispatch]);

  const { isFetching, houses, error } = store;
  function displayHouses() {
    if (isFetching) {
      return <Loader />;
    }

    if (error) {
      return <ErrorReload reload={() => getHousesAction({}, dispatch)} />;
    }

    return (
      <Fragment>
        <Row gutter="16">
          {houses.map((house) => (
            <Col span={8} className="gutter-row">
              <DisplayCard
                className="house-display"
                price={house.price}
                homeowner={house.homeowner}
                address={house.address}
                img={house.photoURL}
              ></DisplayCard>
            </Col>
          ))}
        </Row>
      </Fragment>
    );
  }

  return <div className="display-container">{displayHouses()}</div>;
}

export default HouseDisplay;
