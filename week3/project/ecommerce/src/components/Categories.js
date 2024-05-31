import React from 'react';
import { useNavigate } from 'react-router-dom';


function Categories({ categories, onSelectCategory, selectedCategory }) {
    const navigate = useNavigate();

    const handleFavoritesClick = () => {
        onSelectCategory('favorites'); 
        navigate('/favorites'); 
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-nav">
            <h1>Ecommerce</h1>
            <div className="collapse navbar-collapse custom-navbar" id="navbarNav">
                <ul className="navbar-nav">
                    {categories.map((category, index) => (
                        <li className="nav-item" key={index}>
                            <button
                                className={`custom-button ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => onSelectCategory(category)}
                                style={{ backgroundColor: selectedCategory === category ? '#7986cb' : 'transparent' }}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                    <li className="nav-item">
                        <button
                            className={`custom-button ${selectedCategory === null ? 'active' : ''}`}
                            onClick={() => onSelectCategory(null)}
                            style={{ backgroundColor: selectedCategory === null ? '#7986cb' : 'transparent' }}
                        >
                            All Products
                        </button>
                    </li>

                    <li className="nav-item">
                        <button
                            className={`custom-button ${selectedCategory === 'favorites' ? 'active' : ''}`}
                            onClick={handleFavoritesClick}
                            style={{ backgroundColor: selectedCategory === 'favorites' ? '#7986cb' : 'transparent' }}
                        >
                        Favorites

                        </button>
                    </li>    
                </ul>
            </div>
        </nav>
    );
}

export default Categories;











