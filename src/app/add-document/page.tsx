'use client'
import React, { useRef, useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { useUser } from '@clerk/nextjs'

const Page = () => {
  const {user} = useUser();
  // const [file, setFile] = useState<File | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>('');
  const [uploading, setUploading] = useState<boolean>(false);
  const uploadFileUrl = useMutation(api.uploads.uploadFile);
  const saveDocument = useMutation(api.uploads.saveDocument);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   if(!fileInput.current?.files?.[0]) return;
   setUploading(true);
   const postUrl = await uploadFileUrl();
   console.log(postUrl)
   const file = fileInput.current.files[0];
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file.type },
      body: file,
    });
    const { storageId } = await result.json();

    // 3. Save document metadata
    await saveDocument({
      storageId,
      title,
      user: user!.id, // Cast to 'any' to satisfy type 'Id<"users">'
    });

    // write a convex function that gets the file id and saves it to the doc in the db under the content field

    console.log(uploadFileUrl, "test")

    setUploading(false);
    setTitle('');
    if (fileInput.current) fileInput.current.value = '';
    alert("Upload complete!"); 
  }
  return (
    <div>
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
