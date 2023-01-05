import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AddContext } from "../context";

export default function MobileSideBar ({item}) {

    const {removeSideBar} = useContext(AddContext)
    return (
        <Link onClick={removeSideBar} key={item.id} to={`/${item.path}`} className="flex items-center text-gray-400 space-x-4 hover:text-white focus:text-white">
            <img src={item.icon} alt="" />
            <h1 className="text-sm">{item.title}</h1>
        </Link>
    )
}