// App.js
import React, { useState } from 'react';
import "./app.css";
import allProducts from './fake-data/all-products';
import Categories from './components/Categories';
import Products from './components/Product';


function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleCategorySelect = (category) => {
        setSelectedCategory((prevCategory) => 
            prevCategory === category ? null : category
        );
    };
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
                            isAvailable={product.isAvailable}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;



