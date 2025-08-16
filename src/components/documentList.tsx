'use client'
import React from 'react'
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { motion } from 'motion/react';
import { File } from "lucide-react";
import { Doc } from '../../convex/_generated/dataModel';


export const Menu = () => {
  return (
    <div>
      <p>menu</p>
    </div>
  )
}



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
      <div className='flex flex-col items-center justify-center mt-[700px]'>
          {/* <h1 className="text-2xl font-bold font-ranchers">Document List</h1> */}
            <div className='grid grid-cols-3 gap-10 mb-8'>
              {d?.map((doc: Doc<"docs">) => {
                return <motion.div
                 key={doc._id}
                  className="round-md">
                  <motion.div
                   className="border p-15 flex justify-center items-center" >
                    <div className="bg-white p-10 flex center shadow rounded-md mt-auto">
                    <File className='slate-500' size={48}/>
                  </div> 
                  </motion.div>
                  {/* update schema to show the file size */}
                  {/* <div>size: {doc.size}</div> */} 
                  <p className="">{doc.title}</p>
                  <div className="text-xs text-gray-500">{new Date(doc.createdAt).toLocaleDateString()}</div>
                </motion.div>
              })}
          </div>
           {/* <motion.button className='cursor-pointer flex items-center gap-2 bg-purple-500 text-white p-2 rounded-md'>
              <FilePlus />
                <Link href="/add-document">
                <p>new file</p>
              </Link>
            </motion.button> */}
      </div>
    )
  }
}


export default DocumentList
