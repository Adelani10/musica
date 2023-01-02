import React from "react";
import { Link } from 'react-router-dom'

export default function NewReleases ({item}) {
    return (
            <Link to="" key={item.id} className="flex flex-col space-y-1 ">
                <img src={item.image} alt="" className=" rounded-2xl " />
                <div>
                    <h1 className="text-gray-400 text-xs tracking-tighter">{item.title}</h1>
                    <h4 className="text-gray-500 text-xs">{item.subtitle}</h4>
                </div>
                
            </Link>
            
    )
}