import { useState } from 'react';
import { addItem } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const ItemList = ({ list }) => {
    // const [quantities, setQuantities] = useState({});

    // const handleIncrement = (id) => {
    //     setQuantities((prev) => ({
    //         ...prev,
    //         [id]: (prev[id] || 0) + 1
    //     }));
    // };

    // const handleDecrement = (id) => {
    //     setQuantities((prev) => ({
    //         ...prev,
    //         [id]: prev[id] > 0 ? prev[id] - 1 : 0
    //     }));
    // };

    const dispatch = useDispatch();
    const addCartHandler = (name) => {
        dispatch(addItem(name));
    }

    return (
        <div>
            {list.map((item, index) => {
                const { name, id, imageId, price } = item.card.info;

                return imageId ? (
                    <li key={id + index} className="flex items-center justify-between p-5 border-t border-gray-200">
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
                        <div className="flex items-center space-x-4 text-white w-fit p-3 bg-green-800 rounded-md">
                            <button onClick={addCartHandler(name)} className="px-2">Add to cart</button>
                        </div>
                    </li>
                ) : null;
            })}
        </div>
    );
};

export default ItemList;