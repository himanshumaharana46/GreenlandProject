import React from 'react';

const CreateLand = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create New Land</h1>
      <form className="space-y-4 text-black">
        <input type="text" placeholder="Title" className="w-full p-2 border rounded" />
        <textarea placeholder="Description" className="w-full p-2 border rounded"></textarea>
        <input type="number" placeholder="Price" className="w-full p-2 border rounded" />
        <input type="text" placeholder="State" className="w-full p-2 border rounded" />
        <input type="text" placeholder="City" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Area" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Pincode" className="w-full p-2 border rounded" />
        <input type="file" multiple className="w-full p-2" />
        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 py-2 rounded text-white">Submit</button>
      </form>
    </div>
  );
};

export default CreateLand;
