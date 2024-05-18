import { createContext, ReactNode, useEffect, useState } from "react"
import { ProductType } from "../pages/home";


interface ProductContextType {
    cart: ProductType[],
    addItemToCart: (data: ProductType) => void,
    removeItemFromCart: (productIdToRemove: string) => void,
}
export const ProductContext = createContext({} as ProductContextType );


interface ProductsContentProvider {
    children: ReactNode
}
export function ProductsContextProvider ({ children }: ProductsContentProvider){

    const [cart, setCart] = useState<ProductType[]>([]);

    function addItemToCart(data: ProductType){
        const newCartProduct: ProductType = {
            id: data.id,
            description: data.description,
            image: data.image,
            price: data.price,
            tags: data.tags,
            title: data.title
        }

        setCart([...cart, newCartProduct]);
        saveCartStateInStorage();
    }

    console.log(cart);

    function removeItemFromCart(productIdToRemove: string){
        const updatedCart= cart.filter((product) => {
            if (product.id != productIdToRemove) {
                return product;
            } 
        }) as ProductType[];

        setCart(updatedCart);
        saveCartStateInStorage();
    }

    function saveCartStateInStorage(){
        const storedProductsInCart = JSON.stringify(cart);
        localStorage.setItem('@coffee-delivery:cart-state-1.0.0', storedProductsInCart);
    }

    function updateCartFromStorage(){
        const storedProductsInCart = localStorage.getItem('@coffee-delivery:cart-state-1.0.0');
        if (storedProductsInCart){
            setCart(JSON.parse(storedProductsInCart))
        }   
    }

    useEffect ( () => {
        updateCartFromStorage();
    }, [])

    return (
        <ProductContext.Provider value={ {
            cart,
            addItemToCart,
            removeItemFromCart,

        } }>
            {children}
        </ProductContext.Provider>
    )
}