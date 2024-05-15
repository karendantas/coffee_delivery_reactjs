import { AddressFormContent, BaseInput, FormGroup, InlineInputs } from './styles';

export function AddressForm(){
    return (
        <AddressFormContent> 
            
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
         
                
                   
        </AddressFormContent>
    )
}