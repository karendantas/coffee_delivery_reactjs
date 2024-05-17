import {MapPin, ShoppingCart} from 'phosphor-react'; 

import{ HeaderContainer, 
        LocalizationContainer, 
        MarketCartContent, 
    } from './styles';

const LogoImg = '/Logo.png'

interface HeaderProps {
    cartQuantity: number;
}
export function Header ({ cartQuantity =2 }:HeaderProps){
    return (
        <HeaderContainer>
            <a href="/"><img src={LogoImg} alt="Logo com o nome do site e um icone de copo de cafe roxo ao lado" /></a>

            <div>
                <LocalizationContainer> 
                    <MapPin size={24} weight='fill' /> Porto Alegre, RS
                </LocalizationContainer>

               

                    <MarketCartContent href='/cart'>
                        <ShoppingCart size={24} weight='fill'/>
                    </MarketCartContent>

                    {cartQuantity ? <span>{cartQuantity}</span> : null}
            </div>
        </HeaderContainer>
    )
}