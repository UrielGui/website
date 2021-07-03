import React from 'react';
import OnHover from '../../../components/animations/onHover';
import { FaTimes } from 'react-icons/fa';

export default function ShowModalImage(image, setShowModal) {
    return (
        <>
            <div
                className='flex justify-center bg-main-color bg-opacity-75 fixed inset-0 z-50'
                onDoubleClick={() => setShowModal(null)}
            >
                <div className='pt-3 pb-14'>
                    <div className='flex justify-end'>
                        <OnHover>
                            <button
                                className='text-white text-3xl pb-1'
                                onClick={() => setShowModal(null)}
                            >
                                <FaTimes />
                            </button>
                        </OnHover>
                    </div>
                    <img src={image} className='max-w-full max-h-full' />
                </div>
            </div>
        </>
    );
}
