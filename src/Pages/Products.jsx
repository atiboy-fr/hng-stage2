/* eslint-disable react/prop-types */
import Header from '../Components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


function Products({handleProducts}) {
  return (
    <div className='bg-[#F4F4F4]'>
        <Header />
        <div className='flex justify-between items-center w-11/12 m-auto mb-7'>
         <FontAwesomeIcon icon={faChevronLeft} size="lg" style={{color: "#121212",}} className='sm:hidden'/>
         <p className='text-xl font-bold sm:hidden'>Shop</p>
         <div className='hidden sm:flex justify-between items-center w-11/12 gap-5 lg:w-11/12'>
           <div className='sm:flex justify-around w-1/2 gap-9 items-center lg:text-xl lg:gap-12'>
            <p>HOME</p>
            <p className='text-white bg-black p-1 w-40 text-center'>MOTORCYCLE</p>
            <p>BIKES</p>
            <p>BRANDS</p>
          </div>

          <div className='flex justify-around items-center sm:gap-5 lg:gap-6'>
          <Link to={'/cart'}>
          <FontAwesomeIcon icon={faCartShopping} size='xl' style={{color: "#121212",}} className='hover:scale-150' />
          </Link>
          <div className='flex justify-between items-center border border-solid border-[#00000071] bg-[#F4F4F4] p-1 rounded-lg'>
            <input type="search" name="search" id="search" placeholder='Search' className='outline-none bg-inherit' />
            <FontAwesomeIcon icon={faSearch} size='sm' style={{color: "#00000071",}} />
          </div>
          </div>
         </div>
         <Link to="/cart">
         <FontAwesomeIcon icon={faCartShopping} size='lg' style={{color: "#121212",}} className='sm:hidden hover:scale-150'/>
         </Link>
        </div>

        <div className='w-11/12 m-auto mb-6'>
          <div className='sm:flex justify-between items-center w-11/12 mb-7'>
          <p className='hidden sm:block text-4xl font-bold'>AUTOMOBILES</p>
            <div className='flex justify-center items-center border border-solid border-[#CE1515] bg-[#CE1515] w-44 p-2 rounded-xl gap-2 mb-5'>
              <p className='text-white font-bold text-sm'>MOTORCYCLE</p>
              <div className='border-l pl-2 border-white'>
                <FontAwesomeIcon icon={faCaretDown} size="xl" style={{color: "#ffffff",}} />
              </div>
            </div>
          </div>

          <div className='flex justify-between flex-wrap gap-2 lg:justify-start lg:gap-10'>

            <div className='bg-white w-40 drop-shadow-lg p-3 rounded-md lg:w-64 md:w-44'>
              <img src={'images/bike1.png'} alt="bike 1" className='w-36 pb-3'/>
              <h2 className='text-[#CE1515] font-bold text-2xl pb-3'>$650</h2>
              <h3 className='text-black font-bold text-lg pb-3'>Automobile 1</h3>
              <p className='text-[#000000] text-sm font-light pb-3'>Suzuki special edition, black limited</p>
              <div className='flex justify-start items-center pb-5'>
              <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
              </div>
              <div className='sm:flex justify-between items-center'>
                <button className='flex justify-around items-center border border-solid border-[#CE1515] bg-[#CE1515] p-1 gap-3 rounded-lg hover:bg-[#ce1515d8] active:bg-[red]' onClick={() => handleProducts('650', 'Automobile 1', 'Suzuki special edition, black limited', 'images/bike1.png', 1)}>
                  <FontAwesomeIcon icon={faCartPlus} style={{color: "#ffffff",}} />
                  <p className='text-white text-sm'>Add To Cart</p>
                </button>
                <FontAwesomeIcon icon={faHeart} size='lg' style={{color: "#000000",}} className='hidden sm:block'/>
              </div>
            </div>

            <div className='bg-white w-40 drop-shadow-lg p-3 rounded-md lg:w-64 md:w-44'>
              <img src={'images/bike2.png'} alt="bike 1" className='w-36 pb-3'/>
              <h2 className='text-[#CE1515] font-bold text-2xl pb-3'>$380</h2>
              <h3 className='text-black font-bold text-lg pb-3'>Automobile 2</h3>
              <p className='text-[#000000] text-sm font-light pb-3'>Twin turbo exhuast with V6 engines</p>
              <div className='flex justify-start items-center pb-5'>
              <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
              </div>
            <div className='sm:flex justify-between items-center'>
              <button className='flex justify-around items-center border border-solid border-[#CE1515] bg-[#CE1515] p-1 gap-3 rounded-lg hover:bg-[#ce1515d8] active:bg-[red]' onClick={() => handleProducts('380', 'Automobile 2', 'Twin turbo exhuast with V6 engines', 'images/bike2.png', 2)}>
                <FontAwesomeIcon icon={faCartPlus} style={{color: "#ffffff",}} />
                <p className='text-white text-sm'>Add To Cart</p>
              </button>
              <FontAwesomeIcon icon={faHeart} size='lg' style={{color: "#000000",}} className='hidden sm:block'/>
            </div>
            </div>

            <div className='bg-white w-40 drop-shadow-lg p-3 rounded-md lg:w-64 md:w-44'>
              <img src={'images/bike3.png'} alt="bike 1" className='w-36 pb-3'/>
              <h2 className='text-[#CE1515] font-bold text-2xl pb-3'>$840</h2>
              <h3 className='text-black font-bold text-lg pb-3'>Automobile 3</h3>
              <p className='text-[#000000] text-sm font-light pb-3'>Retro bikers finish with rear view mirrors</p>
              <div className='flex justify-start items-center pb-3'>
              <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
              </div>
            <div className='sm:flex justify-between items-center'>
              <button className='flex justify-around items-center border border-solid border-[#CE1515] bg-[#CE1515] p-1 gap-3 rounded-lg hover:bg-[#ce1515d8] active:bg-[red]' onClick={() => handleProducts('840', 'Automobile 3', 'Retro bikers finish with rear view mirrors', 'images/bike3.png', 3)}>
                <FontAwesomeIcon icon={faCartPlus} style={{color: "#ffffff",}} />
                <p className='text-white text-sm'>Add To Cart</p>
              </button>
              <FontAwesomeIcon icon={faHeart} size='lg' style={{color: "#000000",}} className='hidden sm:block'/>
            </div>
            </div>

            <div className='bg-white w-40 drop-shadow-lg p-3 rounded-md lg:w-64 md:w-44'>
              <img src={'images/bike4.png'} alt="bike 1" className='w-36 pb-3'/>
              <h2 className='text-[#CE1515] font-bold text-2xl pb-3'>$935</h2>
              <h3 className='text-black font-bold text-lg pb-3'>Automobile 4</h3>
              <p className='text-[#000000] text-sm font-light pb-3'>Ducati special edition, yellow limited</p>
              <div className='flex justify-start items-center pb-5'>
              <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
              </div>
            <div className='sm:flex justify-between items-center'>
              <button className='flex justify-around items-center border border-solid border-[#CE1515] bg-[#CE1515] p-1 gap-3 rounded-lg hover:bg-[#ce1515d8] active:bg-[red]' onClick={() => handleProducts('935', 'Automobile 4', 'Ducati special edition, yellow limited', 'images/bike4.png', 4)}>
                <FontAwesomeIcon icon={faCartPlus} style={{color: "#ffffff",}} />
                <p className='text-white text-sm'>Add To Cart</p>
              </button>
              <FontAwesomeIcon icon={faHeart} size='lg' style={{color: "#000000",}} className='hidden sm:block'/>
            </div>
            </div>

            <div className='hidden sm:block bg-white w-40 drop-shadow-lg p-3 rounded-md lg:w-64 md:w-44'>
            <img src={'images/bike5.png'} alt="bike 1" className='w-36 pb-3'/>
            <h2 className='text-[#CE1515] font-bold text-2xl pb-3'>$500</h2>
            <h3 className='text-black font-bold text-lg pb-3'>Automobile 5</h3>
            <p className='text-[#000000] text-sm font-light pb-3'>Single exhuast motor, low version</p>
            <div className='flex justify-start items-center pb-5'>
            <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
            </div>
          <div className='sm:flex justify-between items-center'>
            <button className='flex justify-around items-center border border-solid border-[#CE1515] bg-[#CE1515] p-1 gap-3 rounded-lg hover:bg-[#ce1515d8] active:bg-[red]' onClick={() => handleProducts('500', 'Automobile 5', 'Single exhuast motor, low version', 'images/bike5.png', 5)}>
              <FontAwesomeIcon icon={faCartPlus} style={{color: "#ffffff",}} />
              <p className='text-white text-sm'>Add To Cart</p>
            </button>
            <FontAwesomeIcon icon={faHeart} size='lg' style={{color: "#000000",}} className='hidden sm:block'/>
          </div>
          </div>

          <div className='hidden sm:block bg-white w-40 drop-shadow-lg p-3 rounded-md lg:w-64 md:w-44'>
            <img src={'images/bike6.png'} alt="bike 1" className='w-36 pb-3'/>
            <h2 className='text-[#CE1515] font-bold text-2xl pb-3'>$260</h2>
            <h3 className='text-black font-bold text-lg pb-3'>Automobile 6</h3>
            <p className='text-[#000000] text-sm font-light pb-3'>Retro classique, Joanne special</p>
            <div className='flex justify-start items-center pb-5'>
            <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
            </div>
          <div className='sm:flex justify-between items-center'>
            <button className='flex justify-around items-center border border-solid border-[#CE1515] bg-[#CE1515] p-1 gap-3 rounded-lg hover:bg-[#ce1515d8] active:bg-[red]' onClick={() => handleProducts('260', 'Automobile 6', 'Retro classique, Joanne special', 'images/bike6.png', 6)}>
              <FontAwesomeIcon icon={faCartPlus} style={{color: "#ffffff",}} />
              <p className='text-white text-sm'>Add To Cart</p>
            </button>
            <FontAwesomeIcon icon={faHeart} size='lg' style={{color: "#000000",}} className='hidden sm:block'/>
          </div>
          </div>

          <div className='hidden sm:block bg-white w-40 drop-shadow-lg p-3 rounded-md lg:w-64 md:w-44'>
            <img src={'images/bike7.png'} alt="bike 1" className='w-36 pb-3'/>
            <h2 className='text-[#CE1515] font-bold text-2xl pb-3'>$999</h2>
            <h3 className='text-black font-bold text-lg pb-3'>Automobile 7</h3>
            <p className='text-[#000000] text-sm font-light pb-3'>Special edition, Della Rossa</p>
            <div className='flex justify-start items-center pb-5'>
            <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
            </div>
          <div className='sm:flex justify-between items-center'>
            <button className='flex justify-around items-center border border-solid border-[#CE1515] bg-[#CE1515] p-1 gap-3 rounded-lg hover:bg-[#ce1515d8] active:bg-[red]' onClick={() => handleProducts('999', 'Automobile 7', 'Special edition, Della Rossa', 'images/bike7.png', 7)}>
              <FontAwesomeIcon icon={faCartPlus} style={{color: "#ffffff",}} />
              <p className='text-white text-sm'>Add To Cart</p>
            </button>
            <FontAwesomeIcon icon={faHeart} size='lg' style={{color: "#000000",}} className='hidden sm:block'/>
          </div>
          </div>

          <div className='hidden sm:block bg-white w-40 drop-shadow-lg p-3 rounded-md lg:w-64 md:w-44'>
            <img src={'images/bike8.png'} alt="bike 1" className='w-36 pb-3'/>
            <h2 className='text-[#CE1515] font-bold text-2xl pb-3'>$105</h2>
            <h3 className='text-black font-bold text-lg pb-3'>Automobile 8</h3>
            <p className='text-[#000000] text-sm font-light pb-3'>Veronica Elangate, special series</p>
            <div className='flex justify-start items-center pb-5'>
            <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#CE1515",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#969aa2",}} />
            </div>
          <div className='sm:flex justify-between items-center'>
            <button className='flex justify-around items-center border border-solid border-[#CE1515] bg-[#CE1515] p-1 gap-3 rounded-lg hover:bg-[#ce1515d8] active:bg-[red]' onClick={() => handleProducts('105', 'Automobile 8', 'Veronica Elangate, special series', 'images/bike8.png', 8)}>
              <FontAwesomeIcon icon={faCartPlus} style={{color: "#ffffff",}} />
              <p className='text-white text-sm'>Add To Cart</p>
            </button>
            <FontAwesomeIcon icon={faHeart} size='lg' style={{color: "#000000",}} className='hidden sm:block'/>
          </div>
          </div>

            
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Products