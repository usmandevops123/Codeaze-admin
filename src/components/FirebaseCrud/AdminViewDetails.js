import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";

function AdminViewDetails() {
  const { data } = useParams();
  const newData = data.split("+");
  const [bookerProductData, setBookerProductData] = useState([]);
  const [adminProductDetail, setAdminProductDetail] = useState([]);
  useEffect(async () => {
    
    
    await db
      .collection("Brooker Selected Products")
      .onSnapshot((snapshot) =>
        setBookerProductData(snapshot.docs.map((doc) => doc.data()))
      );//yeh data la raha hai or store karwa raha hai bookerProductData mai useState mai



    await db
      .collection("Products List")
      .onSnapshot((snapshot) =>
        setAdminProductDetail(snapshot.docs.map((doc) => doc.data()))
      );//yeh data la raha hai or store karwa raha hai adminProductDetail mai useState mai



  }, []);
  console.table(bookerProductData);
  console.table(adminProductDetail);

  let email = newData[0];// yeh Params k liye use kara hia is ka koi relation nahi error se ! 


  
  var z = [];

  z = bookerProductData.filter((c) => c.EmailForUnique === email);
  console.log("this is sorted data by email", z); //b
  //bookerProductData mai jo Data hai usko yeh filter kar email id se matlb..email id match karegi tou uska data de de ga


  
  return (
    <div>
      <h1></h1>
      <h1>hellloooo {newData[0]}</h1>
      

      
      {adminProductDetail.map((adminProductFullList) => {
        z.map((bookerProductFullList) => {
          if (
            adminProductFullList.Products === bookerProductFullList.Products
          ) {
            adminProductFullList.Quantity += Number(
              bookerProductFullList.Quantity
            );
            return (
              <>
                {/* <h1> {bookerProductFullList.Products} </h1>// hirtik bhae yeh abhi bhi gol gol ghoom raha
                <h1> {console.log(bookerProductFullList.Products)} </h1>
                <h1> {bookerProductFullList.Quantity} </h1>
                <h1> {console.log(bookerProductFullList.Quantity)} </h1>
                <h1> {bookerProductFullList} </h1> */}
              </>
            );
          }
        });
      })}
      {adminProductDetail.map((adminProductList) => {
        return (
          <>
            <div>
                  
              <h1>  1{adminProductList.Products} </h1>
              <h1> {adminProductList.Quantity} </h1>
              {console.log("in db",adminProductList)}

            </div>
           
          </>
        );
      })}
                 {console.log("this value have to be store in db",adminProductDetail)}

    </div>
  );
}

export default AdminViewDetails;
