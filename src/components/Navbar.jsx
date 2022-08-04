import React from 'react'
import { FaGithubSquare, FaDev, FaEnvelopeSquare } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content w-full flex flex-row justify-start">
      <h1 className="pr-0">Matt Miller | Programmer</h1>
      <h2 className='pl-5'><a href="mailto:matt@mattmiller.dev">matt@mattmiller.dev</a></h2>
      <a className="md:text-[4vw] lg:text-[2vw] text-xl ml-auto" href="https://github.com/MegaMattMiller"><FaGithubSquare /></a>
      <a className="md:text-[4vw] lg:text-[2vw] tex0t-xl ml-0" href="https://dev.to/megamattmiller"><FaDev /></a>
      <a className="md:text-[4vw] lg:text-[2vw] tex0t-xl ml-0" href="mailto:matt@mattmiller.dev"><FaEnvelopeSquare /></a>
    </div>
  )
}

export default Navbar