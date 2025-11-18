import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
            <div className="flex items-center gap-3">
                <img src="https://i.pinimg.com/736x/4d/b6/b1/4db6b11c8229cf5412236dfd62b87c62.jpg"alt="logo" className="w-10 h-10 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out" />
                <h1 className="text-2xl font-bold cursor-pointer hover:text-gray-500 hover:scale-105 transition-all duration-300 ease-in-out">Billing Application</h1>
            </div>
            <div className="flex items-center gap-6">
                <Link to="/" className="text-black-500 hover:text-gray-700 hover:scale-105 transition-all duration-300  font-semibold text-xl ">Dashboard</Link>
                <Link to="/explore" className="text-black-500 hover:text-gray-700 hover:scale-105 transition-all duration-300  font-semibold text-xl ">Explore</Link>
                <Link to="/manage-products" className="text-black-500 hover:text-gray-700 hover:scale-105 transition-all duration-300  font-semibold text-xl ">Manage Products</Link>
                <Link to="/manage-categories" className="text-black-500 hover:text-gray-700 hover:scale-105 transition-all duration-300  font-semibold text-xl ">Manage Categories</Link>
                <Link to="/manage-orders" className="text-black-500 hover:text-gray-700 hover:scale-105 transition-all duration-300  font-semibold text-xl ">Manage Orders</Link>
                <Link to="/manage-users" className="text-black-500 hover:text-gray-700 hover:scale-105 transition-all duration-300  font-semibold text-xl ">Manage Users</Link>
                
            </div>
        </nav>
    )
}

export default Navbar