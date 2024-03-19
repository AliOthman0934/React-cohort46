// Categories.js
import React from 'react';
import allCategories from "../fake-data/all-categories";

function Categories({ onSelectCategory }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <h1>Ecommerce</h1>
            <div className="collapse navbar-collapse custom-navbar" id="navbarNav">
                <ul className="navbar-nav ">
                    {allCategories.map((el, index) => (
                        <li className="nav-item" key={index}>
                            <button className="custom-button" onClick={() => onSelectCategory(el)}>{el}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Categories;




