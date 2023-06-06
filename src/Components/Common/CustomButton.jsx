import React from "react";

function CustomButton(props) {
  let { propData, propClickEvent } = props;

  const CustomButtonClick = () => {
    alert("OK button clicked");
  };

  const msgFromChild = "from Child";

  return (
    <>
      <button
        className="MyButton"
        style={{ backgroundColor: "Blue", color: "white", padding: "10px" }}
        // onClick={CustomButtonClick}
        // onClick={propClickEvent}
        onClick={() => propClickEvent(msgFromChild)}
      >
        {propData}
      </button>
    </>
  );
}

export default CustomButton;
