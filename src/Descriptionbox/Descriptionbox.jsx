import React from 'react'
import './description.css'

export default function Descriptionbox() {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fades">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>At our store, we believe that fashion should be accessible to all, which is why we strive to provide affordable options without compromising on quality. With our commitment to exceptional craftsmanship and customer satisfaction, we invite you to experience the joy of finding your perfect look with us.</p>
        <p>Indulge in luxurious fabrics, flattering cuts, and attention to detail that elevate your wardrobe essentials. Whether you're searching for casual chic, professional attire, or statement pieces that make a bold impression, our collection has something for everyone.</p> 
      </div>
    </div>
  )
}
