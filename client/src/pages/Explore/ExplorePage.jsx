import CartItems from "./ExploreComponents/CartItems";
import CartSummary from "./ExploreComponents/CartSummary";
import Categories from "./ExploreComponents/Categories"
import CustomerDetails from "./ExploreComponents/CustomerDetails";
import ExploreItems from "./ExploreComponents/ExploreItems"
const ExplorePage = () => {
    return (
        <div>
            <div className="flex flex-row gap-4 mt-4 p-3">
                {/* Display the all categories form  */}
                <div className="min-h-screen w-8/12 bg-gray-50 border-2 border-gray-200 shadow-md p-4 gap-3 flex flex-col">
                    <Categories/>
                    <ExploreItems/>
                </div>

                {/* Display all the category details in right side */}
                <div className="min-h-screen w-4/12 bg-gray-50 shadow-md p-4 border-2 border-gray-200 flex flex-col items-center">
                    <CustomerDetails/>
                    <CartItems/>
                    <CartSummary/>
                </div>
            </div>
        </div>
    )
}

export default ExplorePage;