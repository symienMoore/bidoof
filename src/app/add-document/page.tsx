import React from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../../convex/_generated/api'

const Page = () => {
  const uploadFileUrl = useMutation(api.uploads.uploadFile);
  
  return (
    <div>
      <div className='border p-4 rounded mx-auto'>
        <h1 className="text-2xl font-bold mb-4">Add Document</h1>
        <p className="text-lg mb-6">Here you can add a new document.</p>
        {/* Add your form or component to add a document here */}
          <form action="">
            <input className='bg-purple-500 text-white p-5 rounded' type="file" name="file-upload" id="file-upload" />
          </form>
      </div>
    </div>
  )
}

export default Page
