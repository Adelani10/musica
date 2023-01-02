import React from "react";
import { useState } from "react";
import { data } from "./data";
import { newReleases } from "./data";

const AddContext = React.createContext()

function Context (props) {
    const [topChartsData, setTopChartsData] = useState(data)
    const [newReleasesData, setNewReleasesData] = useState(newReleases)



    return (
        <AddContext.Provider value={{
            topChartsData,
            newReleasesData
        }}>
            {props.children}
        </AddContext.Provider>
    )
}

export {Context, AddContext}