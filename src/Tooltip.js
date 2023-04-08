import React from 'react';

const Tooltip = (props) => {
    //object destructuring
    const {position} = props;

  return (
    <div className={position}>
      Thanks for hovering at {position} !! I am a Tooltip !
    </div>
  );
};

export default Tooltip;