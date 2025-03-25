import React, { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "../components/CarCard";
import "./Home.css";

const Home = ({ searchQuery, selectedModel }) => {
  const [cars, setCars] = useState([]);

  // Fetch car data from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/cars")
      .then(response => setCars(response.data))
      .catch(error => console.error("Error fetching cars:", error));
  }, []);

  // Filter cars based on search and selected model
  const filteredCars = cars.filter(car =>
    (!selectedModel || car.model === selectedModel) &&
    (car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.price.toString().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="home-container">
      <h2>Used Cars</h2>
      <div className="car-list">
        {filteredCars.length > 0 ? (
          filteredCars.map(car => <CarCard key={car.id} car={car} />)
        ) : (
          <p className="no-results">No cars found for "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
};

export default Home;
