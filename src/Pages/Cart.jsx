/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Header from "../Components/Header";
import { Link } from 'react-router-dom'
import Footer from "../Components/Footer";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from "@fortawesome/free-solid-svg-icons";


function Cart({ products }) {
 let total = 0
 products.map(p => total+= parseInt(p.price))


  return (
  <div className="bg-[#F4F4F4]">
      <Header />
    <div className="w-11/12 m-auto">
    <div className='flex gap-32 items-center mb-5 sm:gap-0'>
      <Link to={'/'}>
         <FontAwesomeIcon icon={faChevronLeft} size="lg" style={{color: "#121212",}} className="sm:hidden"/>
      </Link>
      <p className='text-xl font-bold sm:hidden'>My Cart</p>
    <div className='hidden sm:flex justify-between items-center w-4/5 gap-7 lg:w-11/12'>
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
     <FontAwesomeIcon icon={faCartShopping} size='xl' style={{color: "#121212",}} className="hover:scale-150" />
     </Link>
     <div className='flex justify-between items-center border border-solid border-[#00000071] bg-[#F4F4F4] p-1 rounded-lg'>
       <input type="search" name="search" id="search" placeholder='Search' className='outline-none bg-inherit' />
       <FontAwesomeIcon icon={faSearch} size='sm' style={{color: "#00000071",}} />
     </div>
     </div>
    </div>
    </div>
    <div className="hidden sm:block text-4xl font-bold mb-5"><h2>My Cart</h2></div>

    <div className="hidden sm:flex justify-between lg:w-[89%] gap-5 items-center mb-[10px] text-center sm:w-[82%]">
      <p>PRODUCT</p>
      <p className="lg:w-[290px] sm:w-[270px]">DETAILS</p>
      <p>QUANTITY</p>
      <p>PRICE</p>
      
    </div>

    {products.map((product) => (
    <div key={product.key} className="hidden sm:flex justify-center gap-10 items-center border-b border-solid border-black mb-5">
    <div className="flex justify-between w-[90%] items-center mb-5 pt-8">
      <img src={product.image} alt="bike" className="lg:w-28 sm:w-24"/>

      <div className="text-start w-[280px]">
        <div className="flex justify-between items-center w-44 text-sm mb-2">
          <p>Name:</p>
          <p>{product.name}</p>
        </div>

        <div className="flex justify-between gap-4 text-sm mb-2">
          <p>Description:</p>
          <p>{product.model}</p>
        </div>

        <div className="flex justify-between items-center w-40 text-sm mb-2">
          <p>Product no:</p>
          <p>123456789</p>
        </div>
      </div>

      <div>
        <select name="quantity" id="quantity" className='border border-solid border-[#000000] text-sm p-1 font-semibold outline-none w-20'>
          <option value="1">Qty 1</option>
          <option value="2">Qty 2</option>
          <option value="3">Qty 3</option>
          <option value="4">Qty 4</option>
          <option value="5">Qty 5</option>
          <option value="6">Qty 6</option>
          <option value="7">Qty 7</option>
          <option value="8">Qty 8</option>
          <option value="9">Qty 9</option>
        </select>
      </div>

      <div>
        <p className="lg:text-3xl text-[#CE1515] font-bold sm:text-xl">${product.price}</p>
      </div>
      </div>

      <div className="flex justify-around gap-2 p-1 items-center border border-solid border-[#CE1515] bg-[#CE1515] rounded-lg">
      <FontAwesomeIcon icon={faTrash} size='sm' style={{color: "ffffff",}}/>
      <p className="text-white text-sm">REMOVE</p>
      </div>
    </div>
  ))}

      {products.map((product) => (
        <div key={product.key} className='border-b border-solid border-[#000000] mb-5 sm:hidden'>
        <div className='flex justify-between'>
          <img src={product.image} alt="bike" className='w-28 pb-2'/>
          <FontAwesomeIcon icon={faXmark} size='lg' style={{color: "#000000",}} />
        </div>
        <h3 className='text-lg font-bold pb-2'>{product.name}</h3>
        <p className='text-lg font-light w-56 pb-2'>{product.model}</p>
        <p className='text-sm pb-2'>123456789</p>
        <div className='flex justify-between items-center pb-6'>
          <select name="quantity" id="quantity" className='border border-solid border-[#000000] text-sm p-1 font-semibold outline-none'>
            <option value="1">Qty 1</option>
            <option value="2">Qty 2</option>
            <option value="3">Qty 3</option>
            <option value="4">Qty 4</option>
            <option value="5">Qty 5</option>
            <option value="6">Qty 6</option>
            <option value="7">Qty 7</option>
            <option value="8">Qty 8</option>
            <option value="9">Qty 9</option>
          </select>

          <h3 className='text-4xl text-[#CE1515] font-bold'>${product.price}</h3>
        </div>
      </div>

    



      
  ))}
    {total === 0 ? <h2 className="mb-5">There are no current products in cart go back to add products</h2> : 
      <div className="bg-[#DCDCDC] p-2 mb-5 sm:mt-10 sm:w-[600px] sm:m-auto">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold mb-4">Choose shipping method</p>
          <div className="flex gap-3 items-center mb-4">
            <input type="radio" name="shipping" id="" />
            <p className="text-sm">Regular Shipping <span className="font-extrabold">(5-7 days)</span></p>
          </div>
          <div className="flex gap-3 items-center mb-4">
            <input type="radio" name="shipping" id="" />
            <p className="text-sm">Express <span className="font-extrabold">(Next day delivery)</span></p>
          </div>
          <p className="text-xs font-bold mb-2">TOTAL</p>
        </div>

        <div className="text-right">
          <p className="mb-4 font-bold">Price</p>
          <p className="mb-4">Free</p>
          <p className="mb-4 font-bold">$15.99</p>
          <p className="font-bold text-[#CE1515] mb-2">${total}</p>
        </div>
      </div>
    </div>
    }
    {total === 0 ? '' : 
      <div>
        <div className="hidden sm:flex justify-center items-center gap-4">
        <Link to={'/'}>
          <button className="text-[#CE1515] border border-solid border-[#CE1515] bg-[#fff] w-36 p-2 text-center font-semibold rounded-lg mb-5 hover:bg-[#CE1515] hover:text-[#fff] sm:mt-7">RETURN</button>
        </Link>

        <Link to={'/checkout'}>
          <button className="text-[#ffffff] border border-solid border-[#CE1515] bg-[#CE1515] w-56 p-2 text-center font-semibold rounded-lg mb-5 sm:mt-7 hover:bg-white hover:text-[#CE1515]">PROCEED TO CHECKOUT</button>
        </Link>
        </div>

        <Link to={'/checkout'}>
        <button className="text-[#ffffff] border border-solid border-[#CE1515] bg-[#CE1515] w-56 p-2 text-center font-semibold rounded-lg mb-5 hover:bg-white hover:text-[#CE1515] sm:hidden">PROCEED TO CHECKOUT</button>
        </Link>

      </div>

    }
    </div>
    <Footer />
  </div>
  );
}

export default Cart;


