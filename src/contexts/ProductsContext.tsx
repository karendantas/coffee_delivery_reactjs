import { createContext, ReactNode, useState } from "react"
import { ProductType } from "../pages/home";


interface ProductContextType {
    cart: ProductType[],
    addItemToCart: (data: ProductType) => void;
    removeItemFromCart: (productIdToRemove: string) => void;
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
    }

    console.log(cart);

    function removeItemFromCart(productIdToRemove: string){
        const updatedCart= cart.filter((product) => {
            if (product.id != productIdToRemove) {
                return product;
            } 
        }) as ProductType[];

        setCart(updatedCart);
    }

    return (
        <ProductContext.Provider value={ {
            cart,
            addItemToCart,
            removeItemFromCart
        } }>
            {children}
        </ProductContext.Provider>
    )
}