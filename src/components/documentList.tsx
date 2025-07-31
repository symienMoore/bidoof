'use client'
// import React, { useState } from 'react'
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { motion } from 'motion/react';
import { Calendar, Download, Eye, MoreHorizontal, Trash2, Share2, Star, FolderOpen, Badge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { Card, CardContent } from './ui/card';
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
           {/* {d?.map((doc) => {
            return <div key={doc._id} className="border p-4 mb-4 rounded">
              <h2 className="text-xl font-semibold">{doc.title}</h2>
              <p className="text-gray-700">{doc.content}</p>  
            </div>
           })} */}
            <div className='grid grid-cols-3 gap-4'>
              {d?.map((doc) => {
                return <div key={doc._id} className="border p-4 mb-4 rounded">
                    <div>
                      p
                  </div>
                  <h2 className="text-xl font-semibold">{doc.title}</h2>
                  <p className="text-gray-700">{doc.content}</p>  
                </div>
              })}
            </div>
           <motion.button className='cursor-pointer'>
              <p>add file</p>
            </motion.button>
      </div>
    )
  }
}





// Mock data for documents
const documents = [
  {
    id: 1,
    name: "Project Proposal.pdf",
    type: "pdf",
    size: "2.4 MB",
    uploadDate: "2024-01-15",
    thumbnail: "/placeholder.svg?height=120&width=120",
    isStarred: false,
    isShared: true,
  },
  {
    id: 2,
    name: "Design Mockups.fig",
    type: "figma",
    size: "5.8 MB",
    uploadDate: "2024-01-14",
    thumbnail: "/placeholder.svg?height=120&width=120",
    isStarred: true,
    isShared: false,
  },
  {
    id: 3,
    name: "Meeting Notes.docx",
    type: "doc",
    size: "1.2 MB",
    uploadDate: "2024-01-13",
    thumbnail: "/placeholder.svg?height=120&width=120",
    isStarred: false,
    isShared: false,
  },
  {
    id: 4,
    name: "Budget Analysis.xlsx",
    type: "excel",
    size: "890 KB",
    uploadDate: "2024-01-12",
    thumbnail: "/placeholder.svg?height=120&width=120",
    isStarred: true,
    isShared: true,
  },
  {
    id: 5,
    name: "Team Photo.jpg",
    type: "image",
    size: "3.1 MB",
    uploadDate: "2024-01-11",
    thumbnail: "/placeholder.svg?height=120&width=120",
    isStarred: false,
    isShared: false,
  },
  {
    id: 6,
    name: "Quarterly Presentation.pptx",
    type: "powerpoint",
    size: "4.7 MB",
    uploadDate: "2024-01-10",
    thumbnail: "/placeholder.svg?height=120&width=120",
    isStarred: false,
    isShared: true,
  },
  {
    id: 7,
    name: "Contract Agreement.pdf",
    type: "pdf",
    size: "1.8 MB",
    uploadDate: "2024-01-09",
    thumbnail: "/placeholder.svg?height=120&width=120",
    isStarred: true,
    isShared: false,
  },
  {
    id: 8,
    name: "Brand Logo.png",
    type: "image",
    size: "2.3 MB",
    uploadDate: "2024-01-08",
    thumbnail: "/placeholder.svg?height=120&width=120",
    isStarred: false,
    isShared: false,
  },
]

const getFileTypeColor = (type: string) => {
  const colors = {
    pdf: "bg-red-50 text-red-600 border-red-200",
    doc: "bg-blue-50 text-blue-600 border-blue-200",
    excel: "bg-green-50 text-green-600 border-green-200",
    powerpoint: "bg-orange-50 text-orange-600 border-orange-200",
    image: "bg-purple-50 text-purple-600 border-purple-200",
    figma: "bg-pink-50 text-pink-600 border-pink-200",
  }
  return colors[type as keyof typeof colors] || "bg-gray-50 text-gray-600 border-gray-200"
}

const getFileIcon = (type: string) => {
  const icons = {
    pdf: "📄",
    doc: "📝",
    excel: "📊",
    powerpoint: "📋",
    image: "🖼️",
    figma: "🎨",
  }
  return icons[type as keyof typeof icons] || "📄"
}

 function DocumentGrid() {
  const [starredDocs, setStarredDocs] = useState<Set<number>>(
    new Set(documents.filter((doc) => doc.isStarred).map((doc) => doc.id)),
  )

  const toggleStar = (docId: number) => {
    setStarredDocs((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(docId)) {
        newSet.delete(docId)
      } else {
        newSet.add(docId)
      }
      return newSet
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FolderOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Files</h1>
              <p className="text-gray-600">
                {documents.length} files • {starredDocs.size} starred
              </p>
            </div>
          </div>

          {/* Fun stats bar */}
          <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Recently active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-600">All synced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span className="text-sm text-gray-600">{documents.filter((d) => d.isShared).length} shared</span>
            </div>
          </div>
        </div>

        {/* Document Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3`}>
          {documents.map((doc) => (
            <Card
              key={doc.id}
              className="group bg-white hover:bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all duration-200 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1 cursor-pointer"
            >
              <CardContent className="p-3">
                {/* Header with actions */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getFileIcon(doc.type)}</span>
                    <Badge variant="outline" className={`text-xs font-medium ${getFileTypeColor(doc.type)}`}>
                      {doc.type.toUpperCase()}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 hover:bg-yellow-100"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleStar(doc.id)
                      }}
                    >
                      <Star
                        className={`h-3 w-3 transition-colors ${
                          starredDocs.has(doc.id)
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-400 hover:text-yellow-500"
                        }`}
                      />
                    </Button>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7 hover:bg-gray-100">
                          <MoreHorizontal className="h-3 w-3 text-gray-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* Thumbnail */}
                <div className="aspect-[4/3] bg-gray-50 rounded-lg mb-3 overflow-hidden border border-gray-100 group-hover:border-blue-200 transition-colors">
                  <img
                    src={doc.thumbnail || "/placeholder.svg"}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* File info */}
                <div className="space-y-1.5">
                  <h3 className="font-medium text-gray-900 text-xs leading-tight line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {doc.name}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{doc.size}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(doc.uploadDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Status indicators */}
                  <div className="flex items-center gap-2">
                    {doc.isShared && (
                      <div className="flex items-center gap-1 text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        <Share2 className="w-3 h-3" />
                        <span>Shared</span>
                      </div>
                    )}
                    {starredDocs.has(doc.id) && (
                      <div className="flex items-center gap-1 text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Starred</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    Open
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-gray-300 hover:border-blue-300 hover:bg-blue-50 transition-all bg-transparent"
                  >
                    <Share2 className="w-3 h-3 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upload area */}
        <div className="mt-12 text-center">
          <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 bg-blue-50/50 hover:bg-blue-50 transition-colors group cursor-pointer">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📁</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Drop files here to upload</h3>
            <p className="text-gray-600 mb-4">or click to browse your computer</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all">
              Choose Files
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default DocumentList
