import React from 'react';
import Data from '../../../components/data';
import PortfolioAnimation from '../../../components/animations/portfolioAnimation';
import { FcSearch } from 'react-icons/fc';
import { ShowModalImage } from './showModal';
import OnHover from '../../../components/animations/onHover';

export default function items(props) {
    const productCategory = props.productCategory;
    const [showModal, setShowModal] = React.useState();

    return (
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
                                <div className='flex w-full p-6 bg-green-800 text-white sm:flex-row flex-col-reverse rounded-md'>
                                    <div className='sm:w-1/2 w-full'>
                                        <div className='pr-4 sm:pt-0 pt-4'>
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
                                    <div className='sm:w-72 relative'>
                                        <img
                                            className='h-full w-full rounded-md'
                                            alt={product.name}
                                            src={product.image}
                                        />
                                        <div
                                            className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl cursor-pointer bg-uriel-blue-light bg-opacity-70 rounded-md'
                                            onClick={() =>
                                                setShowModal(() =>
                                                    ShowModalImage(
                                                        product.image,
                                                        setShowModal
                                                    )
                                                )
                                            }
                                        >
                                            <OnHover>
                                                <FcSearch />
                                            </OnHover>
                                        </div>
                                    </div>
                                </div>
                            </PortfolioAnimation>
                        </div>
                    );
                })}
            {showModal}
        </>
    );
}
