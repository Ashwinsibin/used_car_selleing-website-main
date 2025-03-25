import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai"; // Import Plus icon from React Icons
import "./SellCar.css"; // Import CSS file

const SellCar = () => {
  const [carData, setCarData] = useState({
    name: "",
    price: "",
    phone: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 2 * 1024 * 1024) {  // 2MB limit
      alert("File size should be less than 2MB");
      return;
    }  
    setCarData((prevData) => ({ ...prevData, image: URL.createObjectURL(file) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!carData.name || !carData.price || !carData.phone || !carData.image) {
      alert("Please fill all fields and upload an image.");
      return;
    }
    alert("Car listed successfully!");
    console.log(carData);
  };

  return (
    <div className="sell-car-container">
      <h2>Sell Your Car</h2>
      <form onSubmit={handleSubmit} className="sell-car-form">
        <div className="horizontal">
      <label className="file-input">
  {carData.image ? (
    <img
      src={carData.image}
      alt="Car Preview"
      className="preview-image"
      onClick={() => document.getElementById("file-upload").click()}  // Click to change image
    />
  ) : (
    <>
      <input
        className="upload-button"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}  // Hide default input
        id="file-upload"
      />
      <button
        type="button"
        className="icon-button"
        onClick={() => document.getElementById("file-upload").click()}  // Trigger file input click
      >
        <AiOutlinePlus size={24} />
      </button>
    </>
  )}
</label>

<div className="vertical">
        {/* Car Name */}
        <input
          type="text"
          name="name"
          placeholder="Car Name"
          value={carData.name}
          onChange={handleChange}
          required
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={carData.price}
          onChange={handleChange}
          required
        />

        {/* Phone Number */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={carData.phone}
          onChange={handleChange}
          required
        />
         {/* Location */}
         <input
          type="text"
          name="location"
          placeholder="location"
          value={carData.location}
          onChange={handleChange}
          required
        />
</div></div>
        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={carData.description}
          onChange={handleChange}
          required
        ></textarea>

        {/* Submit Button */}
        <button type="submit" className="submit-button">List Car</button>
      </form>
    </div>
  );
};

export default SellCar;
