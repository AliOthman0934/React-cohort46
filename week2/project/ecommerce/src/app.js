import React, { useState, useEffect } from 'react';
import "./app.css";
import Categories from './components/Categories';
import Products from './components/Product';
import { RingLoader } from 'react-spinners';
import Alert from './components/Alert';

function App() {
    const [allProducts, setAllProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [alert,setAlert] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if(!response.ok){
                    throw new Error("Response its not Ok")
                }
                const data = await response.json();
                setAllProducts(data);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching data", error);
                setAlert('An error occurred while fetching data. Please try again later.');
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = selectedCategory ?
        allProducts.filter(product => product.category === selectedCategory) :
        allProducts;

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <RingLoader color="#7986cb" loading={loading} size={150} />
            </div>
        )
    }

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
            {alert && <Alert message={alert}></Alert>}
        </div>
    );
}

export default App;




