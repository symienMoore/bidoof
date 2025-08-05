'use client'
import React, { useRef, useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { useAuth } from '@clerk/nextjs'
import { toast } from 'sonner'

const Page = () => {
  // const {user} = useUser();
  const { userId } = useAuth();
  // const [file, setFile] = useState<File | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>('');
  const [uploading, setUploading] = useState<boolean>(false);
  const uploadFileUrl = useMutation(api.uploads.uploadFile);
  const saveDocument = useMutation(api.uploads.saveDocument);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   if(!fileInput.current?.files?.[0]) return;
   if(!userId) {
     toast.error("Please sign in to upload documents");
     return;
   }
   setUploading(true);
   const postUrl = await uploadFileUrl();

   const file = fileInput.current.files[0];
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file.type },
      body: file,
    });
    const { storageId } = await result.json();

    
    await saveDocument({
      storageId,
      title, 
      url: postUrl,
      userId
    });


    setUploading(false);
    setTitle('');
    if (fileInput.current) fileInput.current.value = '';
    toast.success("Upload complete!");
  }
  return (
    <div>
      <h1 className="font-ranchers text-2xl">Upload document</h1>
      <form className='flex flex-col w-1/2 mx-auto my-auto' onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Document title"
        required
      />
      <input
        type="file"
        ref={fileInput}
        required
      />
      <button type="submit" disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </form>
    </div>
  )
}

export default Page
