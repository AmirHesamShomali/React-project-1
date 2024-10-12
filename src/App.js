import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Heloo } from './Hello';
import './index.css'
import { Timer } from './Timer';
import { Timelist } from './TimeList';
import { Item } from './Item';
import { TestContext } from './Context';
 export const App=()=>
{
    const[titel,settitle]=useState("salam")
    const[islight,setislight]=useState(false)
    const[Array,setarray]=useState(["000,000,0001","000,000,002"])


    const handeltitle=()=>
    {
        settitle("سلام")
    }

    useEffect(()=>
    {
        console.log("use effect");
        
        // return()=>
        // {

        // }


    },[islight])


    const handelislight=()=>
        {
            setislight(!islight)
        }

    return(
        <TestContext.Provider value={{Array:Array,setarray:setarray}} >
        <div className='main myback' style={{background:islight==true?"white" : "black"}}>
        <Heloo x={titel}/>
        <Timer   islight={islight} handelislight={handelislight}/>
        <Timelist/>
        
    </div>
    </TestContext.Provider>
    )
}