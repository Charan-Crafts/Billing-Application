import { ShoppingCart } from "lucide-react";
import OrdersTable from "./OrdersTable";

const ManageOrders = () => {
  return (
    <div className="flex flex-row gap-4 mt-4 p-3">

      {/* Main Section */}
      <div className="min-h-screen w-full bg-white border border-gray-200 shadow-md p-6 rounded-xl">
        
        {/* Header */}
        <div className="flex items-center gap-3 bg-gray-200 p-3 rounded-lg border border-gray-300">
          <ShoppingCart size={40} className="text-black-600 " />
          <h1 className="text-2xl font-semibold text-gray-700">Manage Orders</h1>
        </div>

        {/* Table Section */}
        <div className="mt-5">
          <OrdersTable />
        </div>
      </div>

      

    </div>
  );
};

export default ManageOrders;
