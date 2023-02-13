import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { IoLogoYoutube, IoIosSearch } from 'react-icons/io';
import { VideosSearchParams } from 'models/videos/VideoModel';

const Navbar = () => {
  const params = useParams<VideosSearchParams>();
  const [searchWord, setSearchWord] = useState(params.searchWord ?? '');
  const navigate = useNavigate();

  const handleSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.SyntheticEvent<HTMLButtonElement, Event>) => {
    e.preventDefault();
    navigate(`/videos/${searchWord}`);
  };

  useEffect(() => {
    setSearchWord(params.searchWord ?? '');
  }, [params.searchWord]);

  return (
    <nav className='flex pt-5 pb-5 gap-2 mb-5 text-xl border-b border-gray-700'>
      <Link to='/' className='flex items-center cursor-pointer'>
        <IoLogoYoutube className='text-purple-800 mr-2 text-3xl' />
        <span className=' text-white font-bold hidden sm:block'>Youtube Clone</span>
      </Link>
      <form onSubmit={handleSubmit} className='flex-auto flex justify-center'>
        <input
          type='text'
          className='w-5/6 bg-black text-purple-200 p-2 border border-purple-900 md:w-7/12 focus:outline-none'
          placeholder='search...'
          value={searchWord}
          onChange={handleSearchWordChange}
        />
        <button
          type='submit'
          className='flex justify-center items-center text-white p-3 bg-purple-900 hover:bg-purple-800'>
          <IoIosSearch />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
