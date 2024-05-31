import React, { useContext, useEffect, useState } from 'react';
import FavoriteContext from './FavoriteContext';
import Products from './Product';
import { RingLoader } from 'react-spinners';

const FavoritesPage = () => {
    const { favorites } = useContext(FavoriteContext);
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFavoriteProducts = async () => {
            try {
                const fetchedProducts = await Promise.all(
                    favorites.map(async (id) => {
                        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                );
                setFavoriteProducts(fetchedProducts);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (favorites.length > 0) {
            fetchFavoriteProducts();
        } else {
            setLoading(false);
        }
    }, [favorites]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '10vh' }}>
                <RingLoader color="#7986cb" loading={true} size={50} />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Favorites</h2>
            <div className="card-group-fav">
                {favoriteProducts.length > 0 ? (
                    favoriteProducts.map((product) => (
                        <Products
                            key={product.id}
                            id={product.id}
                            name={product.title}
                            imgUrl={product.image}
                            price={product.price}
                            isAvailable={product.isAvailable}
                        />
                    ))
                ) : (
                    <p>No favorite products found.</p>
                )}
            </div>
        </div>
    );
};

export default FavoritesPage;
