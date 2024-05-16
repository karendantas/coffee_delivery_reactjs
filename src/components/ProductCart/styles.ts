import styled from 'styled-components';

export const ProductCartContainer = styled.div`
    width: 100%;

    background-color: ${props => props.theme['base-card']};

    border-bottom-left-radius: 36px;
    border-top-right-radius: 36px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 0.9375rem;

`;