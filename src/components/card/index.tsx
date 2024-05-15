import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';

import {CardContainer, 
        ProductTagContainer,
        ProductBuyContainer,
        ProductContent,
    
        } from './styles';


export function Card (){
    return (
        <CardContainer> 
            <ProductContent> 

                <img src="src/assets/products/expresso.png" alt="" />
                <ProductTagContainer>
                    <div>TRADICIONAL</div>
                </ProductTagContainer>

                <h3>Expresso tradicional</h3>
                <p>O tradicional café feito com água quente e grãos moídos</p>
            </ProductContent>

            <ProductBuyContainer>
                <div className = "price" >
                    <span>R$  <strong>9,90</strong> </span>
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