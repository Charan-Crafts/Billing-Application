const OrderListTable = () => {
    return (
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-md mt-3">
            <table className="w-full border-collapse bg-white text-xl text-gray-500">
                <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left">
                        <th className="p-3">Order ID</th>
                        <th className="p-3">Customer</th>
                        <th className="p-3">Amount</th>
                        <th className="p-3">Payment</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Time</th>
                    </tr>
                </thead>

                <tbody>
                    {/* You can map table rows here later */}
                </tbody>
            </table>
        </div>
    )
}

export default OrderListTable;
