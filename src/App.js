import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";
// bro yeh page yahan se call ho raha hai neechay mai dikhata hun
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Route, Switch } from "react-router-dom";
import Booker from "./components/BookerArea/Booker";
import BookerSignup from "./components/BookerArea/BookerSignup";
import BookerNavbar from "./components/BookerArea/BookerNavbar";
import BookerSignin from "./components/BookerArea/BookerSignin";
import Distributor from "./components/DistributorArea/Distributor";
import DistributorNavbar from "./components/DistributorArea/DistributorNavbar";
import DistributorSignin from "./components/DistributorArea/DistributorSignin";
import DistributorSignup from "./components/DistributorArea/DistributorSignup";
import { auth, db } from "./components/Firebase";
import React, { useEffect, useState } from "react";
import Todos from "./components/BookerArea/Todos";
import FirebaseCrud from "./components/FirebaseCrud/FirebaseCrud";
import AdminProducts from "./components/FirebaseCrud/AdminProducts";
import AdminViewDetails from "./components/FirebaseCrud/AdminViewDetails";
import Test from "./Test";

function App() {
  // const [reels , setReels] = useState([])// mai changes kar sakta hun useEffect k liye abhi ? 
  const [user, setUser] = useState("null");
  const [productData,getProductData] = useState("null")

  // useEffect( async () => {
  //   await db.collection("Products List").onSnapshot(snapshot =>getProductData(snapshot.docs.map
  //     (doc=> doc.data())) )

  // } , [])
  //   console.log(productData)
    

  // console.log(reels)
  // reels.map((newArray)=>{
  //   return newArray
  // console.log(newArray)
  // console.log(newArray.email)
  // const  role = {newArray};
  // console.log(role)
  // console.log(newArray[role])

  // })

  // var newRole = reels.map(function(ele){
  //   var role  = ele.role
  //   return{
  //     role :role
  //   }
  // });
  // console.log(newRole)

  useEffect( async () => {
    await auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
      
    });
  }, []);
  useEffect( async () => {
    await auth.onAuthStateChanged((newRole) => {
      if (newRole) setUser(newRole);
      else setUser(null);
    });
  }, []);
  

  // console.log(user)
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Test/> */}
          <Route exact path="/">
            <Navbar  user={user} />

            <AdminProducts user={user} />
            <FirebaseCrud />
          </Route>
          {/* <Route exact path="/ViewDetails">
            <Navbar user={user} />
            <AdminViewDetails productData={productData}/>
          </Route> */}
          <Route
            path="/ViewDetails:data"
            children={<>
                  <Navbar user={user} />
                  <AdminViewDetails />
                  </>}
            />

                
            
          
          <Route exact path="/signin">
            <Navbar />

            <Signin />
          </Route>
          <Route exact path="/signup">
            <Navbar />

            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>

      <BrowserRouter>
        <Switch>
          <Route exact path="/Booker">
            <BookerNavbar user={user} />
            <Booker user={user} />
          </Route>
          <Route exact path="/Bookersignin">
            <BookerNavbar />

            <BookerSignin />
          </Route>
          <Route exact path="/Bookersignup">
            <BookerNavbar />

            <BookerSignup />
          </Route>
        </Switch>
      </BrowserRouter>

      <BrowserRouter>
        <Switch>
          <Route exact path="/Distributor">
            <DistributorNavbar />

            <Distributor />
          </Route>
          <Route exact path="/Distributorsignin">
            <DistributorNavbar />

            <DistributorSignin />
          </Route>
          <Route exact path="/Distributorsignup">
            <DistributorNavbar />

            <DistributorSignup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
