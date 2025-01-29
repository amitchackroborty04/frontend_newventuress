import { Button } from '@/components/ui/button'
import React from 'react'
import { Plus } from 'lucide-react';
const AddButon = () => {
  return (
    <div className='bg-white flex justify-end mb-[30px]  p-[15px] rounded-[12px]'>

        <Button className='h-[43px]'>
            Add New   <Plus />          
        </Button>
    </div>
  )
}

export default AddButon