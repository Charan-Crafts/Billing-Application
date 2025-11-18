import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { addCategory } from "../../../redux/slices/categorySlice";

const CategoryForm = () => {

    const [categoryName, setCategoryName] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {

        e.preventDefault();

        // Build a multipart/form-data body that matches the Spring controller:
        // - a part named "category" containing JSON for CategoryRequestDTO
        // - a part named "image" containing the file
        const categoryPayload = {
            categoryName,
            description
        };

        const formData = new FormData();
        // Use a Blob with application/json so Spring's @RequestPart("category") can parse it
        formData.append("category", new Blob([JSON.stringify(categoryPayload)], { type: "application/json" }));
        if (imageFile) formData.append("image", imageFile);

        // Dispatch addCategory action with formData
        dispatch(addCategory(formData));

        // Clear the form fields after submission
        setCategoryName("");
        setDescription("");
        setImageFile(null);

    }

    return (
        <div className="w-full max-w-lg mx-auto bg-white shadow-md p-6 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Category</h2>

            <form className="flex flex-col gap-5" onSubmit={(e) => handleFormSubmit(e)}>

                {/* Image Upload */}
                <div className="flex flex-col gap-1">
                    <label className="text-gray-700 font-medium">Upload Image</label>
                    <input
                        type="file"
                        className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 
                         focus:outline-none focus:ring-2 focus:ring-black-300" onChange={(e) => setImageFile(e.target.files[0])}
                    />
                </div>

                {/* Category Name */}
                <div className="flex flex-col gap-1">
                    <label className="text-gray-700 font-medium">Category Name</label>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Enter category name"
                        className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 
                         focus:outline-none focus:ring-2 focus:ring-black-300"

                        value={categoryName} onChange={(e) => setCategoryName(e.target.value)}
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1">
                    <label className="text-gray-700 font-medium">Description</label>
                    <textarea
                        rows={4}
                        placeholder="Write a short description..."
                        className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 
                         resize-none focus:outline-none focus:ring-2 focus:ring-black-300"
                        value={description} onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="mt-2 bg-black hover:bg-gray-500 cursor-pointer text-white font-medium py-2 rounded-lg transition-all shadow-md"
                >
                    Add Category
                </button>
            </form>
        </div>
    );
};

export default CategoryForm;
