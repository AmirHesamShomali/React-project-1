
import { createContext, useContext } from "react"
import {Item} from "./Item"
import { TestContext } from "./Context"

export const Timelist=(props)=>
{
    const context=useContext(TestContext)
    return(
  
        <div className="main_time_list">
            {context.Array.map((c)=>(
                <Item key={Math.random}>
                    {c}
                </Item>
            ))}

        </div>
    )
}


 