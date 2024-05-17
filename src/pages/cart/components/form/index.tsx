import { CreditCard } from 'phosphor-react';
import {FormContent, 
        BaseInput, 
        InlineInputs, 
        PaymentOptions, 
        PaymentOptionButton} from './styles';

import { useFormContext } from 'react-hook-form';
import { createNewOrderData } from '../..';

export function AddressForm(){
    const { register } = useFormContext<createNewOrderData>();

    return (
        <FormContent> 
        
                <BaseInput type="text" placeholder='CEP' {...register('zipcode')} />
                <BaseInput type="text" size='full'  placeholder='rua' {...register('street')} />

            <InlineInputs columns={2}>
                    <BaseInput type="text" placeholder='Número' {...register('number')} />
                    <BaseInput type="text" size='full' placeholder='Complemento' {...register('complement')} />
            </InlineInputs>
 
            <InlineInputs columns={3}>
                    <BaseInput type="text" placeholder='Bairro'{...register('neighborhood')}  />
                    <BaseInput type="text" size='full' placeholder='Cidade' {...register('city')}  />
                    <BaseInput type="text" size='full' placeholder='Uf' {...register('uf')}  />
            </InlineInputs>
               
        </FormContent>
    )
}

export function PaymentForm(){
    const { register } = useFormContext<createNewOrderData>();
    return (
        <FormContent>
            <PaymentOptions {...register('pay')} >
                <PaymentOptionButton  value = "credit"> <span> <CreditCard size={20} /> </span>  CARTÃO DE CRÉDITO </PaymentOptionButton>
                <PaymentOptionButton value = "debit"> <span> <CreditCard size={20} /> </span>  CARTÃO DE CRÉDITO </PaymentOptionButton>
                <PaymentOptionButton value = "money"> <span> <CreditCard size={20} /> </span>  CARTÃO DE CRÉDITO </PaymentOptionButton>
            </PaymentOptions>
          

        </FormContent>
    )
}