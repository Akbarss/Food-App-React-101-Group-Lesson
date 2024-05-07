import axios from "axios"; // Assuming you're using axios for API requests
import React, { useEffect, useState } from "react";

const About = () => {
  const [stores, setStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  console.log(stores);

  useEffect(() => {
    // Fetch data from API when component mounts
    axios
      .get(
        "https://api.express24.uz/client/v5/catalog/stores?latitude=41.311191&longitude=69.279776&limit=20&rootCategoryId=2"
      )
      .then((response) => {
        setStores(response.data.list);
        setFilteredStores(response.data.list); // Set initial filtered data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to handle subcategory filter
  const handleSubcategoryFilter = (subcategoryId) => {
    if (subcategoryId === selectedSubcategory) {
      // If the same subcategory is selected again, reset the filter
      setSelectedSubcategory(null);
      setFilteredStores(stores); // Reset to original data
    } else {
      // Filter stores based on selected subcategory
      const filtered = stores.filter((store) =>
        store.subCategories.some((subcategory) => subcategory.id === subcategoryId)
      );
      setFilteredStores(filtered);
      setSelectedSubcategory(subcategoryId);
    }
  };

  return (
    <div>
      {/* Render subcategory filter buttons */}
      {stores.length > 0 && (
        <div>
          <p>Filter by Subcategory:</p>
          {stores[2].subCategories.map((subcategory) => (
            <button key={subcategory.id} onClick={() => handleSubcategoryFilter(subcategory.id)}>
              {subcategory.name}
            </button>
          ))}
          <button onClick={() => handleSubcategoryFilter(null)}>Clear Filter</button>
        </div>
      )}

      {/* Render filtered stores */}
      <ul>
        {filteredStores.map((store) => (
          <li key={store.id}>
            <img src={store.logo} alt={store.name} />
            <h3>{store.name}</h3>
            <p>Rating: {store.reviews.average}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
