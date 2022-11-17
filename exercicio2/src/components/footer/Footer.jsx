import React from 'react'
import './footer.scss'

export const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='footer'>
            <div className='left'>
                <div className='main'>
                  <img src='../../Sygnet.png' alt='' />
                  <h2>NFT Market</h2>
                </div>
                <div className='leftFooter'>
                    <span>Suport</span>
                    <span>Terms of Service</span>
                    <span>License</span>
                </div>
            </div>
            <div className='center'>
                <ul className='menuList'>
                    <li>Auctions</li>
                    <li>Roadmap</li>
                    <li>Discover</li>
                    <li>Community</li>
                </ul>
                <button className='account'>My account</button>

                <ul className='iconsList'>
                    <li><img src='../../Facebook.png' alt='' /></li>
                    <li><img src='../../Linkedin.png' alt='' /></li>
                    <li><img src='../../Github.png' alt='' /></li>
                    <li><img src='../../Twitter.png' alt='' /></li>
                    <li><img src='../../Instagram.png' alt='' /></li>
                </ul>
            </div>
            <div className='right'>
                <div className='mainText'>
                    <span>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. 
                    Id nam semper dolor tellus vulputate eget turpis</span>
                </div>
                <div className='sigIn'>
                    <input type="text" placeholder='Newsletter' />
                    <button className='sigInButton'>Sig In</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
