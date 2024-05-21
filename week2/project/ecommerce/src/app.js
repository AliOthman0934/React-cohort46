import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Categories from './components/Categories';
import Products from './components/Product';
import ProductDetail from './components/ProductDetail';
import { RingLoader } from 'react-spinners';
import Alert from './components/Alert';

function App() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [alert, setAlert] = useState(null);

    const [isCategoriesLoading, setCategoriesLoading] = useState(true);
    const [isProductsLoading, setProductsLoading] = useState(false);

    const [categoriesError, setCategoriesError] = useState(false);
    const [productsError, setProductsError] = useState(false);

    const navigate = useNavigate();

    const handleCategorySelect = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
            navigate('/');
        } else {
            setSelectedCategory(category);
            navigate(`/category/${category}`);
        }
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
                setCategoriesLoading(false);
            } catch (error) {
                console.error("Error fetching categories", error);
                setCategoriesError(true);
                setAlert('An error occurred while fetching categories. Please try again later.');
            } finally {
                setCategoriesLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const fetchProducts = async (category) => {
        setProductsLoading(true);
        let apiUrl = 'https://fakestoreapi.com/products';
        if (category) {
            apiUrl = `https://fakestoreapi.com/products/category/${category}`;
        }
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("Response is not Ok");
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products", error);
            setProductsError(true);
            setAlert('An error occurred while fetching products. Please try again later.');
        } finally {
            setProductsLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(selectedCategory);
    }, [selectedCategory]);

    const [products, setProducts] = useState([]);
    console.log(products);

    return (
        <div className="col">
            <Categories categories={categories} onSelectCategory={handleCategorySelect} selectedCategory={selectedCategory} />
            {isCategoriesLoading || isProductsLoading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '10vh' }}>
                    <RingLoader color="#7986cb" loading={true} size={50} />
                </div>
            ) : (
                <div className="col-lg-10 mx-auto">
                    <Routes>
                        <Route path="/" element={
                            <ul className="list-group shadow custom-ul">
                                {products.map((product) => (
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
                        } />
                        <Route path="/category/:category" element={
                            <ul className="list-group shadow custom-ul">
                                {products.map((product) => (
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
                        } />
                        <Route path="/product/:id" element={<ProductDetail selectedCategory={selectedCategory} />} />
                    </Routes>
                </div>
            )}
            {alert && <Alert message={alert}></Alert>}
        </div>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}







