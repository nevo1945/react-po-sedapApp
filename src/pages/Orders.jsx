import { useState } from 'react';
import orders from '../Data/orders.json';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

export default function Orders() {
    const [filters, setFilters] = useState({
        searchTerm: "",
        selectedStatus: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const statusOptions = [...new Set(orders.map(o => o.status))];
    const _searchTerm = filters.searchTerm.toLowerCase();

    const filteredOrders = orders.filter((o) => {
        const idMatch = o.id.toLowerCase().includes(_searchTerm);
        const customerMatch = o.customer.toLowerCase().includes(_searchTerm);
        const statusMatch = filters.selectedStatus ? o.status === filters.selectedStatus : true;

        return (idMatch || customerMatch) && statusMatch;
    });

    const statusColor = (status) => {
        switch (status) {
            case "Completed":
                return "text-green-600 font-semibold";
            case "Pending":
                return "text-yellow-500 font-semibold";
            case "Cancelled":
                return "text-red-500 font-semibold";
            default:
                return "text-gray-600";
        }
    };

    return (
        <div className="p-6 md:p-8 min-h-screen bg-gray-50">
            <PageHeader title="Orders" breadcrumb={["Dashboard", "Orders"]}>
                <Link
                    to="/AddOrders"
                    className="inline-flex items-center bg-hijau text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition ease-in-out duration-150"
                >
                    Add Order
                </Link>
            </PageHeader>

            <div className="mt-6 mb-6 flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    name="searchTerm"
                    placeholder="Search by order ID or customer name..."
                    value={filters.searchTerm}
                    onChange={handleChange}
                    className="flex-grow p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

                <select
                    name="selectedStatus"
                    value={filters.selectedStatus}
                    onChange={handleChange}
                    className="w-full md:w-auto p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="">All Statuses</option>
                    {statusOptions.map(status => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 whitespace-nowrap">Order ID</th>
                                <th className="px-6 py-3 whitespace-nowrap">Customer</th>
                                <th className="px-6 py-3 whitespace-nowrap">Status</th>
                                <th className="px-6 py-3 whitespace-nowrap">Total ($)</th>
                                <th className="px-6 py-3 whitespace-nowrap">Order Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.length > 0 ? (
                                filteredOrders.map((o) => (
                                    <tr key={o.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4">{o.id}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{o.customer}</td>
                                        <td className={`px-6 py-4 ${statusColor(o.status)}`}>{o.status}</td>
                                        <td className="px-6 py-4">${o.total.toFixed(2)}</td>
                                        <td className="px-6 py-4">{o.date}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-10 px-6 text-gray-500">
                                        No matching orders found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
