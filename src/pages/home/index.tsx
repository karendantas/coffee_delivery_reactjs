import {HomeContainer,
    IntroContainer, 
    InfosContainer,
    InfoTextContent,
    InfoItems,
    CircleItem,
    ProductsContainer,
    ProductsContent,
} from './styles';

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react';

import { Card } from '../../components/card';

const HomeImg = 'HomeImage.png';

import {coffees} from '../../../data.json';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductsContext';

export type ProductType = {
    id: string,
    title: string,
    description: string,
    price: number,
    tags: string[],
    image: string,
}

export function Home(){
    const { addItemToCart, removeItemFromCart } = useContext(ProductContext);    

    function handleAddItemToCart(data: ProductType){
        addItemToCart(data);
    }
    function handleRemoveItemFromCart(productIdToRemove: string){
        removeItemFromCart(productIdToRemove);
    }

    return (
       <HomeContainer>
        <IntroContainer> 
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
        </IntroContainer>

        <ProductsContainer>
            <h1>Nossos cafés</h1>
            <ProductsContent>
                { coffees.map((coffee) => {
                    return ( 
                        <Card 
                            key = {coffee.id} 
                            data={coffee}
                            addItemToCart={ () => handleAddItemToCart(coffee)}
                            removeItemFromCart={ ()=>  handleRemoveItemFromCart(coffee.id)}
                        />
                    )
                })}
            </ProductsContent>
        </ProductsContainer>

       </HomeContainer>
    )
}