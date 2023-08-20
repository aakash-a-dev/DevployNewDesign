const Navbar = () => {
  return (
    
<nav className="font-custom bg-[#7562ab] fixed w-full z-20 top-0 left-0 border-b-2 border-black">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Devploy.tech</span>
  <div className="flex md:order-2">
      <button type="button" className="font-custom text-[#2a2a2a] bg-[#fbe20c] border-2 border-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0">GET NOTES</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 " aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default Navbar