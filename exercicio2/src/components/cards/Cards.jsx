import React from 'react'
import './cards.scss'

export const Cards = () => {
  return (
    <div className='cardsContainer'>
        <div className='cards'>
            <div className='mainTitle'>
                <h2>Latest live auctions</h2>            
            </div>
            <div className='cardsImages'>
                <img src='../../Big_Box_Item1.png' alt='' />
                <img src='../../Big_Box_Item2.png' alt='' />
                <img src='../../Big_Box_Item3.png' alt='' />
                <img src='../../Big_Box_Item4.png' alt='' />
                <img src='../../Big_Box_Item5.png' alt='' />           
            </div>        
        </div>        
    </div>
  )
}
