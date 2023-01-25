import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

function Nav() {
  return(
    <main className="bg-emerald-900 text-gray-400 font-serif">
        <section>
          <nav className='py-5 flex justify-between'>
            <h1 className='text-l'>Corbo Customs</h1>
            <ul className='flex space-x-3'>
              <li></li>
              <li className='hover:text-lime-400 ease-in duration-300'><Link className='px-2 bg-gradient-to-br from-lime-700 rounded ' to='/about'>About</Link></li>
              <li className='hover:text-lime-400 ease-in duration-300'><Link className='px-2 bg-gradient-to-br from-lime-700 rounded' to='/projects'>Projects</Link></li>
              <li className='hover:text-lime-400 ease-in duration-300'><Link className='px-2 bg-gradient-to-br from-lime-700 rounded' to='/resume'>Resume</Link></li>
              <li className='hover:text-lime-400 ease-in duration-300'><Link className='px-2 bg-gradient-to-br from-lime-700 rounded' to='/contact'>Contact</Link></li>
            </ul>
          </nav>
          

        </section>
      </main>
  )
}

export default Nav