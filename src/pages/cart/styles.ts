import styled from 'styled-components';

export const CartContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 2.5rem auto 0;

    form{
        display: grid;
        grid-template-columns: 640px 1fr;
        gap: 2rem;
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

export const ProductCart = styled.div`
    width: 100%;
    max-width: 450px;
    max-height: 430px;
    height: 100%;
    
    
    background-color: ${props => props.theme['base-card']};

    border-bottom-left-radius: 36px;
    border-top-right-radius: 36px;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: 1rem;
`;

export const ProductsInCartContainer = styled.div`
    display: flex;
    overflow: auto;
    align-items: center;
    flex-direction: column;
    padding: 2.5rem;

    &::-webkit-scrollbar{
        display: none;
    }
`;

export const Item = styled.div`

    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${props => props.theme['base-button']};

    & + &{
        margin-top: 1.5rem;
    }

    img {
        width: 4rem;
        height: 4rem;
    }
    & .add-to-cart { 
        display: flex;
        align-items: center;
        gap: 0.5rem;
        
    }
    & .content{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.625rem;
        
        background-color: ${props => props.theme['base-button']};
        border-radius: 6px;

        padding:0.5rem;  
        & span {
            font-size: 1rem;
            color: ${props => props.theme['base-subtitle']};
        }
    }
    & button {
        display: flex;
        align-items: center;
        justify-content: center;
    
        background-color: transparent;
        border:none;
        outline: none;

        color: ${props => props.theme['purple']}
    }

`;
export const ProductsPriceContainer = styled.div`
    
   padding: 1rem 2.5rem 1.5rem 2.5rem;
   width: 100%;
    div{
        display: flex;
        justify-content: space-between;

        span{
            font-size: 0.875rem;
            color: ${props => props.theme['base-text']}
        }
    }
    .total-price{
        span{
            font-size: 1.25rem;
            font-weight: bold;
            color: ${props => props.theme['base-subtitle']};
        }
        margin-bottom: 1.5rem;
    }

    button {
        width: 100%;
        height: 50px;
        border:none;
        border-radius: 6px;
        background-color: ${props => props.theme['yellow']};
        color: ${props => props.theme['white']};
        font-weight: bold;
        font-size: 0.875rem ;
        font-family: 'Roboto', sans-serif;

        &:hover{
            transition: 0.4s;
            background-color: ${props => props.theme['yellow-dark']};
        }
    }

`;
