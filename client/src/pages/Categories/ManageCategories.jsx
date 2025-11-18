import CategoryForm from "./CategoryComponents/CategoryForm";
import CategoryItem from "./CategoryComponents/CategoryItem";
import CategorySearch from "./CategoryComponents/CategorySearch";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCategories } from "../../redux/slices/categorySlice";
const ManageCategories = () => {

    const { categories, loading } = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        if ((!categories || categories.length === 0) && !loading) {
            dispatch(getCategories());
        }
    }, [dispatch, categories, loading]);

    console.log(categories);


    return (
        <div className="flex flex-row gap-4 mt-4 p-3">
            {/* Display the all categories form  */}
            <div className="min-h-screen w-8/12 bg-gray-50 border-2 border-gray-200 shadow-md p-4">
                <CategoryForm />
            </div>

            {/* Display all the category details in right side */}
            <div className="min-h-screen w-4/12 bg-gray-50 shadow-md p-4 border-2 border-gray-200">
                <CategorySearch />
                <div>
                    {
                        categories.length > 0 ? (
                            categories.map((category) => (
                                <CategoryItem key={category.categoryId} category={category} />
                            ))
                        ) : (
                            <p className="text-xl">No categories found.</p>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default ManageCategories;