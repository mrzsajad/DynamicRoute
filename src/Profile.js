import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <p onClick={()=>navigate("34")}>sajad</p>
      <p onClick={()=>navigate("20")}>bahar</p>
      <p onClick={()=>navigate("28")}>amir</p>
      <p onClick={()=>navigate("22")}>milad</p>
      <p onClick={()=>navigate("20")}>amireza</p> */}

      {/* <p onClick={()=>navigate("34",{state:"mirzaie"})}>sajad</p>
      <p onClick={()=>navigate("20",{state:"eskandari"})}>bahar</p>
      <p onClick={()=>navigate("28",{state:"riyazi"})}>amir</p>
      <p onClick={()=>navigate("22",{state:"m"})}>milad</p>
      <p onClick={()=>navigate("20",{state:"kakavandi"})}>amireza</p> */}

      <p onClick={() => navigate("34", { state: {family:"mirzaie"} })}>sajad</p>
      <p onClick={() => navigate("20", { state: {family:"eskandari"} })}>bahar</p>
      <p onClick={() => navigate("28", { state: {family:"riyazi"} })}>amir</p>
      <p onClick={() => navigate("22", { state: {family:"m"} })}>milad</p>
      {/* <p onClick={() => navigate("20", { state: {family:"kakavandi"} })}>amireza</p> */}
      <Link to="35" state={{family:"kakavandi"}}>amireza</Link>
    </div>
  );
};

export default Profile;
