// import React, { useEffect, useState } from "react";

// function UseEffect(props) {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log("First Render AND Update");
//       setCount((count) => count + 1);
//       console.log(count);
//     }, 1000);
//   });

//   useEffect(() => {
//     setTimeout(() => {
//       console.log("First Render ONLY");
//       setCount((count) => count + 1);
//       console.log(count);
//     }, 1000);
//   }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log("Update ONLY");
//       setCalculation((count) => count * 2);
//       console.log(count);
//     }, 1000);
//   }, [count]);

//   return (
//     <>
//       <div>{"count" + count}</div>
//       <div>{"calculation" + calculation}</div>
//       <button onClick={() => setCount((c) => c + 1)}>Click Here</button>
//     </>
//   );
// }

// export default UseEffect;
