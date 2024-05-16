import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    width: 100%;
    height: 100vh;

    form{
        display: grid;
        grid-template-columns: 640px 1fr;
        gap: 2rem;
        
        justify-content: center;
    }
`;

const BaseFormContainer = styled.div`
    width: 100%;
    flex: 1;
    margin-top: 0.9375rem;

    background-color: ${props => props.theme['base-card']};
    border-radius: 6px;

    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;

`

export const InfosCotainer = styled.div`
    margin-bottom: 2rem;
`;
export const AddressFormContainer = styled(BaseFormContainer)`
`;

export const PaymentFormContainer = styled(BaseFormContainer)`
`;