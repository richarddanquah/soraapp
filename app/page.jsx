"use client";

import { useState, useEffect } from "react";
import { sortByDate, sortByFilenameAsc, sortByFilenameDesc } from "./utils/sort";

export default function Home() {
  const [items, setItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    fetch('/api/Items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items); // Ensure you're accessing 'items' correctly from the API response
        setSortedItems(sortByDate(data.items));
      })
      .catch((err) => console.error("Fetch error: ", err));
  }, []);

  const handleSortChange = (sortOptions) => {
    console.log("Selected Sort Option: ", sortOptions);
    let sorted;
    if (sortOptions === 'date-asc') {
      sorted = sortByDate(items);
    } else if (sortOptions === 'filename-asc') {
      sorted = sortByFilenameAsc(items);
    } else {
      sorted = sortByFilenameDesc(items);
    }
    console.log("Sorted Items: ", sorted); // Logging to check sorted result
    if(sorted){
      setSortedItems([...sorted]); // Ensuring sorted items are spread into a new array
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sorted Items</h1>

      {/* Dropdown for sorting */}
      <div className="mb-4 flex justify-end">
        <select
          id="sort"
          onChange={(e) => handleSortChange(e.target.value)}
          className="border p-2 rounded bg-gray-100"
        >
          <option value="date-asc">Sort by created at</option>
          <option value="filename-asc">Sort by filename (Asc)</option>
          <option value="filename-desc">Sort by filename (Desc)</option>
        </select>
      </div>

      {/* Grid Layout for Items */}
      <ul className="grid grid-cols-3 gap-6">
        {sortedItems.map((item, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow-md bg-gray-50 text-center"
          >
            <p className="text-gray-700 font-semibold mb-2">
              {item.createdAt}
            </p>
            <p className="text-gray-900 font-bold">{item.filename}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
