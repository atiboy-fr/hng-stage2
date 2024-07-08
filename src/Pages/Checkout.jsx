import Header from '../Components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Components/Footer'

function Checkout() {
  return (
    <div className='bg-[#F4F4F4]'>
    <Header />
    <div className='flex justify-between items-center w-11/12 m-auto mb-7'>
    <Link to={'/cart'}>
      <FontAwesomeIcon icon={faChevronLeft} size="lg" style={{color: "#121212",}} className='sm:hidden'/>
    </Link>
    <p className='text-xl font-bold sm:hidden'>Checkout</p>
    <div className='hidden sm:flex justify-between items-center w-11/12 gap-7 lg:w-11/12'>
      <div className='sm:flex justify-around gap-9 items-center lg:text-xl lg:gap-12'>
      <Link to={'/'}>
       <p>HOME</p>
      </Link>
      <p className='text-white bg-black p-1 w-40 text-center'>MOTORCYCLE</p>
       <p>BIKES</p>
       <p>BRAND</p>
     </div>

     <div className='flex justify-around items-center sm:gap-3 lg:gap-6'>
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
    <p className='hidden sm:block text-3xl w-11/12 m-auto font-bold mb-5'>Checkout</p>

   <div className='w-11/12 m-auto mb-6'>

    <div className='flex justify-between items-center gap-10 mb-6'>
    <p className='font-bold sm:hidden'>Payment method</p>
    <div className='hidden sm:flex justify-between items-center gap-8 font-semibold'>
      <p className='text-[#CE1515] border-b border-solid border-[#CE1515] pb-1 '>Credit Card</p>
      <p>Bank Transfer</p>
      <p>USSD</p>
    </div>
    <div className='hidden sm:flex justify-between items-center'>
      <img src={'images/Mastercard - png 0.png'} alt="mastercard" className='w-28'/>
      <img src={'images/Visa Inc. - png.png'} alt="visa card"  className='w-20'/>
    </div>
     <div className='flex justify-center items-center border border-solid border-[#CE1515] bg-[#CE1515] w-32 p-[2px] rounded-xl gap-2 sm:hidden'>
       <p className='text-xs text-white font-bold'>DEBIT CARD</p>
       <div className='border-l pl-2 border-white'>
         <FontAwesomeIcon icon={faCaretDown} size="sm" style={{color: "#ffffff",}} />
       </div>
     </div>
    </div>

    <div>
      <div className='flex justify-between items-center font-bold mb-5 text-lg'>
        <p className='text-[#CE1515]'>Name</p>
        <p className='text-[#000000a9]'>Select Card type</p>
      </div>

      <div className='flex justify-between'>
        <div>
          <div className='flex justify-between items-center mb-5'>
            <input type="text" placeholder='Ladi-Akinyemi Kesioluwa' className='font-semibold bg-inherit outline-none border-b border-solid border-black p-1'/>
            <div className='flex justify-between items-center sm:hidden'>
              <img src={'images/Mastercard - png 0.png'} alt="mastercard" className='w-16'/>
              <img src={'images/Visa Inc. - png.png'} alt="visa card"  className='w-16'/>
            </div>
          </div>
          <div className='mb-5'>
            <p className='font-bold mb-3 text-[#000000a9] text-lg'>cardNo.</p>
            <input type="text" placeholder='1234 5678 9012 3456' className='bg-inherit outline-none border-b border-solid border-black p-1 text-lg'/>
          </div>
          <div className='mb-5'>
            <p className='font-bold mb-3 text-[#000000a9] text-lg'>Expiry Date</p>
            <input type="text" placeholder='mm/yyyy' className='bg-inherit outline-none border-b border-solid border-black p-1 text-lg'/>
          </div>
          <div className='mb-5'>
            <p className='font-bold mb-3 text-[#000000a9] text-lg'>CVV</p>
            <input type="text" placeholder='123' className='bg-inherit outline-none border-b border-solid border-black p-1 text-lg'/>
          </div>
        </div>

        <div className='hidden sm:block bg-[#5151518c] w-[450px] h-52 pl-8 pt-10 pb-10 rounded-md'>
        <div className='mb-10'>
        <p className='text-sm text-white pb-1'>Card Number</p>
        <p className='font-light'>1234 5678 9012 3456</p>
        </div>

        <div className='flex justify-between items-center w-4/5'>
        <div>
          <p className='text-sm text-white pb-1'>Card Holder's Name</p>
          <p className='font-light'>Ladi-Akinyemi Kesioluwa</p>
        </div>

        <div>
          <p className='text-sm text-white pb-1'>Expiry Date</p>
          <p className='font-light'>mm/yyyy</p>
        </div>
        </div>
        </div>

      </div>

      <h2 className='font-bold text-lg mb-2'>Billing Address</h2>
      <div className='flex items-center gap-5 mb-2'>
        <div className="flex gap-3 items-center mb-4">
          <input type="radio" name="billing" id="" />
          <p className="text-sm">Same as Delivery</p>
        </div>

        <div className="flex gap-3 items-center mb-4">
          <input type="radio" name="billing" id="" />
          <p className="text-sm">Use a different address</p>
        </div>
      </div>

      <div className='flex gap-4'>
        <Link to={'/cart'}><button className="hidden sm:block text-[#CE1515] border border-solid border-[#CE1515] bg-[#ffffff] w-24 p-2 text-center font-semibold rounded-lg mb-5 hover:bg-[#CE1515] hover:text-[#fff]">BACK</button></Link>
        <button className="text-[#ffffff] border border-solid border-[#CE1515] bg-[#CE1515] w-32 p-2 text-center font-semibold rounded-lg mb-5 hover:bg-white hover:text-[#CE1515]">CONTINUE</button>
      </div>
    </div>

   </div>
    <Footer />
    </div>
  )
}

export default Checkout