import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Age = () => {
  const { age } = useParams();
  // console.log(params)

  // const location=useLocation();
  // console.log(location)
//   const { state } = useLocation();
const { state:{family} } = useLocation();
  return (
    <div>
      {/* {age} | {state.family}| */}
      {age} | {family}|
    </div>
  );
};

export default Age;
