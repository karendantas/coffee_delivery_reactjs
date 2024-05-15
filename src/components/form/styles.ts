import styled from 'styled-components';


export const AddressFormContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 6px;
`;

interface InputProps {
    size?: 'full';
}
export const BaseInput = styled.input<InputProps>`
    background-color: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-button']};

    padding: 0.75rem;
    border-radius: 4px;
    outline:none;   

    display: flex;
    width: ${ props => props.size === 'full' ? '100%' : 'auto' };

    `

export const FormGroup = styled.div`


`

interface InlineInputsProps{
    columns: number;
}
export const InlineInputs = styled.div<InlineInputsProps>`
    
    display: grid;
    grid-template-columns: ${props => props.columns === 2 ? '1fr 2fr' : '1fr 4fr 1fr'};
    gap: 0.75rem;
`