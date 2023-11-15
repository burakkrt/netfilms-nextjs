'use client';
import React from 'react';
import Link from 'next/link';

function Movie404() {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <h1 className="text-7xl mb-3 text-red-600">Upps ! Error</h1>
      <h3 className="text-2xl mb-5">An error has occurred. Sorry for that! </h3>
      <Link
        href="/"
        className="text-xl font-bold bg-slate-800 main-color-red px-4 py-2 rounded-md uppercase border border-slate-500 hover:bg-slate-900 duration-200">
        Go home
      </Link>
    </div>
  );
}

export default Movie404;
