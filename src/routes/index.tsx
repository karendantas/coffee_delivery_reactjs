import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { Cart } from '../pages/cart';
import { Success } from '../pages/success';

import { DefaultLayout } from '../layout/defaultLayout';

export function Router(){
    return (
        <Routes>
            <Route path='/' element= {<DefaultLayout />}> 
                <Route path='/' element = { <Home/> } />
                <Route path='/cart' element = { <Cart/> } />
                <Route path='/success' element = { <Success/> } />
            </Route>
        </Routes>
    )
}