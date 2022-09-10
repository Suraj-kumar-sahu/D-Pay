import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <img src="assets/logo.png" alt="logo" />
        <h1>D-PΛY</h1>
      </div>
      <div className="right">
        <span><a href="https://coinmarketcap.com/" target="blank">Market</a></span>
        <span><a href="https://www.dappuniversity.com/" target="blank">Tutorials</a></span>
        <span><a href="https://metamask.io/" target="blank">Wallet</a></span>
        <span><a href="https://surajkumarsahu.netlify.app/" target="blank">Maker</a></span>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
