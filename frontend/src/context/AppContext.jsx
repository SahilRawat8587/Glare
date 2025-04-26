import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({children}) =>{

    const currency = import.meta.VITE_CURRENCY

    const navigate = useNavigate();
    const [user, setuser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setshowUserLogin] = useState(false);
    const [products, setproducts] = useState([]);

    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState({});


    // Fetch All Products
    const featchProducts = async () => {
        setproducts(dummyProducts);
    }

    //Add Product to Cart
    const addToCart = (itemId)=> {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]){
            cartData[itemId] += 1;
        } else{
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Item added to cart");
    }

    // UpdateCart Item qUANTITY
    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]){
            cartData[itemId] = quantity;
        } else{
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Cart Updated")
    }

    // Remove Cart Item
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]){
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0){
                delete cartData[itemId];
            } 
        }
        toast.success("Item removed from cart");
        setCartItems(cartData);
        
    }


    useEffect(() => {
        featchProducts()
    }, []);

    const value = {navigate, user, setuser, setIsSeller, isSeller, showUserLogin, setshowUserLogin, products, currency, addToCart, updateCartItem, removeFromCart, cartItems, setCartItems, searchQuery, setSearchQuery};

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}
