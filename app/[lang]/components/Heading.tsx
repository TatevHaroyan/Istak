"use client"
import { useDictionary } from '@/dictionary-provider';


export default function Heading() {
  const dictionary = useDictionary();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{dictionary.home.heading}</h1>
    </div>
  );
}
