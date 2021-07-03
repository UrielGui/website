import React, { useState } from 'react';

export default function MenuItems(props) {
    const [active, setActive] = useState('m-1');
    const setProductCategory = props.setProductCategory;

    function onClickMenu(category, active) {
        setProductCategory(category), setActive(active);
    }
    return (
        <>
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
        </>
    );
}
