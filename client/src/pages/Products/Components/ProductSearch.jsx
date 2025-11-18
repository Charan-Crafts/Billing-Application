import { Search } from "lucide-react";

const ProductSearch = () => {

    return (
        <>
            <div className="w-full">
                <div className="relative w-full">

                    {/* Search Icon */}
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

                    {/* Input Field */}
                    <input
                        type="text"
                        name="searchUser"
                        placeholder="Search by keyword"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-black-200 
                     focus:border-black-500 transition-all"
                    />

                </div>
            </div>
        </>
    )
}

export default ProductSearch;