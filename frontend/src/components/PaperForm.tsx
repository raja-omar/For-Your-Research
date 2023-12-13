// AddPaperForm.tsx

import React, { useState } from "react";

const AddPaperForm: React.FC<{ onSubmit: (paper: any) => void }> = ({
  onSubmit,
}) => {
  const [paper, setPaper] = useState({
    name: "",
    year: "",
    author: "",
    publication: "",
    areaOfResearch: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaper((prevPaper) => ({ ...prevPaper, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(paper);
    // You can also clear the form fields if needed
    setPaper({
      name: "",
      year: "",
      author: "",
      publication: "",
      areaOfResearch: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border border-black rounded-md shadow-md"
    >
      <div className="mb-4">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Record Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={paper.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-700"
            >
              Year of Publication
            </label>
            <input
              type="text"
              id="year"
              name="year"
              value={paper.year}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author/Inventor Name
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={paper.author}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="publication"
            className="block text-sm font-medium text-gray-700"
          >
            Publication company/website
          </label>
          <input
            type="text"
            id="publication"
            name="publication"
            value={paper.publication}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="areaOfResearch"
            className="block text-sm font-medium text-gray-700"
          >
            Field of record
          </label>
          <input
            type="text"
            id="areaOfResearch"
            name="areaOfResearch"
            value={paper.areaOfResearch}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
          />
        </div>
        {/* Add more fields as needed */}
      </div>
      <div className="flex justify-end items-center mt-4">
        {" "}
        {/* Added margin-top to create space */}
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300"
        >
          Add Record
        </button>
      </div>
    </form>
  );
};

export default AddPaperForm;
