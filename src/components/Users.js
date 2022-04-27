import React, {useContext} from 'react';
import UserContext from '../context';
import '../App.css';


const Users = () => {
        const ctx = React.useContext(UserContext);
        const usersData = ctx.users.map(user => 
        <ul className="user-list">
        <li  className="allDatalist">
        <div className="allDataname" ><h5>{user.name}</h5></div>
        <div className="allDataemail">Email: {user.email}</div>
        <div className="allDatapassword">Password: {user.password}</div>
        <div className="allDatabalance">Balance: ${user.balance}</div><br/>
        </li>
        </ul>
        );
        return <section>
                <br/>
                {usersData}
                
              </section>
        };

export default Users;

