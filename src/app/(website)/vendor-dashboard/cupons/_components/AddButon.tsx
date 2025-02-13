'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Plus } from 'lucide-react';
import EditeCupon from './EditeCupon';

const AddButon = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className='bg-white flex justify-end mb-[30px] p-[15px] rounded-[12px]'>

      { showForm && (
        <div className='fixed inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50 '>
          <div>
            <EditeCupon setIsOpen={setShowForm} />
          </div>
        </div>
      )}

      <Button
        onClick={() => setShowForm(true)}
        className='h-[43px]'
      >
        Add New <Plus />
      </Button>
    </div>
  )
}

export default AddButon
