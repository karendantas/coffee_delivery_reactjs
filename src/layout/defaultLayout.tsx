import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { LayoutContainer } from "./styles";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductsContext";


export function DefaultLayout(){
    const { cart } =  useContext(ProductContext);

    return (
        <LayoutContainer>
            <Header cartQuantity={cart.length}/>
            <Outlet />
        </LayoutContainer>
    )
}