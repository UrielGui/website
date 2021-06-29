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
          {Data.products.sort((a, b) =>
            a.description > b.description ? 1 : -1
          ).filter((val) => {
            if (categoryProduct === "all") {
              return val.category;
            }
            else {
              return val.category === categoryProduct;
            }
          }).slice(0, 4).map((product, a, b) => {
            return (
                <div key={product.id} className="w-3/7 mt-10 three mb-8">
                    <div className="flex w-full p-6 bg-green-800 text-white">
                   <div className="w-1/2">
                       <div className="pr-4">
                        <div className="text-2xl">{product.title}</div>
                        <div className="mt-5 text-xs ">{product.description}</div>
                        <div className="mt-5 text-sm">{product.technologies}</div>
                        <a href={product.link} target="_blank">
                          <button className="mt-5 uppercase bg-main-color p-2.5 rounded-lg px-6 hover:bg-white hover:text-main-color">{product.more}</button>
                        </a>
                        </div>
                   </div>
                   <div className="w-1/2">
                       <img className="h-56 w-72" alt={product.name} src={product.image} />
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
            <div className="flex justify-center mt-6 text-white uppercase">
                {menuItems()}
            </div>
            <div className="w-full flex justify-between flex-wrap">
                {items()}
            </div>
        </>
);
}