import React from 'react'
import { ProductCard } from '../components/productCard'

export default function Products() {
  return (
    <div className='container  gap-2 md:flex md:justify-center'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}
