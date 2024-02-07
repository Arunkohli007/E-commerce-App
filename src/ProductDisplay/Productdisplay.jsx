import React from 'react'
import './productdisplay.css'
import star_icon from '../assets/star_icon.png'
import start_dull_icon from '../assets/star_dull_icon.png'

export default function Productdisplay(props) {
    const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="prodductdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='product-display-main-img' src={product.image} alt="" />
        </div>
      </div>
    <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={start_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className='productdisplay-right-price-new'>
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
        Welcome to our diverse collection of clothing, where style meets comfort and quality. Discover a world of fashion possibilities as you browse through our meticulously curated selection of apparel for every occasion. From timeless classics to the latest trends, we offer an extensive range of clothing for men, women, and children.

        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className='productdisplay-right-sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span> Women, T-shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
    </div>
    </div>
  )
}
