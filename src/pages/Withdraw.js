import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapCard from '../components/BootstrapCard';
import UserContext from '../context';

       function  Withdraw() {
               
               const [show, setShow] = React.useState(true);
               const [status, setStatus] = React.useState('');
               const [withdraw, setWithdraw] = React.useState('');
               const ctx = React.useContext(UserContext);
               const [balance, setBalance]=React.useState(ctx.users[ctx.users.length-1].balance);
               const [amount, setAmount] = React.useState('');
               const [disabled, setDisabled] = React.useState(true);
               const userBalance = ctx.users.map(user => 
               <div>Balance: ${user.balance}</div>);

               function validate(withdraw, balance) {
                if (isNaN(withdraw)) {
                  setStatus("Error: Withdraw Amount must be a number");
                  setTimeout(() => setStatus(""), 3000);
                  return false;
                }
                if (withdraw > balance) {
                  setStatus("Error: Insuffienct funds");
                  setTimeout(() => setStatus(""), 3000);
                  return false;
                }
                if (withdraw < 1) {
                  setStatus("Error: Withdraw Amount cannot be a negative number");
                  setTimeout(() => setStatus(""), 3000);
                  return false;
                }
                 return true;
              }

              function handleWithdraw() {
                if (!validate(Number(withdraw), balance)) return;
                ctx.users[ctx.users.length-1].balance = balance - Number(withdraw);
                setBalance(balance - withdraw);
                setShow(false);
              }
          
              function clearForm(){
              setWithdraw ('');
              setShow(true);
              }

               return (
                <BootstrapCard
                  txtcolor="white"
                  headercolor="danger"
                  bgcolor="light"
                  header="Withdraw"
                  status={status}
                  body={show ? (
                  <>
                  <br/>
                    Account Balance ${balance}
                    <br/><br/><br/>
                    Withdraw Amount
                    <input
                      type="input"
                      className="form-control"
                      id="withdraw"
                      placeholder="Enter Withdraw Amount"
                      value={withdraw}
                      onChange={(e) => {
                      setWithdraw(e.currentTarget.value);
                      setDisabled(false);
                      }
                     }
                    />
                    <br />
                    <button
                      type="submit"
                      className="btn btn-danger"
                      onClick={handleWithdraw}
                      disabled={disabled}
                    >
                      Withdraw
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
                          className="btn btn-danger"
                          onClick={clearForm}
                        >
                         Make Another Withdraw
                        </button>
                      </>
                    )
                  }
               />
               )
            }    
            
            
            
       export default Withdraw;
