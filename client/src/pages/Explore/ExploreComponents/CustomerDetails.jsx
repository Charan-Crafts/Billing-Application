const CustomerDetails = () => {
    return (
      <div className="bg-gray-100 w-full p-6 rounded-xl shadow-md">
        <form className="space-y-5">
          
          {/* Customer Name */}
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="customerName"
              className="text-sm font-semibold text-gray-700"
            >
              Customer Name
            </label>
            <input
              type="text"
              name="customerName"
              id="customerName"
              placeholder="Charan"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-300 outline-none transition-all"
            />
          </div>
  
          {/* Mobile Number */}
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="mobileNumber"
              className="text-sm font-semibold text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobileNumber"
              id="mobileNumber"
              placeholder="9876543210"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-300 outline-none transition-all"
            />
          </div>
        </form>
      </div>
    );
  };
  
  export default CustomerDetails;
  