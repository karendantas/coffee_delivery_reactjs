import { AddressForm, PaymentForm } from './components/form';

import { AddressFormContainer, 
        CartContainer, 
        InfosCotainer,
        PaymentFormContainer, 
        ProductCart} from './styles';

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
                        oi
                    </ProductCart>
                </div>
            </form>
        </CartContainer>
    )
}