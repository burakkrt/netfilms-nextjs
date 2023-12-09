import React from 'react';
import Link from 'next/link';

function Movie404() {
  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h1 className="text-7xl">404 Not Found</h1>
      <h3 className="text-2xl mb-5">We couldn&apos;t find the movie you looking for!</h3>
      <Link
        href="/"
        className="text-xl font-bold bg-slate-800 main-color-red px-4 py-2 rounded-md uppercase border border-slate-500 hover:bg-slate-900 duration-200">
        Go home
      </Link>
    </div>
  );
}

export default Movie404;
