import React from "react";

const PageHeader = (props) => {
  return (
    <div className="PageHeader col-lg-8 centered">
      { props.children }
    </div>
  )
};

export default PageHeader;
