import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./app.css";
import Categories from './components/Categories';
import Products from './components/Product';
import ProductDetail from './components/ProductDetail';
import { RingLoader } from 'react-spinners';
import Alert from './components/Alert';
import {FavoriteProvider} from './components/FavoriteContext';
import FavoritePage from './components/FavoritePage';
import Navbar from './components/Navbar';

function App() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(prevCategory=>
            prevCategory === category ? null : category
            );
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                if (!response.ok) {
                    throw new Error("Response is not Ok");
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories", error);
                setAlert('An error occurred while fetching categories. Please try again later.');
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            let apiUrl = 'https://fakestoreapi.com/products';
            if (selectedCategory) {
                apiUrl = `https://fakestoreapi.com/products/category/${selectedCategory}`;
            }
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error("Response is not Ok");
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products", error);
                setLoading(false);
                setAlert('An error occurred while fetching products. Please try again later.');
            }
        };

        fetchProducts();
    }, [selectedCategory]);

    const [products, setProducts] = useState([]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <RingLoader color="#7986cb" loading={loading} size={150} />
            </div>
        )
    }

    return (
        <FavoriteProvider>
            <Router>
                <div className='navbar'>
                    <Navbar></Navbar>
                </div>
                <div className="col">
                    <Categories categories={categories} onSelectCategory={handleCategorySelect} />
                    <div className="col-lg-10 mx-auto">
                        <Routes>
                            <Route exact path="/" element={
                                <ul className="list-group shadow custom-ul">
                                    {products.map((product) => (
                                        <Products
                                            key={product.id}
                                            id={product.id}
                                            name={product.title}
                                            category={product.category}
                                            imgUrl={product.image}
                                            price={product.price}
                                        />
                                    ))}
                                </ul>} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/favorites" element={<FavoritePage />} />
                        </Routes>
                    </div>
                    {alert && <Alert message={alert}></Alert>}
                </div>
            </Router>
        </FavoriteProvider>
    );
}

export default App;








