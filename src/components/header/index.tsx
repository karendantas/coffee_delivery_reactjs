import {MapPin, ShoppingCart} from 'phosphor-react'; 

import{ HeaderContainer, 
        LocalizationContainer, 
        MarketCartContent, 
    } from './styles';

const LogoImg = 'src/assets/Logo.png'

interface HeaderProps {
    cartQuantity: number;
}
export function Header ({ cartQuantity =2 }:HeaderProps){
    return (
        <HeaderContainer>
            <img src={LogoImg} alt="Logo com o nome do site e um icone de copo de cafe roxo ao lado" />

            <div>
                <LocalizationContainer> 
                    <MapPin size={24} weight='fill' /> Porto Alegre, RS
                </LocalizationContainer>

               

                    <MarketCartContent>
                        <ShoppingCart size={24} weight='fill'/>
                    </MarketCartContent>

                    {cartQuantity ? <span>{cartQuantity}</span> : null}
            </div>
        </HeaderContainer>
    )
}