import React, { useEffect } from 'react';
import { Trash } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCategory } from '../../../redux/slices/categorySlice';
const CategoryItem = ({ category }) => {

    const categories = useSelector((state) => state.categories);

    const dispatch = useDispatch();
    const { imageUrl, categoryName, description, createdAt } = category;

    const handleDelete = (categoryId) => {
        console.log("clicked delete for category id:", categoryId);

        dispatch(deleteCategory(categoryId));

        console.log("Deleted");

        console.log("categories", categories);
    }
    useEffect(() => {

    }, [categories])

    return (
        <div className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden mt-3">
            {/* Image - Small & Square */}
            <div className="w-full h-32 bg-gray-100 overflow-hidden">
                <img
                    src={imageUrl || 'https://via.placeholder.com/150/10b981/ffffff?text=Category'}
                    alt={categoryName}
                    className="w-full h-full object-cover "

                />
            </div>

            {/* Content - Compact */}
            <div className="p-3">
                <h3 className="font-bold text-sm text-gray-800 truncate">
                    {categoryName}
                </h3>

                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {description || 'No description'}
                </p>

                {/* Date + Badge */}
                <div className="flex items-center justify-between mt-3 text-xs">
                    <span className="text-gray-400">
                        {new Date(createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                        })}
                    </span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Active
                    </span>
                    <button className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-medium cursor-pointer hover:bg-red-200 transition-colors" onClick={() => handleDelete(category.categoryId)}>
                        <Trash />
                    </button>
                </div>
            </div>

            {/* Subtle hover glow */}
            <div className="absolute inset-0 rounded-lg ring-2 ring-green-400 opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity" />
        </div>
    );
};

export default CategoryItem;