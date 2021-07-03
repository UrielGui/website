import React, { useState } from 'react';
import Data from '../../components/data';
import PortfolioAnimation from '../../components/animations/portfolioAnimation';

export default function PortfolioGallery() {
    let [productCategory, setProductCategory] = useState('all');
    let [active, setActive] = useState('m-1');
    let [showModal, setShowModal] = useState();

    function showModalImage() {
        return (
            <>
                <div className='h-full w-full fixed inset-0 bg-red-500 z-50'>
                    <h1 className='text-white'>Olá Mundo!</h1>
                    <button onClick={() => setShowModal('')}>
                        Fechar Modal
                    </button>
                </div>
            </>
        );
    }

    function onClickMenu(category, active) {
        setProductCategory(category), setActive(active);
    }

    const menuItems = () => (
        <React.Fragment>
            <span
                className={
                    active === 'm-1'
                        ? 'p-2 px-3.5 mx-6 portfolio-active-menu'
                        : 'p-2 mx-6 cursor-pointer'
                }
                onClick={() => onClickMenu('all', 'm-1')}
            >
                Todos
            </span>

            <span
                className={
                    active === 'm-2'
                        ? 'p-2 px-3.5 mx-6 portfolio-active-menu'
                        : 'p-2 mx-6 cursor-pointer'
                }
                onClick={() => onClickMenu('web', 'm-2')}
            >
                Web
            </span>

            <span
                className={
                    active === 'm-3'
                        ? 'p-2 px-3.5 mx-6 portfolio-active-menu'
                        : 'p-2 mx-6 cursor-pointer'
                }
                onClick={() => onClickMenu('app', 'm-3')}
            >
                App
            </span>

            <span
                className={
                    active === 'm-4'
                        ? 'p-2 px-3.5 mx-6 portfolio-active-menu'
                        : 'p-2 mx-6 cursor-pointer'
                }
                onClick={() => onClickMenu('ui design', 'm-4')}
            >
                Ui Design
            </span>
        </React.Fragment>
    );

    const items = () => (
        <>
            {Data.products
                .filter((val) => {
                    if (productCategory === 'all') {
                        return val;
                    } else {
                        return val.category === productCategory;
                    }
                })
                .sort((a, b) => (a.description > b.description ? 1 : -1))
                .slice(0, 4)
                .map((product) => {
                    return (
                        <div
                            key={product.id}
                            className='lg:w-3/7 mt-10 three mb-8'
                        >
                            <PortfolioAnimation>
                                <div className='flex w-full p-6 bg-green-800 text-white sm:flex-row flex-col-reverse'>
                                    <div className='sm:w-1/2 w-full'>
                                        <div className='pr-4'>
                                            <div className='text-2xl'>
                                                {product.title}
                                            </div>
                                            <div className='mt-5 text-xs '>
                                                {product.description}
                                            </div>
                                            <div className='mt-5 text-sm mb-5'>
                                                {product.technologies}
                                            </div>
                                            <a
                                                href={product.link}
                                                target='_blank'
                                            >
                                                <button className='uppercase bg-main-color p-2.5 rounded-lg px-6 hover:bg-white hover:text-main-color sm:m-0 m-auto flex'>
                                                    {product.more}
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='sm:w-1/2 w-full'>
                                        <img
                                            className='sm:h-56 sm:w-72 sm:pb-0 pb-4'
                                            alt={product.name}
                                            src={product.image}
                                            onClick={() =>
                                                setShowModal(() =>
                                                    showModalImage()
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </PortfolioAnimation>
                        </div>
                    );
                })}
        </>
    );

    return (
        <>
            <div className='flex justify-center mt-6 text-white uppercase sm:flex-row flex-col'>
                {menuItems()}
            </div>
            <div className='w-full flex justify-between flex-wrap lg:flex-row flex-col'>
                {items()}
            </div>
            {showModal}
        </>
    );
}
