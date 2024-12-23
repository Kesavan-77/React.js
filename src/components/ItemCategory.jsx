import React, { useState } from 'react';

const ItemCategory = ({ data }) => {
    const { title, itemCards } = data;
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return itemCards.length>0 ? (
        <div className="w-6/12 border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <div 
                className="flex justify-between items-center p-5 bg-white hover:bg-gray-50 cursor-pointer" 
                onClick={toggleAccordion}
            >
                <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
                <span className="text-2xl font-bold text-gray-500">
                    {isOpen ? '-' : '+'}
                </span>
            </div>

            <ul className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>            
                {itemCards.map((item) => {
                    const { name, id, imageId, price } = item.card.info;
                    return imageId ? (
                        <li key={id} className="flex items-center justify-between p-5 border-t border-gray-200">
                            <div className="flex items-center gap-4">
                                <img
                                    className="w-20 h-20 rounded-md object-cover"
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                                    alt={name || "Menu item image"}
                                />
                                <div>
                                    <p className="text-base font-medium text-gray-800">{name}</p>
                                    <p className="text-sm text-gray-500">₹{price ? (price / 100).toFixed(2) : "Price not available"}</p>
                                </div>
                            </div>
                        </li>
                    ) : null;
                })}
            </ul>
        </div>
    ) : <></> ;
};

export default ItemCategory;
