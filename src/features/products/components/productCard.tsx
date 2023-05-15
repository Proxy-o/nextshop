import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/layouts/components/ui/card'

export const ProductCard = () => {
  return (
<Card className='shadow-lg'>

  <CardHeader>
  <Image src="/iphone.jpeg" alt='iphone' width={900} className='w-full' height={900}/>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  )
}
