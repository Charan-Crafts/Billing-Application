import UserForm from "./UserComponents/UserForm";

import SearchUserComponent from "./UserComponents/SearchUserComponent";
const ManageUser = () => {
    return (
        <div>

            <div className="flex flex-row gap-4 mt-4 p-3">
                {/* Display the all categories form  */}
                <div className="min-h-screen w-8/12 bg-gray-50 border-2 border-gray-200 shadow-md p-4">
                    <UserForm />
                </div>

                {/* Display all the category details in right side */}
                <div className="min-h-screen w-4/12 bg-gray-50 shadow-md p-4 border-2 border-gray-200">
                    <div className="w-full">
                        <SearchUserComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageUser;  