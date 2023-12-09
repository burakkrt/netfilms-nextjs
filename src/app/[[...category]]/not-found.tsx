'use client';
import React from 'react';
import {useRouter} from 'next/navigation';
import {FaArrowRight} from 'react-icons/fa';

const Category404 = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center flex-col h-full gap-8">
      <h1 className="text-4xl">This category does not exist!</h1>
      <button
        type="button"
        className="text-lg border py-2 px-4 rounded-md hover:bg-slate-50 hover:text-slate-800 duration-150"
        onClick={() => router.back()}>
        Click here to go back
        <span className="inline-block align-middle ms-2">
          <FaArrowRight />
        </span>
      </button>
    </div>
  );
};

export default Category404;
