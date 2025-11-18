import Navbar from '../components/Navbar'
import { IndianRupee, ShoppingCart } from 'lucide-react'
import RecentOrders from '../components/RecentOrders'
const Dashboard = () => {

    return (
        <>

            <div className='flex flex-col h-screen p-4 gap-4'>
                <div className='flex flex-row items-center justify-evenly gap-4'>
                    {/* Total sales */}
                    <div className='flex flex-row items-center justify-evenly h-full w-1/2 border-r-2 border-gray-300 p-4 gap-4 shadow-md'>
                        <IndianRupee size={48} className='bg-gray-200 rounded-full p-2' />
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-2xl font-bold'>Today Total Sales</h1>
                            <h2 className='text-gray-500 text-2xl font-bold'>0.00</h2>
                        </div>


                    </div>

                    {/* Total orders */}
                    <div className='flex flex-row items-center justify-evenly h-full w-1/2 border-l-2 border-gray-300 p-4 gap-4 shadow-md'>
                        <ShoppingCart size={48} className='bg-gray-200 rounded-full p-2' />
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-2xl font-bold'>Today Total Orders</h1>
                            <h2 className='text-gray-500 text-2xl font-bold'>0</h2>
                        </div>
                    </div>
                </div>
                <RecentOrders />
            </div>
           
        </>
    )
}

export default Dashboard