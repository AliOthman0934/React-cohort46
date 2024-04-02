// FavoriteContext.js
import React, { createContext, useState } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (product) =>{
        const prevFavorits = [...favorites];

        const newFavorites = prevFavorits.concat(product);

        setFavorites(newFavorites);
    };

    const removFromFavorites = (id)=>{
        const prevFavorits = [...favorites];

        const newFavorites = prevFavorits.filter((product)=>{
            return product.id !== id ;
        })
        setFavorites(newFavorites);
    }

    return (
        <FavoriteContext.Provider value={{ favorites, addToFavorites, removFromFavorites }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteContext;
