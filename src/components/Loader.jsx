import React from "react";
import { Space, Spin } from "antd";

function Loader() {
  return (
    <div>
      <Space size="large">
        <Spin size="large" />
      </Space>
      ,
    </div>
  );
}

export default Loader;
