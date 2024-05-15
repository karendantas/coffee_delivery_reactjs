import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 16rem ;
    height: 19.375rem;

    background-color: ${props => props.theme['base-card']};

    border-bottom-left-radius: 36px;
    border-top-right-radius: 36px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProductContent =  styled.div`
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    
    text-align: center;
    img{
        transform: translateY(-20%);
    }
    h3{
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }

`
export const ProductTagContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    div{
        background-color: ${props => props.theme['yellow-light']};
        color:  ${props => props.theme['yellow-dark']};

        font-weight: bold;
        font-size: 0.625rem;
        padding: 0.25rem 0.5rem;

        border-radius: 100px;
    }
`
export const ProductBuyContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.4375rem;

    margin-bottom: 1.25rem;

    & .price strong{
        font-weight: bold;
        font-size: 1.5rem;
    }

    & .add-to-cart { 
        display: flex;
        align-items: center;
        gap: 0.5rem;
        
    }
    & .counter{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        
        background-color: ${props => props.theme['base-button']};
        border-radius: 6px;

        padding:0.5rem;  
        & span {
            font-size: 1rem;
            color: ${props => props.theme['base-title']};
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

    & .cart{
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${props => props.theme['purple-dark']};
        color: ${props => props.theme['base-card']};
        border-radius: 6px;
        padding: 0.5rem;
    }


    

`;
