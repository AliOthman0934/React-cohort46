// import React from 'react';
// import allCategories from "../fake-data/all-categories";

// function Categories({ onSelectCategory }) {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark custom-nav ">
//             <h1>Ecommerce</h1>
//             <div className="collapse navbar-collapse custom-navbar" id="navbarNav">
//                 <ul className="navbar-nav ">
//                     {allCategories.map((category, index) => (
//                         <li className="nav-item" key={index}>
//                             <button className="custom-button" onClick={() => onSelectCategory(category)}>{category}</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </nav>
//     )
// }

// export default Categories;

// import React from 'react';

// function Categories({ categories, onSelectCategory }) {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark custom-nav">
//             <h1>Ecommerce</h1>
//             <div className="collapse navbar-collapse custom-navbar" id="navbarNav">
//                 <ul className="navbar-nav">
//                     {categories && categories.length > 0 ? (
//                         categories.map((category, index) => (
//                             <li className="nav-item" key={index}>
//                                 <button className="custom-button" onClick={() => onSelectCategory(category)}>{category}</button>
//                             </li>
//                         ))
//                     ) : (
//                         <li className="nav-item">
//                             <p>No categories available</p>
//                         </li>
//                     )}
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Categories;

// import React from 'react';

// function Categories({ categories, onSelectCategory, selectedCategory }) {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark custom-nav">
//             <h1>Ecommerce</h1>
//             <div className="collapse navbar-collapse custom-navbar" id="navbarNav">
//                 <ul className="navbar-nav">
//                     {categories.map((category, index) => (
//                         <li className="nav-item" key={index}>
//                             <button
//                                 className={`custom-button ${selectedCategory === category ? 'active' : ''}`}
//                                 onClick={() => onSelectCategory(category)}
//                             >
//                                 {category}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Categories;


import React from 'react';

function Categories({ categories, onSelectCategory, selectedCategory }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-nav">
            <h1>Ecommerce</h1>
            <div className="collapse navbar-collapse custom-navbar" id="navbarNav">
                <ul className="navbar-nav">
                    {categories.map((category, index) => (
                        <li className="nav-item" key={index}>
                            <button
                                className={`custom-button ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => onSelectCategory(category)}
                                style={{ backgroundColor: selectedCategory === category ? '#7986cb' : 'transparent' }}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                    <li className="nav-item">
                        <button
                            className={`custom-button ${selectedCategory === null ? 'active' : ''}`}
                            onClick={() => onSelectCategory(null)}
                            style={{ backgroundColor: selectedCategory === null ? '#7986cb' : 'transparent' }}
                        >
                            All Products
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Categories;











