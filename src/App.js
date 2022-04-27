import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import AllData from './pages/AllData';
import MainNav from './components/MainNav';
import PageFooter from './components/PageFooter';
import UserContext from './context';







function App() {
  return (

    <div className="App">
  
          <MainNav />
          <UserContext.Provider value={{users:[{name:"John", email: "john@email.com", password: 'passpass', balance: 100}]}}>
          <Switch>
          <Route path='/'exact component={Home} />
          <Route path='/createaccount' component={CreateAccount} />
          <Route path='/deposit' component={Deposit} />
          <Route path='/withdraw' component={Withdraw} />
          <Route path='/alldata' component={AllData} />
          </Switch>
          </UserContext.Provider>
    
          
        <PageFooter />
    

         
 
    </div>
  );
}


export default App;