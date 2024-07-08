import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  return (
    <div className='bg-[#161616] p-4'>
        <div className='sm:border-b border-solid border-[#CCCCCC]'>
            <div className='flex gap-20 font-semibold border-b border-solid border-[#CCCCCC] mb-7 sm:items-start sm:justify-between lg:justify-around sm:border-none'>
                <div className='hidden sm:flex items-center'>
                    <img src={'images/bikelogo.png'} alt="logo" className='w-28 h-20' />
                    <h2 className='font-semibold text-xl text-white'><span className='font-bold'>BARON</span> AUTOPARTS</h2>
                </div>
                <div className='flex gap-20 font-semibold mb-2'>
                    <div>
                        <p className='text-sm text-[#CE1515] mb-7'>Products</p>
                        <p className='text-sm text-white mb-7'>Motorcycles</p>
                        <p className='text-sm text-white mb-7'>Tyres</p>
                        <p className='text-sm text-white mb-2'>Exhaust</p>
                    </div>
                    <div>
                        <p className='text-sm text-[#CE1515] mb-7'>Contact us</p>
                        <p className='text-sm text-white mb-7'>Blog</p>
                        <p className='text-sm text-white mb-7'>About us</p>
                    </div>
                </div>
            </div>

            <div className='hidden sm:flex justify-between items-center lg:justify-around lg:gap-20'>
            <div className='flex gap-2 mb-4'>
            <button className='flex items-center border border-solid border-white bg-black w-32 gap-1 rounded-md p-1'>
                <img src={'images/Vector.svg'} alt="playstore" />
                <div>
                    <p className='text-xs text-white text-left leading-3'>Get it on</p>
                    <p className='text-sm text-white font-semibold text-left leading-5'>Google Play</p>
                </div>
            </button>

            <button className='flex items-center border border-solid border-white bg-black w-32 gap-1 rounded-md p-1'>
                <img src={'images/white_Apple_Logo_768cf7ce21.svg.svg'} alt="Appstore" />
                <div>
                    <p className='text-xs text-white text-left leading-3 tracking-tighter'>Download on the</p>
                    <p className='text-lg text-white font-semibold text-left leading-5'>App Store</p>
                </div>
            </button>
        </div>


        <div className='flex items-center gap-4 mb-4'>
            <img src={'images/logo-instagram.svg'} alt="instagram" className='w-12' />
            <img src={'images/logo-facebook.svg'} alt="facebook" className='w-12' />
            <img src={'images/logo-linkedin.svg'} alt="linkedin" className='w-12' />
            <img src={'images/logo-twitter.svg'} alt="twitter" className='w-12' />
        </div>
        
    </div>
    </div>

        <div className='flex gap-2 mb-8 sm:hidden'>
            <button className='flex items-center border border-solid border-white bg-black w-32 gap-1 rounded-md p-1'>
                <img src={'images/Vector.svg'} alt="playstore" />
                <div>
                    <p className='text-xs text-white text-left leading-3'>Get it on</p>
                    <p className='text-sm text-white font-semibold text-left leading-5'>Google Play</p>
                </div>
            </button>

            <button className='flex items-center border border-solid border-white bg-black w-32 gap-1 rounded-md p-1'>
                <img src={'images/white_Apple_Logo_768cf7ce21.svg.svg'} alt="Appstore" />
                <div>
                    <p className='text-xs text-white text-left leading-3 tracking-tighter'>Download on the</p>
                    <p className='text-lg text-white font-semibold text-left leading-5'>App Store</p>
                </div>
            </button>
        </div>


        <div className='flex items-center gap-4 mb-8 sm:hidden'>
            <img src={'images/logo-instagram.svg'} alt="instagram" className='w-6' />
            <img src={'images/logo-facebook.svg'} alt="facebook" className='w-6' />
            <img src={'images/logo-linkedin.svg'} alt="linkedin" className='w-6' />
            <img src={'images/logo-twitter.svg'} alt="twitter" className='w-6' />
        </div>
        
        <div className='sm:mt-5 sm:text-center'>
            <p className='text-[#ffffffa6] underline'>Terms of service & Privacy policy</p>
        </div>


    

    </div>
  )
}

//<FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
//<FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
//<FontAwesomeIcon icon={faHeart} style={{color: "#000000",}} />

export default Footer