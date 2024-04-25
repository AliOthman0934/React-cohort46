import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import Categories from './Categories';


function ProductDetail(props) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            <Categories></Categories>
            {loading && (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <RingLoader color="#7986cb" loading={loading} size={150} />
                </div>
            )}
            {!loading && error && <p>Error: {error}</p>}
            {!loading && product && (
                <div className='card mb-3'style={{width:400 ,height:400 , textAlign:"center", margin:"auto"}} >
                    <h2 className='card-title'>{product.title}</h2>
                    <img className='card-img-top' src={product.image} alt={product.title} />
                    <p className='card-tex'>{product.description}</p>
                    <p className='card-tex'>Price: ${product.price}</p>
                </div>
            )}
        </div>
    );
}

export default ProductDetail;



