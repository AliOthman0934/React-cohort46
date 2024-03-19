// App.js
import React, { useState } from 'react';
import "./app.css";
import Products from "./componente/products";
import allProducts from './fake-data/all-products';
import Categories from './componente/allCategories';

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Function to handle category selection
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    // Filter products based on the selected category
    const filteredProducts = selectedCategory ?
        allProducts.filter(product => product.category === selectedCategory) :
        allProducts;

    return (
        <div className="col">
            <Categories onSelectCategory={handleCategorySelect} />
            <div className="col-lg-10 mx-auto">
                <ul className="list-group shadow custom-ul">
                    {filteredProducts.map((product) => (
                        <Products
                            key={product.id}
                            id={product.id}
                            name={product.title}
                            category={product.category}
                            imgUrl={product.image}
                            price={product.price}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;



