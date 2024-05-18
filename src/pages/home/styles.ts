import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;

    margin: 0 auto;



`;
export const IntroContainer = styled.div`
    min-height: 34rem ;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;
`;
export const InfosContainer = styled.div`
    width: 36.875rem;

    display:flex;
    flex-direction: column;
    gap: 4.125rem;
`;
export const InfoTextContent = styled.div`

    h1{
        width: 100%;
        font-size: 3rem;
        font-weight: bolder;
        margin-bottom: 1rem;

        color: ${props => props.theme['base-title']}
    }
    p{
        font-size: 1.25rem;
        width: 90%;
        color: ${props => props.theme['base-subtitle']}
    }
`;
export const InfoItems = styled.div`
  display: flex;
  gap: 3.5rem;

  div.double-items{
    display: grid;
    gap: 20px;
  }

  div.items{
    display: flex;
    align-items: center;
    gap:0.34375rem;
  }

`;
interface CicleItemProps {
    itemNumber: number
}

export const CircleItem = styled.div<CicleItemProps>`
    height: 2rem;
    width: 2rem;
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${ 
        props => props.itemNumber === 1 ?  props.theme['yellow-dark'] :
        props => props.itemNumber === 2 ? props.theme['yellow-light'] :
        props => props.itemNumber === 3 ? props.theme['base-text'] :
        props => props.itemNumber === 4 && props.theme['purple-dark']

        };
    color: ${props => props.theme['white']};
`;

/*Products styles */

export const ProductsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:3.375rem;
`;
export const ProductsContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
`;