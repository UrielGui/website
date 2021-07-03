import React, { useState } from 'react';
import Items from './items';
import MenuItems from './items/menuItems';

export default function PortfolioGallery() {
    const [productCategory, setProductCategory] = useState('all');

    return (
        <>
            <div className='flex justify-center mt-6 text-white uppercase sm:flex-row flex-col'>
                <MenuItems setProductCategory={setProductCategory} />
            </div>
            <div className='w-full flex justify-between flex-wrap lg:flex-row flex-col'>
                <Items productCategory={productCategory} />
            </div>
        </>
    );
}
