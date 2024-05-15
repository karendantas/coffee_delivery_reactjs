import { AddressForm } from '../../components/form';
import { CheckoutContainer, FormContainer } from './styles';

export function Checkout(){
    return (
        
        <CheckoutContainer>
            <FormContainer>
                <h2>Complete seu pedido </h2>
                <div className = "address-form" >
                    <div className="infos">
                        <h4>Endereço de entrega</h4>
                        <span>Informe o endereço onde deseja receber seu pedido</span>
                    </div>
                    
                    <AddressForm />
                </div>
            </FormContainer>
        </CheckoutContainer>
    )
}