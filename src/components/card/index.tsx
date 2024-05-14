import {CardContainer, 
        ProductTagContainer,
        ProductBuyContainer,
    
        } from './styles';


export function Card (){
    return (
        <CardContainer> 
            <img src="src/assets/products/expresso.png" alt="" />
            <ProductTagContainer>
                <div>TRADICIONAL</div>
            </ProductTagContainer>

            <h3>Expresso tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ProductBuyContainer>
                <div className = "price" >
                    <span>R$</span>
                </div>
            </ProductBuyContainer>
        </CardContainer>
    )
}