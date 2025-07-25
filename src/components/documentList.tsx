'use client'
// import React, { useState } from 'react'
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { motion } from 'motion/react';



export const EmptyList = () => {
  return (
    <>
       <h1 className="text-2xl font-bold">Document List</h1>
        <p className="text-lg">Here you can view your documents.</p>
         <motion.button>
            <p>add file</p>
          </motion.button>
    </>
  )
}

const DocumentList = () => {
  const d = useQuery(api.uploads.fetchUploads) 
  if(!d || d.length === 0) {
    return <EmptyList />
  } else {
    return (
      <div>
          <h1 className="text-2xl font-bold">Document List</h1>
           {d?.map((doc) => {
            return <div key={doc._id} className="border p-4 mb-4 rounded">
              <h2 className="text-xl font-semibold">{doc.title}</h2>
              <p className="text-gray-700">{doc.content}</p>  
            </div>
           })}
           <motion.button>
              <p>add file</p>
            </motion.button>
      </div>
    )
  }
}

export default DocumentList
