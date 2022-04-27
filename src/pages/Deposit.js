import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapCard from '../components/BootstrapCard';
import UserContext from '../context';


       function  Deposit() {
               
               const [show, setShow] = React.useState(true);
               const [status, setStatus] = React.useState('');
               const ctx = React.useContext(UserContext);
               const [balance, setBalance]=React.useState(ctx.users[ctx.users.length-1].balance);
               const [deposit, setDeposit] = React.useState('');
               const [disabled, setDisabled]= React.useState(true);
           
               function validate(deposit) {
                if (isNaN(deposit)) {
                  setStatus("Error: Deposit Amount must be a number");
                  setTimeout(() => setStatus(""), 3000);
                  return false;
                }
                if (deposit < 1) {
                  setStatus("Error: Deposit Amount cannot be a negative number");
                  setTimeout(() => setStatus(""), 3000);
                  return false;
                }
                return true;
              }
              
              function handleDeposit() {
                if (!validate(Number(deposit))) return;
                ctx.users[ctx.users.length-1].balance = balance + Number(deposit);
                setBalance(balance + Number(deposit));
                setShow(false);
              }

              function clearForm(){
                setDeposit ('');
                setShow(true);
        }

               return (
                <BootstrapCard
                  txtcolor="white"
                  bgcolor="light"
                  header="Deposit"
                  status={status}
                  body={show ? (
                  <>
                  <br/>
                    Account Balance ${balance}
                    <br/><br/><br/>
                    Deposit Amount
                    <input type="input"
                      className="form-control"
                      id="deposit"
                      placeholder="Enter Deposit Amount"
                      value={deposit}
                      onChange={(e) => {
                        setDeposit(e.currentTarget.value);
                        setDisabled(false);
                      }} >
                    </input>
                    <br/><br/>
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={handleDeposit}
                      disabled={disabled}
                    >
                    Deposit
                    </button>
                  </>
                ):(
                  <>
                    <h5>Success</h5>
                    <br/>
                    <h6>Account Balance ${balance}</h6>
                    <br/>
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={clearForm}
                    >
                     Make Another Deposit
                    </button>
                  </>
                )
              }
           />
         )
        }
       
       export default Deposit;