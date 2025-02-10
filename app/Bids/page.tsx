

import Sidebar from "../Components/Sidebar";

const BidsPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-5 w-full">
        <h1 className="text-2xl font-bold">Bids</h1>
        <p className="mt-2">Manage customer bids on products.</p>
      </div>
    </div>
  );
};

export default BidsPage;
