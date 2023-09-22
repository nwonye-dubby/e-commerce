import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

export const Navbar = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showBurger, setShowBurger] = useState(false);
  const onBurger = () => {
    setShowBurger((prev) => !prev);
  };

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onBurger(); // Close the modal after selecting a category
  };

  return (
    <div className="navbar">
      <div
        className={`menu-button ${showBurger ? "hidden" : ""}`}
        onClick={onBurger}
      >
        <FontAwesomeIcon icon={faBars} size="2x" className="white-icon" />
      </div>
      {showBurger && (
        <div className={`category-modal ${showBurger ? "active" : ""}`}>
          <button onClick={() => handleCategorySelect("All")}>All</button>
          <button onClick={() => handleCategorySelect("Clothes")}>
            Clothes
          </button>
          <button onClick={() => handleCategorySelect("Shoes")}>Shoes</button>
          <button onClick={() => handleCategorySelect("Phones and Gadgets")}>
            Phones and Gadgets
          </button>
        </div>
      )}
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
