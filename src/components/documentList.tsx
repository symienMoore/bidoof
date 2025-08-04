'use client'
// import React, { useState } from 'react'
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { motion } from 'motion/react';
import { File, FilePlus } from "lucide-react";
import Link from 'next/link';
// import { Calendar, Download, Eye, MoreHorizontal, Trash2, Share2, Star, FolderOpen, Badge } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
// import { useState } from 'react';
// import { Card, CardContent } from './ui/card';
// Removed unused imports to fix lint errors
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
            <div className='grid grid-cols-3 gap-4'>
              {d?.map((doc) => {
                return <div key={doc._id} className="mb-4">
                  <div className="bg-gray-50 p-32 flex justify-center items-center w-64" >
                    <div className="bg-white p-16 flex center shadow rounded-md">
                    <File size={48}/>
                  </div> 
                  </div>
                  {/* update schema to show the file size */}
                  {/* <div>size: {doc.size}</div> */} 
                  <h2 className="text-xl font-semibold">{doc.title}</h2>
                  <div className="text-xs">created at: {new Date(doc.createdAt).toLocaleDateString()}</div>
                </div>
              })}
            </div>
           <motion.button className='cursor-pointer flex items-center gap-2 bg-purple-500 text-white p-2 rounded-md'>
              <FilePlus />
              <Link href="/add-document">
              <p>new file</p>
              </Link>
            </motion.button>
      </div>
    )
  }
}


export default DocumentList
