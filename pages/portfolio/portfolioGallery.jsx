import React, { useState } from 'react';
import Data from './data';

export default function PortfolioGallery() {

    let [categoryProduct, setCategoryProduct] = useState("all");
    let [active, setActive] = useState("m-1");

    const menuItems = () => (
        <React.Fragment>
          <span className={active === "m-1" ? 'p-2 px-3.5 mx-6 portfolio-active-menu' : 'p-2 mx-6 cursor-pointer'}
            onClick={() =>
              setCategoryProduct((categoryProduct = "all"),
                setActive(active = "m-1")
              )}>Todos</span>
    
          <span className={active === "m-2" ? 'p-2 px-3.5 mx-6 portfolio-active-menu' : 'p-2 mx-6 cursor-pointer'}
            onClick={() =>
              setCategoryProduct((categoryProduct = "web"),
                setActive(active = "m-2")
              )}>Web</span>
    
          <span className={active === "m-3" ? 'p-2 px-3.5 mx-6 portfolio-active-menu' : 'p-2 mx-6 cursor-pointer'}
            onClick={() =>
              setCategoryProduct((categoryProduct = "app"),
                setActive(active = "m-3")
              )}>App</span>
    
          <span className={active === "m-4" ? 'p-2 px-3.5 mx-6 portfolio-active-menu' : 'p-2 mx-6 cursor-pointer'}
            onClick={() =>
              setCategoryProduct((categoryProduct = "ui design"),
                setActive(active = "m-4")
              )}>Ui Design</span>
        </React.Fragment>
      );

      const items = () => (
        <>
          {Data.products.filter((val) => {
            if (categoryProduct === "all") {
              return val.category;
            }
            else {
              return val.category === categoryProduct;
            }
          }).sort((a, b) =>
          a.description > b.description ? 1 : -1
        ).slice(0, 4).map((product) => {
            return (
                <div key={product.id} className="lg:w-3/7 mt-10 three mb-8">
                    <div className="flex w-full p-6 bg-green-800 text-white sm:flex-row flex-col-reverse">
                   <div className="sm:w-1/2 w-full">
                       <div className="pr-4">
                        <div className="text-2xl">{product.title}</div>
                        <div className="mt-5 text-xs ">{product.description}</div>
                        <div className="mt-5 text-sm mb-5">{product.technologies}</div>
                        <a href={product.link} target="_blank">
                          <button className="uppercase bg-main-color p-2.5 rounded-lg px-6 hover:bg-white hover:text-main-color sm:m-0 m-auto flex">{product.more}</button>
                        </a>
                        </div>
                   </div>
                    <div className="sm:w-1/2 w-full">
                       <img className="sm:h-56 sm:w-72 sm:pb-0 pb-4" alt={product.name} src={product.image} />
                    </div>
                    </div>
                </div>
            );
          }
          )}
        </>
      );
    
    return (
        <>
            <div className="flex justify-center mt-6 text-white uppercase sm:flex-row flex-col">
                {menuItems()}
            </div>
            <div className="w-full flex justify-between flex-wrap lg:flex-row flex-col">
                {items()}
            </div>
        </>
);
}