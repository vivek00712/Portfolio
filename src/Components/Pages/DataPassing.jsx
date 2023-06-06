import React, { useEffect, useState } from "react";
import CustomButton from "../CustomControls/CustomButton";

function DataPassing(props) {
  const [data, setData] = useState("Vivek");
  let buttonData = "OK";

  //   const CustomButtonClickFromParent = () => {
  //     alert("Alert from Parent Component");
  //   };

  const CustomButtonClickFromParent = (msgFromChild) => {
    alert("Alert from Parent Component and data " + msgFromChild);
  };

  useEffect(() => {
    console.log("Render AND Update");
  });

  useEffect(() => {
    console.log("Render Only");
  }, []);

  return (
    <>
      <div>This is {data} 's Portfolio</div>
      <button onClick={() => setData("Patel")}>Change Me</button>
      <br />
      <CustomButton
        propData={buttonData}
        // propClickEvent={CustomButtonClickFromParent}
        propClickEvent={CustomButtonClickFromParent}
      />
    </>
  );
}

export default DataPassing;
