import { Minus, Plus, Trash } from 'phosphor-react';
import { AddressForm, PaymentForm } from './components/form';

import { AddressFormContainer, 
        CartContainer, 
        InfosCotainer,
        Item,
        PaymentFormContainer, 
        ProductCart,
        ProductsInCartContainer,
        ProductsPriceContainer} from './styles';

export function Cart(){
    return (
        
        <CartContainer>
            <form> 
                <div>
                    <h2>Complete seu pedido </h2>

                    <AddressFormContainer >
                        <InfosCotainer>
                            <h4>Endereço de entrega</h4>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </InfosCotainer>

                        <AddressForm />
                    </AddressFormContainer>

                    <PaymentFormContainer>
                        <InfosCotainer className="infos">
                            <h4>Endereço de entrega</h4>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </InfosCotainer>

                        <PaymentForm />
                            
                    </PaymentFormContainer>
                </div>

                <div>
                    <h2>Cafés selecionados </h2>
                    <ProductCart> 
                        <ProductsInCartContainer>
                            <Item>
                                <img src="src/assets/products/expresso.png" alt="" />  
                                <div>
                                    <span>Expresso Tradicional</span> 
                                    <div className = "add-to-cart"> 
                                        <div className = "content">
                                            <button> <Minus size={13} weight='bold'/> </button>
                                                <span> 1 </span>
                                            <button> <Plus size={13} weight='bold'/> </button>
                                        </div>

                                        <div className="content">
                                            <button> <Trash /> <span>REMOVER</span> </button>
                                        </div>
                                    </div>
                                </div>

                                <strong>R$ 9.90</strong>
                            </Item>
                            <Item>
                                <img src="src/assets/products/expresso.png" alt="" />  
                                <div>
                                    <span>Expresso Tradicional</span> 
                                    <div className = "add-to-cart"> 
                                        <div className = "content">
                                            <button> <Minus size={13} weight='bold'/> </button>
                                                <span> 1 </span>
                                            <button> <Plus size={13} weight='bold'/> </button>
                                        </div>

                                        <div className="content">
                                            <button> <Trash /> <span>REMOVER</span> </button>
                                        </div>
                                    </div>
                                </div>

                                <strong>R$ 9.90</strong>
                            </Item>
                            
                        </ProductsInCartContainer>

                        <ProductsPriceContainer>
                            <div>
                                <span>Total de items</span>
                                <span> R$ 29,30</span>
                            </div>
                            <div>
                                <span>Entrega</span>
                                <span> R$ 29,30</span>
                            </div>
                            <div className="total-price">
                                <span>Total</span>
                                <span> R$ 29,30</span>
                            </div>

                            <button type='submit' > CONFIRMAR PEDIDO </button>
                        </ProductsPriceContainer>
                    </ProductCart>
                </div>
            </form>
        </CartContainer>
    )
}