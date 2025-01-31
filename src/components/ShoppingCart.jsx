import  { useReducer, useState } from "react";

// Boshlang'ich state funksiyasi (bo'sh savat)
const initialStateFunction = () => {
    return [
        { id: 1, name: "Apple", quantity: 2 },
        { id: 2, name: "Banana", quantity: 3 },
    ];
};

// Reducer funksiyasi
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            // Agar mahsulot allaqachon mavjud bo‘lsa, uning miqdorini oshiramiz
            { const existingItem = state.find((item) => item.name === action.payload);
            if (existingItem) {
                return state.map((item) =>
                    item.name === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // Yangi mahsulot qo‘shish
            return [...state, { id: Date.now(), name: action.payload, quantity: 1 }]; }

        case "INCREASE_QUANTITY":
            return state.map((item) =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

        case "DECREASE_QUANTITY":
            return state
                .map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0); // Agar miqdor 0 bo‘lsa, o‘chiramiz

        case "REMOVE_ITEM":
            return state.filter((item) => item.id !== action.payload);

        default:
            return state;
    }
};

const ShoppingCart = () => {
    const [cart, dispatch] = useReducer(cartReducer, [], initialStateFunction);
    const [newItem, setNewItem] = useState("");

    return (
        <div>
            <h2>Shopping Cart</h2>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                onClick={() => {
                    if (newItem.trim()) {
                        dispatch({ type: "ADD_ITEM", payload: newItem });
                        setNewItem("");
                    }
                }}
            >
                Add Item
            </button>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity}
                        <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}>
                            +
                        </button>
                        <button onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}>
                            -
                        </button>
                        <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
