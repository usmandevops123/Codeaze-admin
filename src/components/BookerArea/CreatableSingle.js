import React, { Component,useEffect,useState } from 'react';

import CreatableSelect from 'react-select/creatable';
import { db } from '../Firebase';
export const Test= (productList)=> { 
 const [productData , getProductData] = useState([])
useEffect(() => {
    db.collection("Products List").onSnapshot(snapshot =>getProductData(snapshot.docs.map
      (doc=> doc.data())) )
    
  } , []) 
  console.log(productData)
  var productList = productData.map(function(ele){
    var email  = ele.Products
    return{
      text :email
    }
  });
  console.log(productList)
}
export default class CreatableSingle extends Component{

     
    
  handleChange = () => {
    console.group('Value Changed');
    console.groupEnd();
  };
  handleInputChange = (productList) => {
    console.group('Input Changed');
    console.log(productList);
    console.groupEnd();
  };
  render(productList) {
    return (
      <CreatableSelect
        isClearable
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        options={productList}
      />
    );
  }
}