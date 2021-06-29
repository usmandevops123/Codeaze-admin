import React, { useEffect } from 'react'
// import { Dropdown } from 'semantic-ui-react'
import { auth, db, serverTimeStamp } from '../Firebase'

// export const DropdownExampleSearchSelection = () => {
//     const [productData , getProductData] = useState([])

//     useEffect(() => {
//         db.collection("Products List").onSnapshot(snapshot =>getProductData(snapshot.docs.map
//           (doc=> doc.data())) )
        
//       } , [])  
//       console.log(productData)
//       var productList = productData.map(function(ele){
//         var email  = ele.Products
//         return{
//           text :email
//         }
//       });
//       console.log(productList)
//     return (
//         <div>
//             <form>
//             <Dropdown 
//     placeholder='Select Country'
//     search
//     fluid
//     selection
//     options={countryOptions }
    
//   />

//             </form>
            
              
 
//         </div>
//     )
// }
// const countryOptions = [
//     { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
//     { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
//     { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
//     { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
//     { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
//     { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
//     { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
//     { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
//     { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
//     { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
//     { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
//     { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
//     { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
//     { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
//     { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
//     { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
//     { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
//     { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
//     { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
//     { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
//     { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
//     { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
//     { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
//   ]

// export default DropdownExampleSearchSelection

import { useState } from "react";
import Select from "react-select";
export default function DropdownExampleSearchSelection() {
      const [productData , getProductData] = useState([])

    useEffect(() => {
        db.collection("Products List").onSnapshot(snapshot =>getProductData(snapshot.docs.map
          (doc=> doc.data())) )
        
      } , [])
    console.log(productData)
    

    const [v, setV] = useState("");
    const [input, setInput] = useState("");
  const aa = productData;
   
  var opt = [];
  aa.map((e) => opt.push({ value: e.Products, label: e.Products }));
  try {
   var checkEmail = auth.currentUser
  console.log(checkEmail.email)

  } catch (error) {
    
  }
  console.log(checkEmail.email)

  return (
    <div >
      <Select onChange={(e) => setV(e.value)} options={opt} />
      <input type="number" onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          console.log(v);
          console.log(input)
          db.collection("Brooker Selected Products").add({
            Products:v,
            EmailForUnique : checkEmail.email,
            Quantity: input,
            CreatedAt : serverTimeStamp
          })
        }}
      >
        Click
      </button>
    </div>
  );
}
