import React from 'react';
import './itemsDisplay.css';
import Card from '../cards/Card';
import items from '../Items';


function ItemsDisplay() {
  return (
    <div className='items'>
    {
        items.map((item,index)=>(
        <div key={index}>

            <Card item={item}/>
            
            </div>))
    }
    </div>
  )
}

export default ItemsDisplay