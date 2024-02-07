import React from 'react'
import Hero from '../../hero/hero'
import Popular from '../../popular/popular'
import Offers from '../../Offers/Offers'
import Newcollection from '../../Newcollections/Newcollection'
import Newsletter from '../../Newsletter/Newsletter'




export default function Shop() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <Newcollection/>
        <Newsletter/>
    </div>
  )
}
