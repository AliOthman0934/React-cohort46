import React, { useContext, useState, useEffect } from 'react';
import Alert from './Alert';
import FavoriteContext from './FavoriteContext';

function FavoritePage() {
    const { favorites } = useContext(FavoriteContext);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        if (favorites.length === 0) {
            setAlert('You have no favorite products.');
        } else {
            setAlert(null); 
        }
    }, [favorites]);

    return (
        <div>
            <h1>Favorite Products</h1>
            <div className="list-group shadow custom-ul">
                {favorites.map((product, index) => (
                    <img key={index} src={product.imgSrc} alt='product'></img>
                ))}
            </div>
            {alert && <Alert message={alert}></Alert>}
        </div>
    );
}

export default FavoritePage;



