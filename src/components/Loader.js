import React from "react";
import {Space, Spin} from "antd";
const Loader = () => {
  return (
    <Spin size='large'>
      <span className='sr-only'>Loading...</span>
    </Spin>
  );
};

export default Loader;
