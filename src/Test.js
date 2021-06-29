import React from "react";

function Test() {
  console.log("test");
  let defaultProduct = [
    { product: "pepsi", quantity: "0" },
    { product: "coca cola", quantity: "0" },
    { product: "biscuit", quantity: "0" },
    { product: "icecream", quantity: "0" },
    { product: "juice", quantity: "0" },
  ];
  let purchasedProduct = [
    { product: "pepsi", quantity: "330", },
    { product: "coca cola", quantity: "20" },
    { product: "biscuit", quantity: "30" },
  ];

  let objectIWant = [
    {
      product: "pepsi",
      quantity: "10",
      product: "coca cola",
      quantity: "20",
      product: "biscuit",
      quantity: "30",
      product: "icecream",
      quantity: "0",
    },
  ];

  purchasedProduct.map((purchasedObj) => {
    defaultProduct.map((defaultObj) => {
      if (purchasedObj.product === defaultObj.product) {
        defaultObj.quantity = purchasedObj.quantity;
      }
    });
  });
  console.log("this is defaultObj >>>>", defaultProduct);

  return <div>Test</div>;
}

export default Test;
