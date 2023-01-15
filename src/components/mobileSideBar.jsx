import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AddContext } from "../context";

export default function MobileSideBar ({item}) {

    const {removeSideBar, radioOn, radioOff} = useContext(AddContext)

    function handleClick () {
        removeSideBar()
        if (item.title === "Radio"){
            radioOn()
        }else {
            radioOff()
        }
    }

    
    return (
        <Link onClick={handleClick} key={item.id} to={`/${item.path}`} className="flex items-center text-lg text-gray-400 space-x-4 hover:text-white focus:text-white">
            <img src={item.icon} alt="" />
            <h1 className="">{item.title}</h1>
        </Link>
    )
}