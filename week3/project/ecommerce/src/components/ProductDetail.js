import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FavoriteContext from "./FavoriteContext"

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const {toggleFavorite , favorites} = useContext(FavoriteContext)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const isFavorite = favorites.includes(id);

    const handleFavoriteToggle = ()=>{
        toggleFavorite(id)
    }
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                if (error.response) {
                    setError(error.response.data);
                } else if (error.request) {
                    setError('No response received from the server');
                } else {
                    setError('Error setting up the request');
                }
                setLoading(false);
            });
    }, [id]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {product && (
                <div className='card mb-3'style={{width:400 ,height:400 , textAlign:"center", margin:"auto"}} >
                        <h2 className='card-title'>{product.title}</h2>
                        <img className='card-img-top' src={product.image} alt={product.title} />
                        <p className='card-tex'>{product.description}</p>
                        <p className='card-tex'>Price: ${product.price}</p>
                        <button onClick={handleFavoriteToggle}>
                            {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
                        </button>
                    </div>    
            )}
        </div>
    );
}

export default ProductDetail;

