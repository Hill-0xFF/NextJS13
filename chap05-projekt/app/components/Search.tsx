'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setSearch('');
    router.push(`/${search}`);
  };

  return (
    <form
      onSubmit={ handleSubmit}
      className="w-50 flex justify-center md:justify-between"
    >
      <label htmlFor="SearchInput" />
      <input
        id='SearchInput'
        className='bg-white p-2 w-80 text-xl rounded-xl'
        type="text"
        value={search}
        onChange={(evt) => setSearch(evt.currentTarget.value)}
        placeholder='Search'
      />
      <button className='p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold' >
        🚀
      </button>
    </form>
  );
}
