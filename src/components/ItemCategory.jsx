import React, { useState } from 'react';
import ItemList from './ItemList';

const ItemCategory = ({ data, showItem, setShowItem }) => {
    const { title, itemCards } = data;
    const toggleAccordion = () => {
        setShowItem();
    };

    return itemCards.length>0 ? (
        <div className="w-6/12 border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <div 
                className="flex justify-between items-center p-5 bg-white hover:bg-gray-50 cursor-pointer" 
                onClick={toggleAccordion}
            >
                <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
                <span className="text-2xl font-bold text-gray-500">
                    {showItem ? '-' : '+'}
                </span>
            </div>
            <ul className={`transition-all duration-300 ease-in-out ${showItem ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <ItemList list = {itemCards}/>
            </ul>
        </div>
    ) : <></> ;
};

export default ItemCategory;
