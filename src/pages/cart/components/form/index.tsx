import { CreditCard } from 'phosphor-react';
import {FormContent, 
        BaseInput, 
        FormGroup, 
        InlineInputs, 
        PaymentOptions, 
        PaymentOptionButton} from './styles';

export function AddressForm(){
    return (
        <FormContent> 
            
            <FormGroup>
                <BaseInput type="text" placeholder='CEP' />
            </FormGroup>
     
            <FormGroup>
                <BaseInput type="text" size='full'  placeholder='rua' />
            </FormGroup>

            <InlineInputs columns={2}>
                <FormGroup>
                    <BaseInput type="text" placeholder='Número' />
                </FormGroup>

                <FormGroup>
                    <BaseInput type="text" size='full' placeholder='Complemento' />
                </FormGroup>
            </InlineInputs>
 
            <InlineInputs columns={3}>
                <FormGroup>
                    <BaseInput type="text" placeholder='Bairro' />
                </FormGroup>

                <FormGroup>
                    <BaseInput type="text" size='full' placeholder='Cidade' />
                </FormGroup>

                <FormGroup>
                    <BaseInput type="text" size='full' placeholder='Uf' />
                </FormGroup>

            </InlineInputs>
               
        </FormContent>
    )
}

export function PaymentForm(){
    return (
        <FormContent>
            <PaymentOptions>
                <PaymentOptionButton value = "credit"> <span> <CreditCard size={20} /> </span>  CARTÃO DE CRÉDITO </PaymentOptionButton>
                <PaymentOptionButton value = "debit"> <span> <CreditCard size={20} /> </span>  CARTÃO DE CRÉDITO </PaymentOptionButton>
                <PaymentOptionButton value = "money"> <span> <CreditCard size={20} /> </span>  CARTÃO DE CRÉDITO </PaymentOptionButton>
            </PaymentOptions>

        </FormContent>
    )
}