import React from 'react'
import {FaInstagram, FaEnvelope} from 'react-icons/fa'

export const Header = () => {
  return (
    <header className='flex justify-between items-center px-8 bg-antracite'>
        <p className='text-4xl text-bonewhite font-synemono font-bold px-8 tracking-wider'>TACK</p>

        <div className='flex gap-4 px-10 mb-6'>
            <p className='text-2xl mt-6 text-bonewhite font-synemono'>
                Heb je honger? Laat van je horen
            </p>
            <a
                href='https://www.instagram.com/goretti__tack?igsh=MWE0d2R6ZXQ2MHYzOA=='
            >
                <FaInstagram size={32} className='mt-6 text-bonewhite'/>
            </a>

            <a
                href='mailto:tackgoretti@gmail.com'
            >
                <FaEnvelope size={32} className='mt-6 text-bonewhite'/>
            </a>
        </div>
    </header>
  )
}

export default Header;