import React, {useState, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from '../components/Users';
import BootstrapCard from '../components/BootstrapCard';
import '../App.css';
import { Card } from 'react-bootstrap';
import UserContext from '../context';

const AllData = () => {
        const ctx = React.useContext(UserContext);
        
        return (
                
                <BootstrapCard
                
                       header="All Data"
                       bgcolor="light"
                       
                       body={ <Users />}
                       />
        

        );
}



export default AllData;