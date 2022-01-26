import { Link } from "react-router-dom"

const NavTodos = () => {
    return (
        <nav className="bg-white shadow-sm h-16 flex justify-between items-center text-lg font-serif px-5">
            <Link to = '/' className='text-blue-400 text-2xl'>Kobe's Todo App</Link>
            <div className="px-4 cursor-pointer md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6" fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
            </div>

            <div className="pr-8 md:block hidden">
                <Link className="p-4 text-blue-400 text-2xl" to = '/'>Home</Link>
            </div>
        </nav>
    )
}

export default NavTodos
