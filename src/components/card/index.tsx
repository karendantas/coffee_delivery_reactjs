import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';

import {CardContainer, 
        ProductTagContainer,
        ProductBuyContainer,
        ProductContent,
    
        } from './styles';
import { ProductType } from '../../pages/home';


interface CardProps {
    data: ProductType
}
export function Card ({data}: CardProps){
    return (
        <CardContainer> 
            <ProductContent> 

                <img src={data.image} alt="" />
                <ProductTagContainer>
                    <div>{data.tags}</div>
                </ProductTagContainer>

                <h3>{data.title}</h3>
                <p> {data.description} </p>
            </ProductContent>

            <ProductBuyContainer>
                <div className = "price" >
                    <span>R$  <strong>{data.price}</strong> </span>
                </div>

                <div className = "add-to-cart" > 
                    <div className = "counter" >
                        <button> <Minus size={13} weight='bold'/> </button>
                            <span> 1 </span>
                        <button> <Plus size={13} weight='bold'/> </button>
                    </div>

                    <div className="cart">
                        <ShoppingCartSimple size = {20} weight='fill'/>
                    </div>
                </div>
            </ProductBuyContainer>
        </CardContainer>
    )
}