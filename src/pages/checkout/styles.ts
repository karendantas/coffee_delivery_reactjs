import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 640px 1fr;


`;

export const FormContainer = styled.div`
    
    
    & .address-form{
        width: 100%;
        flex: 1;
        margin-top: 0.9375rem;

        background-color: ${props => props.theme['base-card']};

        padding: 2.5rem;

        display: flex;
        flex-direction: column;

    }



`;