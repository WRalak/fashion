

import Sidebar from "../Components/Sidebar";

const ShopOwnerDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen flex justify-center items-center p-5 transition-all md:ml-64">
        <div className="bg-white shadow-md p-10 rounded-md w-full max-w-2xl">
          <h1 className="text-2xl font-bold text-center">Welcome to Your Shop Dashboard</h1>
          <p className="text-center text-gray-600 mt-2">
            Manage your products, orders, customers, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopOwnerDashboard;

