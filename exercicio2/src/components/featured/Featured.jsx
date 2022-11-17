import React from 'react'
import './featured.scss'

export const Featured = () => {
  return (
    <div className='featuredContainer'>
        <div className='featured'>
            <div className='left'>
                <div className='mainText'>
                    <span className='preTitle'>Overline</span>
                    <h1>Sapien ipsum scelerisque convallis fusce</h1>
                    <span className='text'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo</span>
                </div>
                <div className='buttons'>
                <button className='started'>Get started</button>
                <button className='learn'>Learn more</button>
                </div>
            </div>
            
            <div className='right'>
                <div className='imagesContainer'>
                    <img src='../../Paint1.png' alt='' />
                    <img src='../../Paint2.png' alt='' />
                </div>
            </div>        
        </div>        
    </div>
  )
}
