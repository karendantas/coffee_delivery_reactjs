import styled from 'styled-components';

export const HeaderContainer = styled.header `
    height: 6.25rem;
    max-width: 1120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    position: relative;

    div{
        display: flex;
        align-items: center;


        span{
            background-color: ${ props => props.theme['yellow-dark']};
            color: ${props => props.theme['white']};
            border-radius: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 4px;
            height: 1.5rem;
            width: 1.5rem;


            position: absolute;
            right: -1%;
            top: 20%;
        }
    }
    
`
export const LocalizationContainer = styled.div`
    background-color: ${ props => props.theme['purple-light']};
    color: ${props => props.theme['purple']};

    border-radius: 6px;

    padding: 8px;
    gap: 4px;

    margin-right: 0.875rem;

`

export const MarketCartContent = styled.a`
    background-color: ${ props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    
    line-height: 0;

    border-radius: 6px;
    padding: 8px;

`

