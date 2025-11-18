import { Clock } from "lucide-react";
import OrderListTable from "./OrderListTable";
const RecentOrders = () => {

    return (
        <div className="flex flex-col">
            <div className="w-full bg-gray-300 p-2 flex flex-row items-center gap-4 shadow-sm rounded-xl">
                <Clock size={48}  className=""/>
                <h1 className="text-2xl font-bold ">Recent Orders</h1>
            </div>
            <div>
                <OrderListTable/>
            </div>
        </div>

    )
}

export default RecentOrders;