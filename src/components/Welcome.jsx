import React,{useContext} from 'react';
import { TransactionContext } from '../context/TransactionContext';

const Input =({placeholder, name ,type,value , handleChange}) =>(
  <input
    placeholder={placeholder} 
    type={type}
    step ="0.0001"
    value={value}
    onChange={(e)=> handleChange(e , name)}
  />
);

const Welcome = () => {
  const {connectWallet,currentAccount,formData ,sendTransaction,handleChange} = useContext(TransactionContext) ;

  const handleSubmit = (e) =>{
    const { addressTo ,amount ,keyword ,message} = formData ;

    e.preventDefault() ;

    if(!addressTo || !amount || !keyword || !message)return ;
    sendTransaction ();
  }


  return (
    <div className='welcome'>
      <div className="left">
        <div className="heading">
          <h2>Send Crypto</h2>
          <h2>across the world</h2>
        </div>
        <div className="description">
          <span>Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto</span>
        </div>
        {!currentAccount && (<button onClick={connectWallet}>Connect Wallet</button>)}

        <table className='table'>
            <tr>
              <td className='tableContent'>Reliability</td>
              <td className='tableContent'>Security</td>
              <td className='tableContent'>Ethereum</td>
            </tr>
            <tr>
              <td className='tableContent'>Web 3.0</td>
              <td className='tableContent'>Low fees</td>
              <td className='tableContent'>Blockchain</td>
            </tr>
        </table>
      </div>

      <div className="right">
        <div className="upper">
          <div className="smallContainer">
            <img src="assets/ethereum.png" alt="eth" className='eth'/>
            <img src="assets/info.png" alt="info" className='info'/>
          </div>
          <div className="address">
            <span>Address</span>
            <p>Ethereum</p>
          </div>
        </div>
        <div className="lower">
          <form >
            <Input type="text" name='addressTo' placeholder='Address To' handleChange={handleChange}/>
            <Input type="number" name='amount' placeholder='Amount(ETH)' handleChange={handleChange}/>
            <Input type="text" name='keyword' placeholder='Keyword(Gif)' handleChange={handleChange}/>
            <Input type="text" name='message' placeholder='Enter Message' handleChange={handleChange}/>
            <button onClick={handleSubmit}>Send Now</button>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Welcome
