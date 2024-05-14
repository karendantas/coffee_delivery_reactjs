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

    text-align: center;

    img{
        transform: translateY(-20%);
    }
    h3{
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }

`;

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

    &.price{
        display: flex;
    }

`;
