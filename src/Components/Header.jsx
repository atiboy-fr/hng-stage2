import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

function Header() {
  return (
    <div className="w-11/12 m-auto sm:w-full sm:m-0">
      <div className="hidden sm:flex">
        <div className="bg-black text-white text-sm w-5/6 p-2 pl-6">
          <p>Welcome to Baron Autoparts</p>
        </div>
        <div className="bg-[#CE1515] w-1/5 text-white p-2 text-sm flex justify-center gap-5 items-center">
        <FontAwesomeIcon icon={faUser} />
        <p>My Account</p>
        <FontAwesomeIcon icon={faCaretDown} size="xs" style={{color: "#ffffff",}} />
        </div>
      </div>
        <header className="flex justify-around items-center gap-10 mb-5 sm:block">
            <div className='flex items-center'>
                <img src={'images/bikelogo.png'} alt="logo" className='w-20 sm:w-36'/>
                <h2 className='font-semibold sm:text-3xl'><span className='font-bold'>BARON</span> AUTOPARTS</h2>
            </div>
            <FontAwesomeIcon icon={faBars} className="sm:hidden" />
        </header>
    </div>
  )
}

export default Header