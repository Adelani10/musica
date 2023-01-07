import React from "react";
import { Link } from 'react-router-dom'

export default function NewReleases ({item}) {
    return (
            <Link to="" key={item.id} className="flex flex-col space-y-1 min-w-[40%] md:min-w-[5%] ">
                <img src={item.image} alt="" className=" rounded-2xl md:w-auto " />
                <article>
                    <h1 className="text-gray-400 md:text-xs text-lg tracking-tighter">{item.title}</h1>
                    <h4 className="text-gray-500 md:text-xs text-sm">{item.subtitle}</h4>
                </article>
            </Link>
            
    )
}