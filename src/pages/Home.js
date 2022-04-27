import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import { Card, Container, Navbar } from 'react-bootstrap';
import UserContext from '../context';
import BootstrapCard from '../components/BootstrapCard';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
  const ctx = React.useContext(UserContext);
  return (
       <BootstrapCard
       bgcolor="light"
      txtcolor="black"
      header="Welcome to Volunteer Bank & Distrust"
      text="Think Wisely When Chosing a Bank"
      body={(<img src="images/bank.png" className="img-fluid" alt="Responsive image"/>)}
      />   
  );  
}

export default Home;

