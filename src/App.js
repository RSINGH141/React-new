import React from 'react';
import './App.css';
import {Button,Container,Row,Col} from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import Home from './componenets/Home';
import Course from './componenets/Course';
import Allcourses from './componenets/Allcourses';
import Addcourses from './componenets/Addcourses';
import Header from './componenets/Header';
import Menu from './componenets/Menu'
import{BrowserRouter as Router,Link,Route, Routes,Redirect,Switch} from 'react-router-dom';


function App() {
  const BtnHandle= () => {
    toast("welcome" ,{position:"t"},)
  }

  return (
    <div   style={{textAlign:'center', backgroundColor:'whitesmoke',width:1300,height:600}}>
  <Router>
  <ToastContainer />
   <Container>
   <Header/>
    
   <Row>
<Col   md={4}>
      
    
 <div className="navbar-nav mr-auto"> <li className="nav-item"> <Link to={"/home"} className="nav-link"> Home </Link> </li></div>
 <Link to={"/Addcourses"} className="nav-link"> Addcourses </Link>
 <Link to={"/Viewcourses"} className="nav-link"> Allcourses </Link>
 </Col>
 <Col  md={8}> 
    <Routes > 
   
   <Route path="/home" element={<Home />} />
   <Route path="/Addcourses" element={<Addcourses />} />
   <Route path="/Viewcourses" element={<Allcourses />} />
   
   
   
  
   
   </Routes>
   </Col>
   </Row>
    
   </Container>
 
   </Router>
   </div>
  );
}

export default App;
