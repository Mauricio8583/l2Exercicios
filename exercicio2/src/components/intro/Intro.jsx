import React from 'react'
import './intro.scss'

export const Intro = () => {
  return (
    <div className='introContainer'>
        <div className='intro'>
        <div className='texts'>
            <span>Non Fungible Tokens</span>
            <h1>A New NFT Experience</h1>
            <span>Discover, Collect and Sell</span>      
        </div>
        <div className='squares'>
            <img src='../../Image1.png' alt='' />
            <img src='../../Image2.png' alt='' />
            <img src='../../Image3.png' alt='' />
            <img src='../../Image4.png' alt='' />
            <img src='../../Image5.png' alt='' />
            <img src='../../Image6.png' alt='' />        
        </div>  
        <div className='sponsors'>
            <img src='../../Ritter.png' alt='' />
            <img src='../../Addidas.png' alt='' />
            <img src='../../Nike.png' alt='' />
            <img src='../../Holland.png' alt='' />        
        </div>      

        </div>
    </div>
  )
}
