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
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductsContext';

const createNewOrderSchema = z.object({
    zipcode: z.string().min(1, 'Informe seu cep'),
    street: z.string().min(1, 'Informe sua rua'),
    number: z.number({message: 'Informe um número'}).min(1, 'Informe seu número'),
    complement: z.string(),
    neighborhood: z.string().min(1, 'Informe seu bairro'),
    city: z.string().min(1, 'Informe sua cidade'),
    uf: z.string().min(1, ''),
    pay: z.string()
   }); 

export type createNewOrderData = z.infer<typeof createNewOrderSchema>

export function Cart(){
    const { cart } = useContext(ProductContext);

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
                                {
                                    cart.map ( (product) => {
                                        return (
                                            <Item>
                                            <img src= {product.image} alt="" />  
                                                <div>
                                                    <span>{product.title}</span> 
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
            
                                            <strong>R$ {product.price}</strong>
                                            </Item>  
                                        )
                                    })
                                }

                                                  
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