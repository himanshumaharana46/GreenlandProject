import React from 'react';

const ViewLands = () => {
  const dummyLands = [
    { id: 1, title: "Farm Land", price: "₹5,00,000" },
    { id: 2, title: "Residential Plot", price: "₹8,50,000" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Lands</h1>
      <table className="w-full bg-white text-black rounded overflow-hidden">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">Price</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyLands.map((land) => (
            <tr key={land.id} className="text-center border-b">
              <td className="p-2">{land.title}</td>
              <td className="p-2">{land.price}</td>
              <td className="p-2 space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-white">Edit</button>
                <button className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-white">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewLands;
