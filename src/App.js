import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import data from "./db/data";
import Recommended from "./Recommended/Recommended";
import SideBar from "./SideBar/SideBar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Combine filtering logic for query and category
  const filteredData = data.filter((product) => {
    const matchesQuery = query
      ? product.title.toLowerCase().includes(query.toLowerCase())
      : true;
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory ||
        product.color === selectedCategory ||
        product.company === selectedCategory ||
        product.newPrice === selectedCategory ||
        product.title === selectedCategory
      : true;

    return matchesQuery && matchesCategory;
  });

  // Debugging output to ensure filtered data is as expected
  console.log("Filtered Products:", filteredData);

  const result = filteredData.map(
    ({ id, img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()*10} // Ensure each product has a unique 'id' property
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    )
  );

  return (
    <>
      <SideBar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
