import CategoryForm from "./CategoryComponents/CategoryForm";
import CategorySearch from "./CategoryComponents/CategorySearch";
const ManageCategories = () => {

    return(
        <div className="flex flex-row gap-4 mt-4 p-3">
            {/* Display the all categories form  */}
            <div className="min-h-screen w-8/12 bg-gray-50 border-2 border-gray-200 shadow-md p-4">
                <CategoryForm/>
            </div>

            {/* Display all the category details in right side */}
            <div className="min-h-screen w-4/12 bg-gray-50 shadow-md p-4 border-2 border-gray-200">
                <CategorySearch/>
            </div>
        </div>
    )
}

export default ManageCategories;