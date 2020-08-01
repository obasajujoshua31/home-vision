import React, { useEffect, useContext, useState } from "react";
import { Row, Col } from "antd";
import "../assets/styles/houseDisplay.scss";
import DisplayCard from "./DisplayCard";
import Loader from "./Loader";
import ErrorReload from "./ErrorReload";
import getHousesAction from "../store/action";
import { globalContext } from "../store/context";
import InfiniteScroll from "react-infinite-scroll-component";

const initialPage = 1;

function HouseDisplay() {
  const { store, dispatch } = useContext(globalContext);

  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    getHousesAction({}, dispatch);
  }, [dispatch]);

  function fetchHouses() {
    const newPage = page + 1;
    setPage(newPage);

    getHousesAction({ page: newPage, isLoaded: true }, dispatch);
  }

  function reloadHouses() {
    setPage(initialPage);
    getHousesAction({ reset: true }, dispatch);
  }

  const { isFetching, houses, error } = store;
  function displayHouses() {
    if (isFetching) {
      return <Loader />;
    }

    if (error) {
      return <ErrorReload reload={reloadHouses} />;
    }

    return (
      <InfiniteScroll
        hasMore={true}
        dataLength={houses.length}
        next={fetchHouses}
        loader={<Loader />}
      >
        <Row gutter="16">
          {houses.map((house) => (
            <Col span={8} className="gutter-row" key={house.id}>
              <DisplayCard
                key={house.id}
                className="house-display"
                price={house.price}
                homeowner={house.homeowner}
                address={house.address}
                img={house.photoURL}
              ></DisplayCard>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    );
  }

  return <div className="display-container">{displayHouses()}</div>;
}

export default HouseDisplay;
