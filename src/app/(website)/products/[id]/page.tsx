import React from 'react'
import ProductDetails from "./_components/ProductDetails"

const page = ({ params }: { params: { id: string} } ) => {
  
  
  return (
    <div >
      <ProductDetails productId={params.id}   />
    </div>
  )
}

export default page