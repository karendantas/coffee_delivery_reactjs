import styled from 'styled-components';
import * as RadioGroup from '@radix-ui/react-radio-group'

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    gap: 1rem;
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

interface InlineInputsProps{
    columns: number;
}
export const InlineInputs = styled.div<InlineInputsProps>`
    
    display: grid;
    grid-template-columns: ${props => props.columns === 2 ? '1fr 2fr' : '1fr 4fr 1fr'};
    gap: 0.75rem;
`

export const PaymentOptions = styled(RadioGroup.Root)`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const PaymentOptionButton = styled(RadioGroup.Item)`
    background-color: ${props => props.theme['base-button']};
    color:  ${props => props.theme['base-text']};
    font-size: 0.75rem;
    border: none;
    border-radius: 6px;

    border: 1px solid transparent;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
        
        span{
            color: ${props => props.theme['purple']};
            
            display: flex;
            align-items: center;
        }

        &[data-state='unchecked']:hover {
            transition: background-color 0.2s;
 
        }
        &[data-state='checked'] {
            background: ${props => props.theme['purple-light']};
            border: 1px solid ${props => props.theme['purple']};
        }
    
`