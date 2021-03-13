import React from 'react';

export default function TextPage(props) {
    return (
        <>
            <div className="lg:flex flex-row-reverse pr-10 lg:pt-3.5 2xl:text-2xl hidden">
                <h2 className="text-uriel-blue-light uppercase">{props.titulo}</h2>
            </div>
            <div className="lg:flex flex-row-reverse pr-10 hidden">
                <div className="border-bottom-blue-light"></div>
            </div>
        </>
    )
}