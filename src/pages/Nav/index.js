import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);
  
  return(
<main className="bg-emerald-900 text-gray-400 font-serif">
        <section>
          <nav className='py-5 flex justify-between'>
            <h1 className='text-l'>Corbo Customs</h1>
            <ul className='flex space-x-3'>
              <li></li>
              <li className='hover:text-lime-400 ease-in duration-300'><a className='px-2 bg-gradient-to-br from-lime-700 rounded ' href='#about'>About</a></li>
              <li className='hover:text-lime-400 ease-in duration-300'><a className='px-2 bg-gradient-to-br from-lime-700 rounded' href='#projects'>Projects</a></li>
              <li className='hover:text-lime-400 ease-in duration-300'><a className='px-2 bg-gradient-to-br from-lime-700 rounded' href='#resume'>Resume</a></li>
              <li className='hover:text-lime-400 ease-in duration-300'><a className='px-2 bg-gradient-to-br from-lime-700 rounded' href='#contact'>Contact</a></li>
            </ul>
          </nav>
          

        </section>
      </main>
  )
}

export default Nav