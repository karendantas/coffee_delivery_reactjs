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

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod';

const createNewOrderSchema = z.object({
    zipcode: z.string().min(1, 'Informe seu cep'),
    street: z.string().min(1),
    number: z.number().min(1),
    complement: z.string(),
    neighborhood: z.string().min(1),
    city: z.string(),
    uf: z.string().min(1)
   }); 

export type createNewOrderData = z.infer<typeof createNewOrderSchema>

export function Cart(){

    const newCartForm = useForm<createNewOrderData>({
        resolver: zodResolver(createNewOrderSchema)
    });
    const {handleSubmit, reset } = newCartForm;

    function handleCreateNewOrder(data:createNewOrderData){
        event?.preventDefault();
        console.log(data);
        reset();
    }

    return (
        
        <CartContainer>
            <form onSubmit={handleSubmit(handleCreateNewOrder)}> 
                <FormProvider {...newCartForm} > 
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
                                                <button type='button'> <Minus size={13} weight='bold'/> </button>
                                                    <span> 1 </span>
                                                <button type='button'> <Plus size={13} weight='bold'/> </button>
                                            </div>

                                            <div className="content">
                                                <button type='button'> <Trash /> <span>REMOVER</span> </button>
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
                </FormProvider>
            </form>
        </CartContainer>
    )
}