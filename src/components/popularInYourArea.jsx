import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AddContext } from "../context";

export default function Popular ({item}) {

    const {handlePopFav} = useContext(AddContext)
    return (
            <Link to="" key={item.id} className="flex flex-col space-y-1 min-w-[40%] md:min-w-[5%] ">
                <div className="relative">
                    <img src={item.image} alt="" className=" rounded-2xl w-full md:w-auto " />
                    <button onClick={()=> handlePopFav(item.id)} className="absolute top-1 right-2" >
                        {item.isFavorited ? <i className="fa-solid fa-heart text-[#FACD66]"></i>
                            : <i className="fa-regular fa-heart text-gray-400"></i>}
                    </button>
                </div>
                
                <section className="flex justify-between">
                    <article>
                        <h1 className="text-gray-400 md:text-xs text-lg tracking-tighter">{item.title}</h1>
                        <h4 className="text-gray-500 md:text-xs text-sm">{item.subtitle}</h4>
                    </article>
                </section>
                
            </Link>
    )
}