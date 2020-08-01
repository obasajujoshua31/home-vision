import React from "react";
import { Result, Button } from "antd";

function ErrorReload({ reload }) {
  return (
    <Result
      status="warning"
      title="There are some problems with loading your houses."
      extra={
        <Button type="primary" key="console" onClick={reload}>
          Please click to retry
        </Button>
      }
    />
  );
}

export default ErrorReload;
