import React, { useEffect, useState } from "react";
const Test = () => {
  let datalength = 4;
  let dataSum = 6;
  let [dataArray, setDataArray] = useState([1, 5, 7, 1]);

  // useEffect(() => {
  //     dataArray.map((element) => {
  //         if(element < 0){
  //             let index = dataArray.indexOf(element);
  //             let value = dataArray.splice(index,1)
  //             dataArray.push(value[0])
  //         }
  //     })
  //     console.log(dataArray);
  // }, []);

  // useEffect(() => {
  //     let missingValues = [];
  //     for (let i=1;i<datalength;i++){
  //         if (!dataArray.includes(i)){
  //             missingValues.push(i);
  //             console.log("missing",missingValues);
  //         }
  //     }
  //     console.log(missingValues);
  // }, []);

  useEffect(() => {
    let count = 0;
    for (let index = 0; index < dataArray.length; index++) {
      for (let j = index + 1; j < dataArray.length; j++) {
        if (dataArray[index] + dataArray[j] === dataSum) {
          ++count;
        }
      }
    }
    console.log(count);
  }, []);

  return (
    <div>
      <h2>Hello</h2>
      <p></p>
    </div>
  );
};

export default Test;
