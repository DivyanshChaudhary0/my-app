
import React from 'react'

const page = async ({params}) => {
    
    const {number} = await params
    console.log(number);
    
  return (
    <div>page</div>
  )
}

export default page