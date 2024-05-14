import { HomeContainer, 
        InfosContainer,
        InfoTextContent,
        InfoItems,
        CircleItem,
    } from './styles';

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react';

const HomeImg = 'src/assets/HomeImage.png';

export function Home(){
    return (
       <HomeContainer>

            <InfosContainer>
                <InfoTextContent>
                    <h1> Encontre o café perfeito para qualquer hora do dia </h1>
                    <p> Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora </p>
                </InfoTextContent>

                <InfoItems>
                    <div className='double-items'>
                        <div className='items'> 
                            <CircleItem itemNumber={1}> 
                                <ShoppingCart size={20} weight='fill' /> 
                            </CircleItem>

                            <p>Compra simples e segura</p>
                        </div>

                        <div className='items'> 
                            <CircleItem itemNumber={2}> 
                                <Timer size={20} weight='fill'  />  
                            </CircleItem>

                            <p>Entrega rápida e rastreada</p>
                        </div>
                    </div>

                    <div className='double-items'>
                        <div className='items'> 
                            <CircleItem itemNumber={3}> 
                                <Package size={20} weight='fill' /> 
                            </CircleItem>

                            <p>Embalagem mantém o café intacto</p>
                        </div>

                        <div className='items'> 
                            <CircleItem itemNumber={4} > 
                                <Coffee size={20} weight='fill' /> 
                            </CircleItem>

                            <p>O café chega fresquinho até você</p>
                        </div>
                    </div>

                </InfoItems>
            </InfosContainer>

            <div>
                <img src= {HomeImg}alt="" />
            </div>

       </HomeContainer>
    )
}