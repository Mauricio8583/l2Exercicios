import React from 'react'
import './divider.scss'

export const Divider = () => {
  return (
    <div className='dividerContainer'>
        <div className='divider'>
            <ul>
                <li><img src='../../Users.png' alt='' /><h1>300k</h1><span>Users Active</span></li>
                <li><img src='../../Artworks.png' alt='' /><h1>52,5k</h1><span>Artworks</span></li>
                <li><img src='../../Artists.png' alt='' /><h1>17,5k</h1><span>Artists</span></li>
                <li><img src='../../Wallet.png' alt='' /><h1>35.58</h1><span>ETH Spent</span></li>
            </ul>        
        </div>       
    </div>
  )
}
