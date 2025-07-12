"use client";
import TestApi from '@/api/testapi';
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    TestApi();
    console.log('TestApi called');
  }, []);


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h1>my test!</h1>
    </div>
  );
}
