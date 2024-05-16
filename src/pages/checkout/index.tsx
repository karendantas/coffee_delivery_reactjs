import { AddressForm, PaymentForm } from '../../components/form';

import { AddressFormContainer, 
        CheckoutContainer, 
        InfosCotainer,
        PaymentFormContainer } from './styles';

export function Checkout(){
    return (
        
        <CheckoutContainer>
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
        </CheckoutContainer>
    )
}