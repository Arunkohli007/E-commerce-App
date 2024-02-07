import React from 'react'
import './newcollection.css'
import new_collection from '../assets/new_collections'
import Item from '../items/item'

export default function Newcollection() {
  return (

   
    <div className='new-collections'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="collections">
             {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
             })}
        </div>
      
    </div>
  )
}