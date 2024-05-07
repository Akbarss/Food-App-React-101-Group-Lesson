import axios from "axios"; // Assuming you're using axios for API requests
import React, { useEffect, useState } from "react";

const Photos = () => {
  const [stores, setStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [allSubcategories, setAllSubcategories] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.express24.uz/client/v5/catalog/stores?latitude=41.311191&longitude=69.279776&limit=20&rootCategoryId=2"
      )
      .then((response) => {
        setStores(response.data.list);
        setFilteredStores(response.data.list);
        const subcategories = response.data.list.reduce((acc, store) => {
          store.subCategories.forEach((subcategory) => {
            if (!acc.some((item) => item.id === subcategory.id)) {
              acc.push(subcategory);
            }
          });
          return acc;
        }, []);
        setAllSubcategories(subcategories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSubcategoryFilter = (subcategoryId) => {
    if (subcategoryId === selectedSubcategory) {
      setSelectedSubcategory(null);
      setFilteredStores(stores);
    } else {
      const filtered = stores.filter((store) =>
        store.subCategories.some((subcategory) => subcategory.id === subcategoryId)
      );
      setFilteredStores(filtered);
      setSelectedSubcategory(subcategoryId);
    }
  };

  const clearSubcategoryFilter = () => {
    setSelectedSubcategory(null);
    setFilteredStores(stores);
  };

  return (
    <div>
      <div>
        <p>Filter by Subcategory:</p>
        <button onClick={clearSubcategoryFilter}>All Subcategories</button>
        {allSubcategories.map((subcategory) => (
          <button
            key={subcategory.id}
            onClick={() => handleSubcategoryFilter(subcategory.id)}
            className={selectedSubcategory === subcategory.id ? "selected" : ""}
          >
            {subcategory.name}
          </button>
        ))}
      </div>

      <ul>
        {filteredStores.map((store) => (
          <li key={store.id}>
            <img src={store.logo} alt={store.name} />
            <h3>{store.name}</h3>
            <p>Rating: {store.reviews.average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Photos;
