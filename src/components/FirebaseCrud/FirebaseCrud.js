import { useEffect, useState } from "react";
import React from "react";
import { useHistory } from "react-router";


import {
  Container,
  Grid,
  Segment,
  Form,
  Input,
  Button,
  Header,
  Table,
  Icon,
} from "semantic-ui-react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { auth, db } from "../Firebase";
import AdminViewDetails from "./AdminViewDetails";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const FirebaseCrud = () => {
  const [aFirstName, setAFirstname] = useState("");
  const [aLirstName, setALastname] = useState("");

  const [bookerDataTest, getBookerDataTest] = useState([]);
  const [uFirstName, setuFirstName] = useState("");
  const [uLirstName, setULastname] = useState("");
  const [userId,setUserId] = useState("");

  const history = useHistory()

  const handleAddUser = async () => {

    const distributorCredentials = await auth.createUserWithEmailAndPassword(
      aFirstName,
      aLirstName
    );
    db.collection("Booker")
      .doc(distributorCredentials.user.uid)
      .set({
         id : distributorCredentials.user.uid,       
        email: aFirstName,
        password: aLirstName,
        role:"Booker",
      });
    console.log(distributorCredentials);
    setAFirstname("");
    setALastname("");
}  ;
 
  useEffect(() => {
    db.collection("Booker").onSnapshot((snapshot) =>
      getBookerDataTest(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  console.log(bookerDataTest)

 const  handleUpdateUser =() =>{
    db.collection("Booker")
    .doc(userId)
    .update({
      FirstName: uFirstName,
      LastName: uLirstName,
     

      
    });
    
    setuFirstName("");
    setULastname("");
  }
  const handleUpdateClick = (data) =>{
      setuFirstName(data.FirstName);
      setULastname(data.LastName)
      setUserId(data.id);
      console.log(data.LastName)
    // history.push({pathname:'/viewdetails',state:{data:data}})
  
    
}

 
  const handleDeleteClick = (id) => {
    db.collection("Booker")
    .doc(id).delete()
    console.log(id)
    
    
  }

  //   var newEmail = bookerDataTest.map(function (ele) {
//     var FirstName = ele.FirstName;
//     return {
//       FirstName: FirstName,
//     };
//   });
//   console.log(newEmail);
//   let names = newEmail.map((item) => item.FirstName);

//   console.log(names);

// test up one

  //   let FirstName = {newEmail}
  //   console.log(FirstName)
  //   let userInfo= []
  //   console.log(bookerDataTest)
  //   for (let id in bookerDataTest){
  //     userInfo({
  //         id : id,
  //         FirstName :bookerDataTest[id].FirstName
  //     })
  //   }
  //   console.log(userInfo)
  return (
    <div>
      <Container>
        <Grid>
          <Grid.Row columns="2">
            <Grid.Column>
              <Segment padded="very">
                <Form>
                  <Form.Field>
                    <label>Email ID</label>
                    <Input
                      placeholder="First Name "
                      focus
                      value={aFirstName}
                      onChange={(e) => {
                        setAFirstname(e.target.value);
                      }}
                    ></Input>
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <Input
                      placeholder="Last Name "
                      focus
                      value={aLirstName}
                      onChange={(e) => {
                        setALastname(e.target.value);
                      }}
                    ></Input>
                  </Form.Field>
                  <Form.Field>
                    <Button
                      onClick={() => {
                        handleAddUser();
                      }}
                      positive
                    >
                        <Icon name="add circle"></Icon>

                      Add User
                    </Button>
                  </Form.Field>
                </Form>
              </Segment>
            </Grid.Column>
            <Grid.Column><Segment padded="very">
                <Form>
                  <Form.Field>
                    <label>Email ID</label>
                    <Input
                      placeholder="First Name "
                      focus
                      value={uFirstName}
                      onChange={(e) => {
                        setuFirstName(e.target.value);
                      }}
                    ></Input>
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <Input
                      placeholder="Last Name "
                      focus
                      value={uLirstName}
                      onChange={(e) => {
                        setULastname(e.target.value);
                      }}
                    ></Input>
                  </Form.Field>
                  <Form.Field>
                    <Button
                      onClick={() => {
                        handleUpdateUser();
                      }}
                      primary
                    >
                        <Icon name="edit"></Icon>
                      Update User
                    </Button>
                  </Form.Field>
                  
                </Form>
              </Segment></Grid.Column>
          </Grid.Row>
          <Grid.Row columns="1">
            <Grid.Column>
              {bookerDataTest.length == 0 ? (
                <Segment>
                  <Header textAlign="center">
                    Oops! No data Available Please Enter Some Data
                  </Header>
                </Segment>
              ) : (
                <Segment padded="very">
                  <Table celled fixed singleLine>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>EmailId</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>

                      </Table.Row>
                    </Table.Header>
                    {
                      //Bhai ho gya features implement
                      // bhae ap cheetah hoooo
                      // bhae yeh data pass ek sath nahi ho sakta pura ka pura
                      //humein data.firsName likh kar bhejna parh raha hai pura ek sahi nahi ho sakta ?try krte hai ruko
                        bookerDataTest.map((data,index)=>{
                           
                            return <Table.Body>
                                <Table.Cell>
                                    {data.email}
                                </Table.Cell>
                                <Table.Cell>
                                    {data.password}
                                </Table.Cell>
                                <Table.Cell>
                                
                                <Button onClick={(data)=>{
                                        handleUpdateClick(data)
                                }} primary>
                                <Icon name="edit" >
                                </Icon>
                               <Link to ={"/ViewDetails"+ data.email}> View Details </Link>
                               {/* <Link to ={"/ViewDetails"}> View Details </Link> */}
                                </Button>
                            </Table.Cell>
                                <Table.Cell>
                                
                                    <Button onClick={()=>{
                                            handleUpdateClick(data)
                                    }} primary>
                                    <Icon name="edit" >
                                    </Icon>
                                    Update
                                    </Button>
                                    {/* <SimpleModal/> */}

                                </Table.Cell>
                                <Table.Cell>

                                    <Button onClick ={() =>{
                                        handleDeleteClick(data.id)
                                       
                                    }} color = "red">
                                    <Icon  name="delete" >
                                    </Icon>
                                    Delete

                                    </Button>
                                    
                                   
                                </Table.Cell>
                            </Table.Body>

                        }
                        )
                    }
                  </Table>
                </Segment>

              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default FirebaseCrud;


// modal from material-ui


// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// export function SimpleModal() {
//   const classes = useStyles();
//   // getModalStyle is not a pure function, we roll the style only on the first render
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const body = (
//     <div style={modalStyle} className={classes.paper}>
//       <SimpleTabs/>
//     </div>
//   );

//   return (
//     <div>
//       <button type="button" onClick={handleOpen}>
//         Open Modal
//       </button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         {body}
//       </Modal>
//     </div>
//   );
// }


// //tabs


// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// const useStylesNew = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export function SimpleTabs() {
//   const classes = useStylesNew();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </div>
//   );
// }