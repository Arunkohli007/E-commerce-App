import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../../Breadcrums/Breadcrum';
import Productdisplay from '../../ProductDisplay/Productdisplay';
import { ShopContext } from '../Shopcontext';
import Descriptionbox from '../../Descriptionbox/Descriptionbox';
import Relatedproducts from '../../Relatedproducts/Relatedproducts';

export default function Product() {
  const {all_product}= useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <Relatedproducts/>
    </div>
  )
}
