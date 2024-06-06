import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Public from '../pages/layouts/public/Public';
import Home from '../pages/layouts/Home/Home';


export const Routing = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Public />}>
                    <Route index element={<Home />} />

                    {/* <Route path='home' element={<Home />} />  */}
                </Route>

                {/* <Route path='*' element={<Error404 />} /> */}
            </Routes>

        </BrowserRouter>)
}
