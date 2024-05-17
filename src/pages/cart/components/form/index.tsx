import { CreditCard } from 'phosphor-react';
import {FormContent, 
        BaseInput, 
        FormGroup, 
        InlineInputs, 
        PaymentOptions, 
        PaymentOptionButton} from './styles';

import { useFormContext } from 'react-hook-form';
import { createNewOrderData } from '../..';

export function AddressForm(){
    const { register, formState: {errors} } = useFormContext<createNewOrderData>();

    return (
        <FormContent> 
            
            <FormGroup>
                <BaseInput type="text" placeholder='CEP' {...register('zipcode')} />
                { errors && <span>{errors.zipcode?.message} </span> }
            </FormGroup>
     
            <FormGroup>
                <BaseInput type="text" size='full'  placeholder='rua' {...register('street')}  />
                { errors && <span>{errors.street?.message} </span> }
            </FormGroup>

            <InlineInputs columns={2}>
                <FormGroup>
                    <BaseInput type="text" placeholder='Número' {...register('number')} />
                    { errors && <span>{errors.number?.message} </span> }
                </FormGroup>

                <FormGroup>
                    <BaseInput type="text" size='full' placeholder='Complemento' {...register('complement')} />
                    { errors && <span>{errors.complement?.message} </span> }
                </FormGroup>
            </InlineInputs>
 
            <InlineInputs columns={3}>
                <FormGroup>
                    <BaseInput type="text" placeholder='Bairro'{...register('neighborhood')}  />
                    { errors && <span>{errors.neighborhood?.message} </span> }
                </FormGroup>

                <FormGroup>
                    <BaseInput type="text" size='full' placeholder='Cidade' {...register('city')}  />
                    { errors && <span>{errors.city?.message} </span> }
                </FormGroup>

                <FormGroup>
                    <BaseInput type="text" size='full' placeholder='Uf' {...register('uf')}  />
                    { errors && <span>{errors.uf?.message} </span> }
                </FormGroup>

            </InlineInputs>
               
        </FormContent>
    )
}

export function PaymentForm(){
    const { register } = useFormContext();
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